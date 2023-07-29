---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 魔法抽奖
titleTemplate: 一个神奇的库使你的抽奖更简单

hero:
  name: "魔法抽奖"
  text: "Magic Lottery\n助你简化抽奖体验"
  tagline: "一个神奇的库使你的抽奖更简单。"
  actions:
    - theme: brand
      text: 开始使用
      link: zh/guide/index.md
    - theme: alt
      text: API 示例
      link: zh/api/index.md
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/logeast/magic-lottery

features:
  - title: 抽奖管理
    details:  你可以添加、删除和检查抽奖中的条目。你也可以获取抽奖的大小并检查是否为空。
    icon: 🐶
  - title: 抽取条目
    details: 该类提供了抽取条目的方法。你可以抽取所有洗牌后的条目，第一名获奖者，或指定数量的获奖者。
    icon: 🦀
  - title: 洗牌控制
    details: 你可以设置自定义洗牌方法。默认情况下，它使用Fisher-Yates洗牌算法来洗牌条目。
    icon: 🐬
---
