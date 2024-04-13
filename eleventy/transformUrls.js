const posthtml = require("posthtml");

const posthtmlProcessor = posthtml();

function transformHrefs(tree) {
  tree.match({ tag: "a" }, (node) => {
    const link = node.attrs?.href;
    if (
      typeof link === "string" &&
      link.search("://") === -1 &&
      link.endsWith(".md")
    ) {
      const path = link.slice(0, -3).split("/");
      const pl = path.length;
      if (pl >= 2 && (path[pl - 1] === "index" || path[pl - 1] === path[pl - 2])) {
        node.attrs.href = path.slice(0, -1).join("/") + "/";
      } else {
        node.attrs.href = link.slice(0, -3) + "/";
      }
    }
    return node;
  });
  return tree;
}

function transformUrls(content) {
  let result = posthtmlProcessor
    .use(transformHrefs)
    .process(content, { sync: true }).html;
  return result;
}

module.exports = transformUrls;
