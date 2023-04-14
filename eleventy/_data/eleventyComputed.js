const dirname = require("path").posix.dirname;

const getOrderNumberRegex = /\/(\d+)[^\/]*\/$/;

module.exports = {
  eleventyNavigation: {
    key: (data) => data.page.url,
    title: (data) => data.title,
    order: (data) => {
      const match = data.page.url.match(getOrderNumberRegex);
      return match ? match[1] : -1;
    },
    parent: (data) => {
      const parentPath = dirname(data.page.url);
      let newResult = parentPath + "/";
      if (data.page.url === "/") {
        newResult = undefined;
      } else if ((parentPath === ".") | (parentPath === "/")) {
        newResult = "/";
      }
      return newResult;
    },
  },
};
