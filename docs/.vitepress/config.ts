import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/magic-lottery/",
  title: "Magic Lottery",
  description: "A magic tool makes your lucky draws simpler.",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        logo: "https://logeast.cc/cdn/imghub/logo-pure.png",
        nav: [
          { text: "Guide", link: "/guide/index.md" },
          { text: "API", link: "/api/index.md" },
          { text: "Cases", link: "/cases/index.md" },
        ],
      },
      head: [
        [
          "link",
          {
            rel: "icon",
            href: "https://logeast.cc/cdn/imghub/logo-pure.png",
            sizes: "any",
          },
        ],
      ],
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      title: "魔法抽奖",
      themeConfig: {
        logo: "https://logeast.cc/cdn/imghub/logo.png",
        nav: [
          { text: "指引", link: "zh/guide/index.md" },
          { text: "API", link: "zh/api/index.md" },
          { text: "实例", link: "zh/cases/index.md" },
        ],
      },
      head: [
        [
          "link",
          {
            rel: "icon",
            href: "https://logeast.cc/cdn/imghub/logo.png",
            sizes: "any",
          },
        ],
      ],
    },
  },
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
      "script",
      { id: "baidu-tongji" },
      `;var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?7a3f38be1ca1be7a33531917f514cf52";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://logeast.cc/cdn/imghub/logo.png",
    editLink: {
      pattern: "https://github.com/logeast/magic-lottery/tree/main/docs/:path",
      text: "Suggest changes to this page",
    },
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
