---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Magic Lottery
titleTemplate: A magic library makes your lucky draws simpler

hero:
  name: "Magic Lottery"
  text: "Simplifying Lottery Experiences"
  tagline: "A magic library makes your lucky draws simpler."
  actions:
    - theme: brand
      text: Get Start
      link: /guide/index.md
    - theme: alt
      text: API Examples
      link: /api/index.md
    - theme: alt
      text: View on GitHub
      link: https://github.com/logeast/magic-lottery

features:
  - title: Entry Management
    details: You can add, remove, and check entries in the lottery. You can also get the size of the lottery and check if it's empty.
    icon: 🐶
  - title: Drawing Entries
    details: The class provides methods to draw entries. You can draw all shuffled entries, the first winner, or a specified number of winners.
    icon: 🦀
  - title: Shuffle Control
    details: You set a custom shuffle method. By default, it uses the Fisher-Yates Shuffle Algorithm to shuffle the entries.
    icon: 🐬
---
