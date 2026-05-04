import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion: process.env.SANITY_API_VERSION ?? "2025-01-01",
      // Keep CDN disabled on the server so webhook revalidation reflects quickly.
      useCdn: false,
    })
  : null;
