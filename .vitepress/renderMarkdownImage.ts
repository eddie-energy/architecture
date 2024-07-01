
const renderMarkdownImage = (tokens, idx, _options, _env, _self) => {
    const token = tokens[idx];
    return `<Img src="${token.attrGet("src")}" alt="${token.attrGet("alt")}" />`
  };

export default renderMarkdownImage;
