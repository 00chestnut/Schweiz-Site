// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import pageInsight from "astro-page-insight";

export default defineConfig({
  // site: "https://onboardf1.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), pagefind({
    //@ts-ignore
    indexPageContent: true,
    customSearchIndex: {
      storeFields: ["title", "description", "pagefind:category"],
    },
    searchPagePath: "/search",
  }), partytown(), sitemap(), pageInsight()],
/*  image: {
    domains: [
      "onboardf1.netlify.app", 
      "maks.z0fil5dsgi-xlm41ok1r6dy.p.temp-site.link",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "maks.z0fil5dsgi-xlm41ok1r6dy.p.temp-site.link",
      },
      {
        protocol: "https",
        hostname: "onboardf1.netlify.app",
      },
    ],
  }, 
*/
  adapter: netlify(),
});