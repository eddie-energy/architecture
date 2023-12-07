const yaml = require("js-yaml");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const plantuml = require("eleventy-plugin-plantuml");
const transformUrls = require("./eleventy/transformUrls");
const { writeIssues } = require("bprt")

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
  eleventyConfig.addPassthroughCopy({ "eleventy/assets": "assets" });
  eleventyConfig.addPassthroughCopy("arc42/**/*.(png|gif|jpg|svg)");
  eleventyConfig.addTransform("transformUrls", transformUrls);

  eleventyConfig.on('eleventy.before', async () => {
    await writeIssues()
  });

  // Function to recursively render navigation
  function renderNavigation(items, currentPageUrl, parentIndex = '', isTopLevel = true) {
    let html = '';
    let counter = 1;

    for (const item of items) {
        // Generate the index for the current item
        let currentIndex = isTopLevel ? '' : (parentIndex ? `${parentIndex}.${counter}` : counter.toString());

        let isActive = currentPageUrl.startsWith(item.url);

        if (item.children && item.children.length) {
            let displayTitle = isTopLevel ? item.title : `${currentIndex} ${item.title}`;
            html += `<details class="collapsible" ${isActive ? 'open' : ''}>`;
            html += `<summary><a href="${item.url}" class="nav-parent">${displayTitle}</a></summary>`;
            // Recursively call for children with updated parentIndex and isTopLevel flag
            html += renderNavigation(item.children, currentPageUrl, currentIndex, false);
            html += `</details>`;
        } else {
            let displayTitle = isTopLevel ? item.title : `${currentIndex} ${item.title}`;
            html += `<details class="collapsible" ${isActive ? 'open' : ''}>`;
            html += `<summary><a href="${item.url}" class="nav-child">${displayTitle}</a></summary>`;
            html += `</details>`;
        }

        counter++;
    }

    return html ? `<ul>${html}</ul>` : '';
}




  // Add the function as a filter
  eleventyConfig.addFilter("renderNav", renderNavigation);

  return {
    dir: {
      input: "arc42",
      includes: "../eleventy/_includes",
      data: "../eleventy/_data",
      output: "eleventy/_site",
    },
    pathPrefix: "/architecture/",
  };
};

