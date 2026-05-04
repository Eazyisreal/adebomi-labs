import { PUBLICATIONS } from "@/lib/publications-content";
import { hasSanityConfig, sanityClient } from "@/lib/sanity/client";
import type { Publication } from "@/types/publications";

type SanityPublicationResult = {
  title: string;
  citation: string;
  url?: string;
  orderRank?: number;
  featuredRank?: number;
  showOnHomepage?: boolean;
};

export const SANITY_PUBLICATIONS_TAG = "sanity.publications";
const SANITY_PUBLICATIONS_REVALIDATE_SECONDS = 300;

const publicationsProjection = `{
  title,
  citation,
  url,
  orderRank,
  featuredRank,
  showOnHomepage
}`;

const publicationsQuery = `*[_type == "publication" && defined(title) && defined(citation)] | order(coalesce(orderRank, 9999) asc, _createdAt desc) ${publicationsProjection}`;
const featuredPublicationsQuery = `*[_type == "publication" && defined(title) && defined(citation) && showOnHomepage == true] | order(coalesce(featuredRank, coalesce(orderRank, 9999)) asc, _createdAt desc) ${publicationsProjection}`;

async function fetchSanityPublications(query: string): Promise<SanityPublicationResult[]> {
  if (!sanityClient) {
    return [];
  }

  return sanityClient.fetch<SanityPublicationResult[]>(
    query,
    {},
    {
      next: {
        revalidate: SANITY_PUBLICATIONS_REVALIDATE_SECONDS,
        tags: [SANITY_PUBLICATIONS_TAG],
      },
    }
  );
}

export async function getPublications(): Promise<Publication[]> {
  if (!hasSanityConfig || !sanityClient) {
    return PUBLICATIONS;
  }

  try {
    const results = await fetchSanityPublications(publicationsQuery);

    if (!results?.length) {
      return PUBLICATIONS;
    }

    return results.map((item) => ({
      title: item.title,
      citation: item.citation,
      url: item.url,
    }));
  } catch {
    return PUBLICATIONS;
  }
}

export async function getHomepageFeaturedPublications(limit = 4): Promise<Publication[]> {
  if (!hasSanityConfig || !sanityClient) {
    return PUBLICATIONS.slice(0, limit);
  }

  try {
    const results = await fetchSanityPublications(featuredPublicationsQuery);

    if (!results?.length) {
      return PUBLICATIONS.slice(0, limit);
    }

    return results.slice(0, limit).map((item) => ({
      title: item.title,
      citation: item.citation,
      url: item.url,
    }));
  } catch {
    return PUBLICATIONS.slice(0, limit);
  }
}
