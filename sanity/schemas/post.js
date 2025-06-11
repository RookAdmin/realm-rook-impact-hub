import { defineField } from "sanity";

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "industry",
      title: "Industry",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
  ],
};
