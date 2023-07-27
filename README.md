# MagicLottery

<p align="center">
  <a href="https://npmjs.com/package/magic-lottery"><img src="https://img.shields.io/npm/v/magic-lottery.svg" alt="npm package"></a>
  <a href="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml"><img src="https://github.com/logeast/magic-lottery/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://www.npmjs.com/package/vitest"><img src="https://img.shields.io/npm/v/magic-lottery?color=729B1B&label="></a>
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

## Samples

Here are some sample usages of the MagicLottery API:

```javascript
import MagicLottery from "magic-lottery";

// Generate a set of lottery numbers
let numbers = MagicLottery.generateNumbers();
console.log(numbers); // Outputs: 12, 7, 26, 44, 30, 19]

// Buy a lottery ticket with the generated numbers
let ticket = MagicLottery.buyTicket(numbers);
console.log(ticket); // Outputs: { numbers: [12, 7, 26, 44, 30, 19] }

// Check if the ticket numbers are the winning numbers
let winningNumbers = [12, 7, 26, 44, 30, 19];
let isWinningTicket = MagicLottery.checkWinningNumbers(
  winningNumbers,
  ticket.numbers
);
console.log(isWinningTicket); // Outputs: true
```

## API

### `generateNumbers()`

Generates a set of unique random numbers for the lottery.

**Returns**

Type: `Array<number>`

An array of unique random numbers.

### `checkWinningNumbers(winningNumbers: Array<number>, ticketNumbers: Array<number>)`

Checks if the ticket numbers match the winning numbers.

**Parameters**

Name: `winningNumbers`

Type: `Array<number>`

Description: The winning numbers of the lottery.

Name: `ticketNumbers`

Type: `Array<number>`

Description: The numbers on the lottery ticket.

**Returns**

Type: `boolean`

True if the ticket numbers match the winning numbers, false otherwise.

### `buyTicket(numbers: Array<number>)`

Buys a lottery ticket with the specified numbers.

**Parameters**

Name: `numbers`

Type: `Array<number>`

Description: The numbers to be on the lottery ticket.

**Returns**

Type: `Ticket`

The purchased lottery ticket.

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).
