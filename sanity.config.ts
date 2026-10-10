import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Sharp rays",

  projectId: "2ozf1ef2",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
  ],

  releases: {
    enabled: false,
  },

  scheduledDrafts: {
    enabled: false,
  },

  schema: {
    types: schemaTypes,
  },
});