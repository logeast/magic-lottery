# MagicLottery

Magic Lottery is an intuitive library aimed at simplifying your lottery experiences to make them simpler, more enjoyable, and fair.

<p align="center">
  <a href="https://npmjs.com/package/magic-lottery"><img src="https://img.shields.io/npm/v/magic-lottery.svg" alt="npm package"></a>
  <a href="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml"><img src="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
</p>

## Installation

To install MagicLottery, use npm/yarn/pnpm. Execute the following command in your terminal:

```bash
npm install magic-lottery
# or
yarn add magic-lottery
# or
pnpm add magic-lottery
```

## Usage Example

Here's a demonstration of how to use the MagicLottery API:

```javascript
import MagicLottery from "magic-lottery";

// Instantiate MagicLottery with an array of numbers as entries
let lottery = new MagicLottery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Fetch the current entries
console.log(lottery.getEntries()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Replace entries
lottery.setEntries([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(lottery.getEntries()); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Shuffle using the existing shuffle algorithm
let shuffledEntries = lottery.getShuffleAlgorithm()(lottery.getEntries());
console.log(shuffledEntries); 

// Implement a new shuffle algorithm
lottery.setShuffleAlgorithm((input) => input.sort(() => Math.random() - 0.5));

// Shuffle using the new shuffle algorithm
shuffledEntries = lottery.getShuffleAlgorithm()(lottery.getEntries());
console.log(shuffledEntries);
```

This example shows you how to create a new MagicLottery instance, fetch and replace entries, get and set a shuffle algorithm, and shuffle entries utilizing the currently specified shuffle algorithm.

## API Documentation

MagicLottery<T> is a generic class that operates as a customizable lottery system.

### Constructor: MagicLottery(entries: T[], shuffleAlgorithm?: (input: T[]) => T[])

Generates a new MagicLottery instance taking an array of unique entries and an optional custom shuffle algorithm.

### Method: setEntries(entries: T[]): void 

Resets the entries within the lottery.

### Method: getEntries(): T[]

Returns a copy of the current entries list.

### Method: setShuffleAlgorithm(shuffleAlgorithm: (input: T[]) => T[]): void

Allocates a new shuffling algorithm for the lottery.

### Method: getShuffleAlgorithm(): (input: T[]) => T[]

Fetches the shuffle algorithm currently utilized by the lottery.

### Method: defaultShuffle(input: T[]): T[]

Private method implementing the Fisher-Yates shuffle algorithm, this is used by default if no custom algorithm is provided.

## Export

The MagicLottery class is exported by default from this module.

## Contributing

Refer to our [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).