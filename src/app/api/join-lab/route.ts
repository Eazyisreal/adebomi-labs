import { NextRequest, NextResponse } from "next/server";

type JoinLabPayload = {
  fullName: string;
  email: string;
  institution: string;
  currentLevel: string;
  fieldOfStudy: string;
  interestReason: string;
  joinReason: string;
  resumeFileName: string;
  resumeFileType: string;
  resumeFileSize: number;
  resumeFileBase64?: string;
  submittedAt: string;
};

type AppsScriptResponse = {
  success?: boolean;
  message?: string;
};

const REQUIRED_FIELDS: (keyof JoinLabPayload)[] = [
  "fullName",
  "email",
  "institution",
  "currentLevel",
  "fieldOfStudy",
  "interestReason",
  "joinReason",
];

const MAX_RESUME_SIZE_BYTES = 2 * 1024 * 1024; // 2MB
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const appsScriptSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!appsScriptUrl) {
    return NextResponse.json(
      { message: "GOOGLE_APPS_SCRIPT_URL is not configured." },
      { status: 500 }
    );
  }

  const endpoint = new URL(appsScriptUrl);
  if (appsScriptSecret) {
    endpoint.searchParams.set("secret", appsScriptSecret);
  }

  const formData = await request.formData();
  const resumeFile = formData.get("resume");
  const resume = resumeFile instanceof File ? resumeFile : null;

  if (resume && resume.size > MAX_RESUME_SIZE_BYTES) {
    return NextResponse.json({ message: "Resume file must be 2MB or smaller." }, { status: 400 });
  }

  if (resume && resume.type && !ALLOWED_RESUME_TYPES.has(resume.type)) {
    return NextResponse.json(
      { message: "Resume must be a PDF, DOC, or DOCX file." },
      { status: 400 }
    );
  }

  let resumeFileBase64 = "";
  if (resume) {
    const bytes = new Uint8Array(await resume.arrayBuffer());
    // Convert binary file bytes to base64 so Apps Script can reconstruct the file.
    resumeFileBase64 = Buffer.from(bytes).toString("base64");
  }

  const payload: JoinLabPayload = {
    fullName: getStringValue(formData, "fullName"),
    email: getStringValue(formData, "email"),
    institution: getStringValue(formData, "institution"),
    currentLevel: getStringValue(formData, "currentLevel"),
    fieldOfStudy: getStringValue(formData, "fieldOfStudy"),
    interestReason: getStringValue(formData, "interestReason"),
    joinReason: getStringValue(formData, "joinReason"),
    resumeFileName: resume ? resume.name : "",
    resumeFileType: resume ? resume.type : "",
    resumeFileSize: resume ? resume.size : 0,
    resumeFileBase64: resumeFileBase64 || undefined,
    submittedAt: new Date().toISOString(),
  };

  const missingFields = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missingFields.length > 0) {
    return NextResponse.json(
      { message: "Please fill all required fields.", missingFields },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get("content-type") ?? "";
    let appsScriptBody: AppsScriptResponse | null = null;

    if (contentType.includes("application/json")) {
      appsScriptBody = (await response.json().catch(() => null)) as AppsScriptResponse | null;
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Unable to submit your application right now.",
          details: appsScriptBody?.message ?? "Apps Script request failed.",
        },
        { status: 502 }
      );
    }

    if (appsScriptBody?.success === false) {
      return NextResponse.json(
        { message: appsScriptBody.message ?? "Unable to submit your application right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Unable to submit your application right now." },
      { status: 502 }
    );
  }
}
