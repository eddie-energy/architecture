const yaml = require("js-yaml");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const plantuml = require("eleventy-plugin-plantuml");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(plantuml.plugin, {
    protocol: "http",
    hostname: "localhost",
    port: 19283,
    prefix: "",
    outputType: "svg",
    imgClass: "plantuml",
  });
  eleventyConfig.setDataFileBaseName("index");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("!(node_modules|_site)/**/*.(png|gif|jpg)");
  return { pathPrefix: "/architecture/" };
};
