# API Documentation

The following is the full class structure with type signatures and method descriptions for Magic Lottery.

```ts
class MagicLottery<T> {
  private entries: T[];
  private shuffledEntries: T[];
  private shuffle: (input: T[]) => T[];
  public channelName?: string;

  constructor(
    entries: T[],
    shuffle?: (input: T[]) => T[],
    channelName?: string
  );

  setChannelName(channelName: string): void;
  getChannelName(): string | undefined;
  add(entries: T[]): void;
  draw(): T[];
  drawOriginal(): T[];
  drawWinner(): T;
  drawWinners(num: number): T[];
  setShuffle(shuffle: (input: T[]) => T[]): void;
  getShuffle(): (input: T[]) => T[];
  remove(entry: T): void;
  hasEntry(entry: T): boolean;
  size(): number;
  isEmpty(): boolean;
  reset(): void;
  async nextWinner(): Promise<T | undefined>;
}
```

## Importing or require

To use the Magic Lottery class in your project, you need to import it.

### browser

In a browser environment using ES6 modules:

```ts
import { MagicLottery } from "magic-lottery";
// or
import { Lottery } from "magic-lottery";
// or
import MagicLottery from "magic-lottery";
```

### Node.js Environment

In a Node.js environment, you can use the CommonJS require syntax to import the Magic Lottery class:

```ts
const { MagicLottery } = require("magic-lottery");
// or
const { Lottery } = require("magic-lottery");
// or
const MagicLottery = require("magic-lottery");
```

If your Node.js environment supports ES6 modules, you can use the import syntax as you would in a browser environment.

## constructor

- **Type:** `(entries: T[], shuffle?: (input: T[]) => T[], channelName?: string) => MagicLottery<T>`

  `constructor` initializes a new instance of `MagicLottery`. It takes an array of entries and an optional shuffle function. If no shuffle function is provided, a default Fisher-Yates shuffle implementation is used. An optional channel name can also be provided.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);

  // With custom shuffle method & channel name
  const anotherLottery = new MagicLottery<number>(
    [1, 2, 3, 4, 5],
    (input) => input.reverse(),
    "Weekly Draw"
  );
  ```

In the second example, the lottery is initialized with entries 1 to 5, with a shuffle method that reverses the list, and a `channelName` of 'Weekly Draw'.

## setChannelName

- **Type:** `(channelName: string) => void`

  `setChannelName` allows you to specify a channel name for your current lottery instance.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.setChannelName("Daily Draw");
  ```

## getChannelName

- **Type:** `() => string | undefined`

  `getChannelName` returns the name of your current lottery channel or undefined if it hasn't been set.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.setChannelName("Daily Draw");
  console.log(lottery.getChannelName()); // 'Daily Draw'
  ```

## add

- **Type:** `(entries: T[]) => void`

  `add` enables you to add more entries to your lottery pool.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  lottery.add([4, 5, 6]); // The lottery now includes 1 through 6.
  ```

## draw

- **Type:** `() => T[]`

  `draw` allows you to draw all the shuffled entries from your lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(lottery.draw()); // Array of shuffled numbers
  ```

## drawOriginal

- **Type:** `() => T[]`

  `drawOriginal` draws all the original, unshuffled entries from your lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(lottery.drawOriginal()); // [1, 2, 3]
  ```

## drawWinner

- **Type:** `() => T`

  `drawWinner` pulls the first winner from the shuffled entries.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3]);
  console.log(`The winner is: ${lottery.drawWinner()}`);
  ```

## drawWinners

- **Type:** `(num: number) => T[]`

  `drawWinners` extracts a specified number of winners from the shuffled entries.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(`The winners are: ${lottery.drawWinners(2)}`);
  ```

## setShuffle

- **Type:** `(shuffle: (input: T[]) => T[]) => void`

  `setShuffle` allows you to define a custom shuffle method for your lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.setShuffle((input) => input.reverse());
  ```

## getShuffle

- **Type:** `() => (input: T[]) => T[]`

  `getShuffle` returns the current shuffle method being used by the lottery instance.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  const currentShuffleMethod = lottery.getShuffle();
  ```

## remove

- **Type:** `(entry: T) => void`

  `remove` removes a specific entry from the lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.remove(3); // Removes '3' from the list of entries.
  ```

## hasEntry

- **Type:** `(entry: T) => boolean`

  `hasEntry` checks whether a particular entry exists in your lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.hasEntry(3)); // True
  ```

## size

- **Type:** `() => number`

  `size` retrieves the number of entries currently in the lottery.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.size()); // '5'
  ```

## isEmpty

- **Type:** `() => boolean`

  `isEmpty` verifies whether or not the lottery is empty.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  console.log(lottery.isEmpty()); // False
  ```

## reset

- **Type:** `() => void`

  `reset` helps you clear all the entries from your current lottery instance.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.reset();
  console.log(lottery.isEmpty()); // True
  ```

## nextWinner

- **Type:** `() => Promise<T | undefined>`

  `nextWinner` removes the first element from the shuffled entries and resolves with it, returning a Promise.

  ```ts
  const lottery = new MagicLottery<number>([1, 2, 3, 4, 5]);
  lottery.nextWinner().then((winner) => console.log(winner)); // logs winner
  ```

  Please note that this method is asynchronous. It's recommended to handle the case where there might be no more entries left in the lottery which would result in Promise rejection.
