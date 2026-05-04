import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";

import { PUBLICATIONS } from "../lib/publications-content";

loadEnv({ path: ".env" });
loadEnv({ path: ".env.local", override: true });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token =
  process.env.SANITY_WRITE_TOKEN ??
  process.env.SANITY_API_WRITE_TOKEN ??
  process.env.SANITY_API_TOKEN ??
  process.env.SANITY_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION ?? "2025-01-01";

function toId(title: string, index: number) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `publication-${index + 1}-${slug || "item"}`;
}

async function main() {
  if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID.");
  }

  if (!token) {
    throw new Error(
      "Missing write token. Set one of: SANITY_WRITE_TOKEN, SANITY_API_WRITE_TOKEN, SANITY_API_TOKEN, SANITY_TOKEN."
    );
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion,
    useCdn: false,
  });

  for (const [index, publication] of PUBLICATIONS.entries()) {
    await client.createIfNotExists({
      _id: toId(publication.title, index),
      _type: "publication",
      title: publication.title,
      citation: publication.citation,
      url: publication.url,
      orderRank: index + 1,
      featuredRank: index + 1,
      showOnHomepage: index < 4,
    });
  }

  console.log(`Seeded ${PUBLICATIONS.length} publications into Sanity (${dataset}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
