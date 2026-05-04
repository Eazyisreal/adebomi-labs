import { defineField, defineType } from "sanity";

export const publicationType = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "citation",
      title: "Citation",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Paper URL",
      type: "url",
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank (Publications Page)",
      type: "number",
      description: "Lower numbers appear first on the Publications page.",
    }),
    defineField({
      name: "showOnHomepage",
      title: "Show On Homepage",
      type: "boolean",
      initialValue: true,
      description: "Control whether this publication appears in Featured Research on the homepage.",
    }),
    defineField({
      name: "featuredRank",
      title: "Featured Rank (Homepage)",
      type: "number",
      description: "Lower numbers appear first in homepage Featured Research.",
      hidden: ({ document }) => document?.showOnHomepage === false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "citation",
    },
  },
});
