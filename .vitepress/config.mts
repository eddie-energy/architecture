import { defineConfig } from "vitepress";

import { buildSidebar } from "./sidebar";

const srcExclude = ["**/*\\(obsolete\\)/**", "**/*-removed/**"];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EDDIE Architecture",
  description: "European Distributed Data Infrastructure For Energy",
  srcDir: "./arc42",
  srcExclude,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/figures/favicon-32x32.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/figures/favicon-32x32.png",
    nav: [{ text: "Home", link: "/" }],

    sidebar: buildSidebar("./arc42", "", srcExclude)?.items?.map( (item) => ({ ...item, collapsed: true })),

    socialLinks: [
      { icon: "github", link: "https://github.com/eddie-energy/architecture" },
    ],
  },
});
