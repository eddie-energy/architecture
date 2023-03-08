const getOrderNumberRegex = /^\/(\d+)-/;

module.exports = {
  eleventyNavigation: {
    key: (data) => data.page.url,
    title: (data) => data.title,
    order: (data) => {
      const match = data.page.url.match(getOrderNumberRegex);
      return match ? match[1] : -1;
    },
    parent: (data) => data.page.url==='/' ? undefined : '/'
  },
};
