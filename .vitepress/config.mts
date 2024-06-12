import { defineConfig } from "vitepress";

import { buildSidebar } from "./sidebar";

import renderMarkdownImage from "./renderMarkdownImage";

const srcExclude = ["**/*\\(obsolete\\)/**", "**/*-removed/**"];

// An empty sub-items is added to make all top-level sidebar items appear the same way.
const sidebarItems = buildSidebar("./arc42", "", srcExclude)?.items?.map(
  (item) => ({ ...item, collapsed: true, items: item.items ?? [] })
);

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

    sidebar: sidebarItems,

    socialLinks: [
      { icon: "github", link: "https://github.com/eddie-energy/architecture" },
    ],
  },
  markdown: {
    config: (md) => {
      md.renderer.rules.image = renderMarkdownImage;
    },
  },
});
