class MagicLottery<T> {
  private entries: T[];
  private shuffleAlgorithm: (input: T[]) => T[];

  constructor(entries: T[], shuffleAlgorithm?: (input: T[]) => T[]) {
    this.entries = entries;
    this.shuffleAlgorithm = shuffleAlgorithm || this.defaultShuffle;
  }

  setEntries(entries: T[]): void {
    this.entries = [...entries];
  }

  getEntries(): T[] {
    return [...this.entries];
  }

  setShuffleAlgorithm(shuffleAlgorithm: (input: T[]) => T[]): void {
    this.shuffleAlgorithm = shuffleAlgorithm;
  }

  getShuffleAlgorithm(): (input: T[]) => T[] {
    return this.shuffleAlgorithm;
  }

  // Fisher-Yates Shuffle Algorathm implemented as the default shuffling method.
  private defaultShuffle(input: T[]): T[] {
    let array = [...input];
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap input[currentIndex] with input[randomIndex]
      temporaryValue = input[currentIndex];
      input[currentIndex] = input[randomIndex];
      input[randomIndex] = temporaryValue;
    }

    return input;
  }
}

export default MagicLottery;
