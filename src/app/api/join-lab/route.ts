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
  submittedAt: string;
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

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json(
      { message: "GOOGLE_APPS_SCRIPT_URL is not configured." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const resumeFile = formData.get("resume");

  const payload: JoinLabPayload = {
    fullName: getStringValue(formData, "fullName"),
    email: getStringValue(formData, "email"),
    institution: getStringValue(formData, "institution"),
    currentLevel: getStringValue(formData, "currentLevel"),
    fieldOfStudy: getStringValue(formData, "fieldOfStudy"),
    interestReason: getStringValue(formData, "interestReason"),
    joinReason: getStringValue(formData, "joinReason"),
    resumeFileName: resumeFile instanceof File ? resumeFile.name : "",
    resumeFileType: resumeFile instanceof File ? resumeFile.type : "",
    resumeFileSize: resumeFile instanceof File ? resumeFile.size : 0,
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
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const responseText = await response.text();
      return NextResponse.json(
        {
          message: "Unable to submit your application right now.",
          details: responseText.slice(0, 300),
        },
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
