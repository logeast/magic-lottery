# Magic Lottery

[![ci][ci-badge]][ci-link]
![ts][ts-badge]
[![download-badge]][download-link]
![version][version-badge]
![commit][commit-badge]
![license][license-badge]

Magic Lottery is an intuitive library aimed at simplifying your lottery experiences to make them simpler, more enjoyable, and fair.

Magic Lottery uses the [Fisher-Yates Shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) as the default shuffling method.

## Installation

To install Magic Lottery, use npm/yarn/pnpm. Execute the following command in your terminal:

```bash
npm install magic-lottery
# or
yarn add magic-lottery
# or
pnpm add magic-lottery
```

## Usage Example

Here's a simple usage case for the Magic Lottery.

```js
import MagicLottery from "magic-lottery";

// Create a new MagicLottery instance
const lottery = new MagicLottery(["Alice", "Bob", "Charlie"]);

// Add more entries to the lottery
lottery.add(["David", "Eve"]);

// Draw all shuffled entries
console.log(lottery.draw());

// Draw the first winner from the shuffled entries
console.log(lottery.drawWinner());

// Draw a specified number of winners from the shuffled entries
console.log(lottery.drawWinners(2));

// Check if an entry is in the lottery
console.log(lottery.hasEntry("Alice"));

// Get the size of the lottery
console.log(lottery.size());

// Check if the lottery is empty
console.log(lottery.isEmpty());

// Reset the lottery
lottery.reset();
```

For more examples, please refer to the [official documentation]().

## Contributing

Refer to our [Contributing Guide](https://github.com/logeast/magic-lottery/blob/main/CONTRIBUTING.md).

## License

[MIT](https://github.com/logeast/magic-lottery/blob/main/LICENSE).

[ci-badge]: https://github.com/logeast/magic-lottery/actions/workflows/ci.yml/badge.svg
[ci-link]: https://github.com/logeast/magic-lottery/actions/workflows/ci.yml
[ts-badge]: https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label
[download-badge]: https://img.shields.io/npm/dm/magic-lottery
[download-link]: https://www.npmjs.com/search?q=magic-lottery
[version-badge]: https://img.shields.io/npm/v/magic-lottery.svg
[commit-badge]: https://img.shields.io/github/commit-activity/m/logeast/magic-lottery
[license-badge]: https://img.shields.io/github/license/logeast/magic-lottery
