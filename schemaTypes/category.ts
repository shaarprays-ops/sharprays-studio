import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categories",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (rule) => rule.required(),
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
        "Short description of this category for archive pages and SEO.",
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
          ? `/blog/category/${subtitle}`
          : "No slug",
      };
    },
  },
});