const yaml = require("js-yaml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataFileBaseName("index");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("!(node_modules|_site)/**/*.(png|gif|jpg)");
  return {};
};
