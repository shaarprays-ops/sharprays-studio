import { authorType } from "./author";
import { blogPostType } from "./blogPost";
import { categoryType } from "./category";
import { tagType } from "./tag";

export const schemaTypes = [
  blogPostType,
  categoryType,
  tagType,
  authorType,
];