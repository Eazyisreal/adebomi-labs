import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { SANITY_PUBLICATIONS_TAG } from "@/lib/sanity/publications";

type SanityWebhookPayload = {
  _type?: string;
  _id?: string;
  operation?: "create" | "update" | "delete";
};

function isAuthorized(request: NextRequest): boolean {
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!configuredSecret) {
    return false;
  }

  const secretFromQuery = request.nextUrl.searchParams.get("secret");
  const secretFromHeader = request.headers.get("x-sanity-webhook-secret");
  const providedSecret = secretFromQuery ?? secretFromHeader;

  return Boolean(providedSecret && providedSecret === configuredSecret);
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let payload: SanityWebhookPayload = {};

  try {
    payload = (await request.json()) as SanityWebhookPayload;
  } catch {
    payload = {};
  }

  // Revalidate tagged publication cache and route whenever publication records change.
  if (!payload._type || payload._type === "publication") {
    revalidateTag(SANITY_PUBLICATIONS_TAG);
    revalidatePath("/publications");
  }

  return NextResponse.json({
    revalidated: true,
    route: "/publications",
    tag: SANITY_PUBLICATIONS_TAG,
    type: payload._type ?? null,
    id: payload._id ?? null,
    operation: payload.operation ?? null,
    now: Date.now(),
  });
}
