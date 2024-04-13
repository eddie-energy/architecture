var path = require('path');
const posthtml = require("posthtml");
const { insertAt } = require("posthtml-insert-at");

const posthtmlProcessor = posthtml();

module.exports = function (eleventyConfig, pluginOptions) {
    const { structurizrBasePath, structurizrWorkspaceId } = pluginOptions

    const diagrams = {}
    // Add Structurizr C4 Shortcode (Shortcodes can be used in Markdown as well: https://github.com/11ty/eleventy/issues/944)
    eleventyConfig.addShortcode("c4", function (diagramKey) {
        // prevent users form accidentally prefixing the diagramKey with '#'
        if (diagramKey.startsWith("#")) {
            console.warn(`WARNING (${diagramKey}): please do not prefix the diagram key with '#'`)
            diagramKey = diagramKey.substring(1)
        }

        // generate random suffix so that ids do not collide (https://stackoverflow.com/a/33146982)
        const suffix = btoa(Math.random()).slice(-7, -2)
        const id = `c4_${diagramKey}_${suffix}`
        const pathname = eleventyConfig.pathPrefix + this.page.url.substring(1) + "#" + id

        // create the URL using JavaScript's URL API (this allows us to properly append the pathname and search params)
        const url = new URL(structurizrBasePath);
        url.pathname = `embed/${structurizrWorkspaceId}`;
        url.searchParams.append("diagram", diagramKey);
        url.searchParams.append("diagramSelector", false);
        url.searchParams.append("iframe", id);

        diagrams[diagramKey] = { id, pathname }

        return `
  <iframe
    class="c4-diagram"
    id="${id}"
    src="${url}"
    width="100%"
    marginwidth="0"
    marginheight="0"
    frameborder="0"
    scrolling="no"
    sandbox='allow-scripts allow-same-origin'
    allowfullscreen="true">
  </iframe>`
    })

    eleventyConfig.addTransform("addStructurizrHandlers", async (content, outputPath) => {
        if (outputPath && outputPath.endsWith(".html")) {
            return (await posthtml()
                .use(insertAt({
                    selector: "body",
                    append: `
<script type="text/javascript">
const diagrams = ${JSON.stringify(diagrams)};

function receiveStructurizrMessage(message) {
    const diagram = message?.data?.view
    const source = message?.data?.iframe
    const target = diagrams[diagram]?.id
    if (source !== target)
        if (!diagrams.hasOwnProperty(diagram))
            alert("WARNING: " + diagram + " is not embedded in the architecture documentation")
        else
            window.location = diagrams[diagram].pathname
}

window.addEventListener("message", receiveStructurizrMessage);
</script>
<script type="text/javascript" src="${structurizrBasePath}/static/js/structurizr-embed.js"></script>`
                }))
                .process(content)).html
        }

        // Don't modify otherwise
        return content;
    });
};