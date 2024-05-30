import { defineConfig } from 'vitepress';

import {buildSidebar} from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EDDIE Architecture",
  description: "European Distributed Data Infrastructure For Energy",
  srcDir: "./arc42",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: buildSidebar("./arc42", "")?.items,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eddie-energy/architecture' }
    ]
  }
});
