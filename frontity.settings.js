const settings = {
  name: "my-first-frontity-project",
  state: {
    frontity: {
      url: "https://www.aztech.se/",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://www.aztech.se/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
