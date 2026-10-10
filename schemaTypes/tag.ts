import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Tags",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tag Name",
      type: "string",
      validation: (rule) => rule.required().min(2).max(60),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description:
        "Short description of this topic for archive pages and SEO.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },

    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? `/blog/tag/${subtitle}`
          : "No slug",
      };
    },
  },
});