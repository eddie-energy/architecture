const getOrderNumberRegex = /^\/(\d+)-/;

module.exports = {
  layout: (data) => data.site.defaultLayout,
    eleventyNavigation: {
      key: (data) => data.page.url,
      title: (data) => data.title,
      order: (data) => {
        const match = data.page.url.match(getOrderNumberRegex);
        return match ? match[1] : -1;
      }
    },
};
