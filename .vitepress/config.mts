import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

import { buildSidebar } from "./sidebar";

import renderMarkdownImage from "./renderMarkdownImage";

const srcExclude = undefined; // nothing excluded (at the moment)

// An empty sub-items is added to make all top-level sidebar items appear the same way.
const sidebarItems = buildSidebar("./arc42", "", srcExclude)?.items?.map(
  (item) => ({ ...item, collapsed: true, items: item.items ?? [] })
);

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "EDDIE Architecture",
  description: "European Distributed Data Infrastructure For Energy",
  srcDir: "./arc42",
  srcExclude,
  base: "/architecture/",
  lang: "en-GB",
  head: [
    ["link", { rel: "icon", href: "/architecture/figures/favicon.svg" }],
    [
      "script",
      {
        // async: "",
        src: "https://diagrams-eddie.projekte.fh-hagenberg.at/static/js/structurizr-embed.js",
      },
    ],
    [
      "script",
      {},
      `function receiveStructurizrMessage(message) {
        if (message?.data?.view)
          console.log("diagram navigated", { "new-diagram-key": message.data.view })
      }
      window.addEventListener("message", receiveStructurizrMessage);`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/figures/favicon.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "EDDIE Operation Manual", link: "https://architecture.eddie.energy/framework/" },
      { text: "AIIDA Operation Manual", link: "https://architecture.eddie.energy/aiida/" }
    ],

    sidebar: sidebarItems,

    socialLinks: [
      { icon: "github", link: "https://github.com/eddie-energy/architecture" },
    ],
    editLink: {
      text: "Edit this page on GitHub",
      pattern:
        "https://github.com/eddie-energy/architecture/blob/main/arc42/:path",
    },
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        forceLocale: true,
      },
    },
    search: {
      provider: "local",
    },
  },
  vite: {
    assetsInclude: ["**/*.puml"],
  },
  vue: {
    template: {
      transformAssetUrls: {
        Img: ["src"],
      },
    },
  },
  markdown: {
    config: (md) => {
      md.renderer.rules.image = renderMarkdownImage;
    },
  },
}));
