const yaml = require("js-yaml");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const plantuml = require("eleventy-plugin-plantuml");
const transformUrls = require("./eleventy/transformUrls");
const StructurizrEleventyPlugin = require("./structurizr/11ty-plugin");
const data = {
  diagrams: require("./eleventy/_data/diagrams")()
}

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
  eleventyConfig.addPassthroughCopy({ "eleventy/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy("arc42/**/*.(png|gif|jpg|svg)");
  eleventyConfig.addTransform("transformUrls", transformUrls);

  // Function to recursively render navigation
  function renderNavigation(items, currentPageUrl, allCollections, parentIndex = '', isTopLevel = true) {

    //make sure every item has the correct "order" from the frontmatter
    for (const item of items) {
      for (const fullItem of allCollections) {
        if (item.url === fullItem.url) {
          if ('order' in fullItem.data) {
            item.order = fullItem.data.order;
          }
        }
      }
    }
    //sort based on "order" of the frontmatter
    items.sort((a, b) => {
      return a.order - b.order;
    });

    let html = '';
    let counter = 1;

    for (const item of items) {
      let currentIndex = isTopLevel ? '' : (parentIndex ? `${parentIndex}.${counter}` : counter.toString());
      let isActive = currentPageUrl.startsWith(item.url);
      let displayTitle = isTopLevel ? item.title : `${currentIndex} ${item.title}`;

      if (isTopLevel) {
        // Top-level items are not collapsible
        html += `<li ${isActive ? 'style="font-weight: bold;"' : ''}><a href="${item.url}">${displayTitle}</a></li>`;

        if (item.children && item.children.length) {
          // Recursively call for children with updated parentIndex and isTopLevel flag
          html += renderNavigation(item.children, currentPageUrl, allCollections, currentIndex, false);
        }
      } else {
        if (item.children && item.children.length) {
          // Nested items with children are collapsible
          html += `<details class="collapsible" ${isActive ? 'open' : ''}>`;
          html += `<summary ${isActive ? 'style="font-weight: bold;"' : ''}><a href="${item.url}" class="${isTopLevel ? 'nav-parent' : 'nav-child'}">${displayTitle}</a></summary>`;
          html += renderNavigation(item.children, currentPageUrl, allCollections, currentIndex, false);
          html += `</details>`;
        } else {
          // Nested items without children are not collapsible
          html += `<ul class="nav-list" ${isActive ? 'style="font-weight: bold;"' : ''}><a href="${item.url}">${displayTitle}</a></ul>`;
        }
      }

      counter++;
    }

    return html ? `<ul>${html}</ul>` : '';
  }

  // Add the function as a filter
  eleventyConfig.addFilter("renderNav", renderNavigation);
  eleventyConfig.addPlugin(StructurizrEleventyPlugin, { ...data.diagrams })

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