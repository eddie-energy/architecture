const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("**/*.png");
  return {};
};
