import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/magic-lottery/",
  title: "Magic Lottery",
  description: "A magic tool makes your lucky draws simpler.",
  head: [
    ["meta", { name: "theme-color", content: "#ED4192" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          " lottery, Fisher-Yates Shuffle, magic lottery, lucky, random, shuffle, raffle, prize, winner",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://logeast.cc/cdn/imghub/logo.png",
        sizes: "any",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://logeast.cc/cdn/imghub/logo.png",

    editLink: {
      pattern: "https://github.com/logeast/magic-lottery/tree/main/docs/:path",
      text: "Suggest changes to this page",
    },

    nav: [
      { text: "Guide", link: "/guide/index.md" },
      { text: "API", link: "/api/index.md" },
      { text: "Cases", link: "/cases/index.md" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Guide", link: "/guide" },
    //       { text: "API", link: "/api" },
    //       { text: "Examples", link: "/examples" },
    //     ],
    //   },
    // ],

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/logeast4" },
      { icon: "github", link: "https://github.com/logeast/magic-lottery" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-PRESENT logeast.cc",
    },
  },
});
