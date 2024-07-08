# Contributing to the EDDIE Architecture Document

Thank you for your interest in contributing! At the moment, we accept contributions with minimum effort. Here are some basic guidelines:

## How to view the document

There are 2 options to read the architecture documentation:
1. [Visit the architecture website](https://eddie-web.projekte.fh-hagenberg.at/architecture/).
2. Set up the architecture website locally by using Node.js 20. 
    - `npm install` to install dependencies
    - `npm run dev` starts serving the website locally

## Notes for editing

The Markdown files are processed using vitepress which support a variety of [Markdowns extensions](https://vitepress.dev/guide/markdown). However, these are the main things to keep in mind:

- **embed images**: Please use markdown syntax `![An example image](./image.png)` to embed images into the page. These will formatted to the text width and include a zoom-in feature automatically.
- **embed C4 diagrams**: `<C4 diagram="diagram-name" />` where diagram-name is an existent name in the project's [Structurizr instance](https://diagrams-eddie.projekte.fh-hagenberg.at/).
- **use HTML**: Please avoid using HTML if possible and use Markdown instead. If necessary, all not self-closing tags (like `<p>`) have to be closed to make it compatible with [Vue.js](https://vuejs.org/) templates.

**Editing comments**

To mark pages or sections as outdated, GitHub Alerts can be used to provide these comments. These are used to indicate that a page or section contains questionable or even misleading information. This is a note to the document's reader as well as for the editors to mark sections that need improvement.

```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

## How to Contribute

### Suggest improvements

As soon as you have a suggestion of any type to improve the document, please create an [issue](https://github.com/eddie-energy/architecture/issues). It would help to use a label to characterize an estimated priority level (low, medium, high), and other labels to describe the type of issue.

### Solving issues

If you wish to resolve an existing [issue](https://github.com/eddie-energy/architecture/issues), please push your solution with one commit message (or more if necessary) describing your changes directly on the main branch. In this commit message, please also add the number of the issue at the end, e.g., "Add link to CONTRIBUTING file #43". Provide a short description of the solution to the issue including links to the changes on the [website](https://eddie-web.projekte.fh-hagenberg.at/architecture/).

