// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import LayoutWithFrontmatterTitle from "./LayoutWithFrontmatterTitle.vue";
import C4Diagram from "./C4Diagram.vue";

export default {
  extends: DefaultTheme,
  Layout: LayoutWithFrontmatterTitle,

  enhanceApp({ app }) {
    app.component("C4", C4Diagram);
  },
} satisfies Theme;
