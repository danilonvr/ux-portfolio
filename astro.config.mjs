// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Trocar pelo domínio definitivo quando ele for comprado.
  site: "https://danilovalois.framer.ai",
  integrations: [mdx()],
});
