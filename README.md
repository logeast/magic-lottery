# MagicLottery

Magic Lottery is a magic tooling library that makes your lucky draws simpler, funnier and faier.

<p align="center">
  <a href="https://npmjs.com/package/magic-lottery"><img src="https://img.shields.io/npm/v/magic-lottery.svg" alt="npm package"></a>
  <a href="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml"><img src="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://www.npmjs.com/package/magic-lottery"><img src="https://img.shields.io/npm/v/magic-lottery?color=729B1B&label="></a>
</p>
<br/>

## Install

You can install MagicLottery using npm/yarn/pnpm. Run the following command in your terminal:

```bash
npm install magic-lottery
#or
yarn add magic-lottery
# or
pnpm add magic-lottery
```

## Use Case

Here is a use case of the MagicLottery API:

```javascript
import MagicLottery from "magic-lottery";

// Create a new MagicLottery instance with an array of numbers as entries
let lottery = new MagicLottery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Get the current entries
console.log(lottery.getEntries()); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Set new entries
lottery.setEntries([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(lottery.getEntries()); // Outputs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Shuffle the entries using the current shuffle algorithm
let shuffledEntries = lottery.getShuffleAlgorithm()(lottery.getEntries());
console.log(shuffledEntries); // Outputs: A shuffled array of the entries

// Set a new shuffle algorithm
lottery.setShuffleAlgorithm((input) => input.sort(() => Math.random() - 0.5));

// Shuffle the entries using the new shuffle algorithm
shuffledEntries = lottery.getShuffleAlgorithm()(lottery.getEntries());
console.log(shuffledEntries); // Outputs: A shuffled array of the entries using the new shuffle algorithm
```

This use case demonstrates how to create a new MagicLottery instance, get and set entries, get and set the shuffle algorithm, and shuffle the entries using the current shuffle algorithm. 

## API Documentation

Class: MagicLottery<T>

A generic class that represents a lottery system with customizable shuffle algorithm.

Constructor: MagicLottery(entries: T], shuffleAlgorithm?: (input: T[]) => T[])

Creates a new instance of MagicLottery.

- entries - An array of entries of type T.
- shuffleAlgorithm - An optional custom shuffle algorithm. If not provided, a default Fisher-Yates shuffle algorithm is used.

### Method: setEntries(entries: T[]): void

Sets the entries of the lottery.

- entries - An array of entries of type T.

### Method: getEntries(): T[]

Returns a copy of the current entries of the lottery.

### Method: setShuffleAlgorithm(shuffleAlgorithm: (input: T[]) => T[]): void

Sets the shuffle algorithm of the lottery.

- shuffleAlgorithm - A function that takes an array of type T and returns a shuffled array of type T.

### Method: getShuffleAlgorithm(): (input: T[]) => T[]

Returns the current shuffle algorithm of the lottery.

### Method: defaultShuffle(input: T[]): T[]

A private method that implements the Fisher-Yates shuffle algorithm. This is used as the default shuffle algorithm if no custom algorithm is provided.

- input - An array of type T to be shuffled.

## Export

The MagicLottery class is the default export of this module.

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).
