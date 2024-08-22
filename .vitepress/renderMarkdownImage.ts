const renderMarkdownImage = (tokens, idx, _options, _env, _self) => {
  const token = tokens[idx];
  const src = token.attrGet("src");
  const alt = token.attrGet("alt");
  if (src.includes("aiida_deployment_view")) {
    console.log({ tokens, idx, _options, _env, _self });
    console.log({ token, src, alt });
  }
  return `<ClientOnly><Img src="${src}" alt="${alt}" /></ClientOnly>`;
};

export default renderMarkdownImage;
