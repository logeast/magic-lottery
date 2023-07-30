# API 文档

以下是 Magic Lottery 的完整类结构，包括类型签名和方法描述。

```ts
interface Options<T> {
  shuffle?: (input: T[]) => T[];
  channelName?: string;
  replacement?: boolean;
}

interface DrawOptions<T> {
  replacement?: Options<T>["replacement"];
}

class MagicLottery<T> {
  constructor(entries: T[], options: Options<T>);

  setChannelName(channelName: string): void;
  getChannelName(): string | undefined;
  add(entries: T[]): void;
  draw(): T[];
  drawOriginal(): T[];
  drawWinner(options: DrawOptions<T>): T;
  drawWinners(num: number, options: DrawOptions<T>): T[];
  setShuffle(shuffle: (input: T[]) => T[]): void;
  getShuffle(): (input: T[]) => T[];
  remove(entry: T): void;
  hasEntry(entry: T): boolean;
  size(): number;
  isEmpty(): boolean;
  reset(): void;
  async nextWinner(options: DrawOptions<T>): Promise<T | undefined>;
}
```

## 导入或引用

要在项目中使用 Magic Lottery 类，需要导入它。

### 浏览器

在使用 ES6 模块的浏览器环境中：

```ts
import { MagicLottery } from "magic-lottery";
// 或
import { Lottery } from "magic-lottery";
// 或
import MagicLottery from "magic-lottery";
```

### Node.js 环境

在 Node.js 环境中，可以使用 CommonJS 的 require 语法来导入 Magic Lottery 类：

```ts
const { MagicLottery } = require("magic-lottery");
// 或
const { Lottery } = require("magic-lottery");
// 或
const MagicLottery = require("magic-lottery");
```

如果你的 Node.js 环境支持 ES6 模块，你可以像在浏览器环境中一样使用 import 语法。

## 构造函数

- **类型:** `(entries: T[], options: Options<T>) => MagicLottery<T>`

  `constructor` 初始化一个新的 `MagicLottery` 实例。它接受一个条目数组和一个选项对象。选项对象可以包括一个洗牌函数，一个频道名称，和一个替换布尔值。

- 如果没有提供洗牌函数，将使用默认的 Fisher-Yates 洗牌实现。
- 默认情况下，替换被设置为真，抽出的条目将被放回到未来的抽奖池中。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);

  // 使用自定义洗牌方法和频道名称和不放回
  const anotherLottery = new MagicLottery<number>([1, 2, 3, 4, 5], {
    shuffle: (input) => input.reverse(),
    channelName: "Weekly Draw",
    replacement: false,
  });
  ```

在第二个例子中，抽奖初始化了 1 到 5 的条目，使用了一个将列表反转的洗牌方法，并设置了 `channelName` 为 'Weekly Draw'。

## setChannelName

- **类型:** `(channelName: string) => void`

  `setChannelName` 允许你为当前的抽奖实例指定一个频道名称。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.setChannelName("Daily Draw");
  ```

## getChannelName

- **类型:** `() => string | undefined`

  `getChannelName` 返回当前抽奖频道的名称，如果没有设置，返回 undefined。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.setChannelName("Daily Draw");
  console.log(lottery.getChannelName()); // 'Daily Draw'
  ```

## add

- **类型:** `(entries: T[]) => void`

  `add` 允许你向抽奖池中添加更多条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.add([4, 5, 6]); // The lottery now includes 1 through 6.
  ```

## draw

- **类型:** `() => T[]`

  `draw` 允许你从抽奖中抽取所有洗牌后的条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(lottery.draw()); // 洗牌后的数字数组
  ```

## drawOriginal

- **类型:** `() => T[]`

  `drawOriginal` 从抽奖中抽取所有原始的、未洗牌的条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(lottery.drawOriginal()); // [1, 2, 3]
  ```

## drawWinner

- **类型:** `(options?: DrawOptions<T>) => T`

  `drawWinner` 从洗牌后的条目中抽取第一个获奖者。

  ::: tip
  如果 replacement 选项设置为 false，则抽取的条目将不会被放回未来的抽奖池中。
  :::

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(`The winner is: ${lottery.drawWinner()}`);
  ```

## drawWinners

- **类型:** `(num: number, options?: DrawOptions<T>) => T[]`

  `drawWinners` 从洗牌后的条目中抽取指定数量的获奖者。

  ::: tip
  如果 replacement 选项设置为 false，则抽取的条目将不会被放回未来的抽奖池中。
  :::

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(`The winners are: ${lottery.drawWinners(2)}`);
  ```

## setShuffle

- **类型:** `(shuffle: (input: T[]) => T[]) => void`

  `setShuffle` 允许你为抽奖定义一个自定义的洗牌方法。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.setShuffle((input) => input.reverse());
  ```

## getShuffle

- **类型:** `() => (input: T[]) => T[]`

  `getShuffle` 返回抽奖实例当前使用的洗牌方法。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  const currentShuffleMethod = lottery.getShuffle();
  ```

## remove

- **类型:** `(entry: T) => void`

  `remove` 从抽奖中移除一个特定的条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.remove(3); // 从条目列表中移除 '3'。
  ```

## hasEntry

- **类型:** `(entry: T) => boolean`

  `hasEntry` 检查抽奖中是否存在特定的条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.hasEntry(3)); // True
  ```

## size

- **类型:** `() => number`

  `size` 获取当前抽奖中的条目数量。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.size()); // '5'
  ```

## isEmpty

- **类型:** `() => boolean`

  `isEmpty` 验证抽奖是否为空。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.isEmpty()); // False
  ```

## reset

- **类型:** `() => void`

  `reset` 帮助你清除当前抽奖实例中的所有条目。

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.reset();
  console.log(lottery.isEmpty()); // True
  ```

## nextWinner

- **类型:** `(options?: DrawOptions<T>) => Promise<T | undefined>`

  `nextWinner` 从洗牌后的条目中移除第一个元素并解析它，返回一个 Promise。

  ::: tip
  如果 replacement 选项设置为 false，则抽取的条目将不会被放回未来的抽奖池中。
  :::

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.nextWinner().then((winner) => console.log(winner)); // 记录获奖者
  ```

  请注意，这个方法是异步的。建议处理可能没有更多条目留在抽奖中的情况，这将导致 Promise 拒绝。
