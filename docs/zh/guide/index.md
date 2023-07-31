# 入门指南

Magic Lottery 是一个直观的库，旨在简化你的抽奖体验，使其更简单，更愉快，更公平。

Magic Lottery 默认使用 [Fisher-Yates Shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) 作为洗牌方法。

## 安装

可以使用 npm/yarn/pnpm 来安装 Magic Lottery。在终端中执行以下命令：

```bash
npm install magic-lottery
# or
yarn add magic-lottery
# or
pnpm add magic-lottery
```

## 使用示例

这是 Magic Lottery 的一个简单使用案例。

```js
import MagicLottery from "magic-lottery";

// 创建一个新的MagicLottery实例
const lottery = new MagicLottery(["Alice", "Bob", "Charlie"]);

// 向抽奖中添加更多条目
lottery.add(["David", "Eve"]);

// 抽取所有洗牌后的条目
console.log(lottery.draw());

// 从洗牌后的条目中抽取第一名获奖者
console.log(lottery.drawWinner());

// 从洗牌后的条目中抽取指定数量的获奖者
console.log(lottery.drawWinners(2));

// 检查条目是否在抽奖中
console.log(lottery.hasEntry("Alice"));

// 获取抽奖的大小
console.log(lottery.size());

// 检查抽奖是否为空
console.log(lottery.isEmpty());

// 异步抽取下一个获胜者
lottery.nextWinner().then((winner) => console.log(winner));

// 重置抽奖
lottery.reset();
```

## 使用 Magic Lottery 的项目

欢迎与我们分享你的项目。
