# Getting Started

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

## Projects using Magic Lottery

Feel free to share your projects with us.
