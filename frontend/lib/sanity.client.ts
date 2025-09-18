import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lgi7ljpj",   // 👈 from your sanity.config.ts
  dataset: "production",
  apiVersion: "2025-09-13", // today's date
  useCdn: true,
});
