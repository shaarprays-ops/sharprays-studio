import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "2ozf1ef2",
    dataset: "production",
  },

  deployment: {
    autoUpdates: true,
  },
});