interface Options<T> {
  shuffle?: (input: T[]) => T[];
  channelName?: string;
  replacement?: boolean;
}

class MagicLottery<T> {
  private entries: T[] = [];
  private shuffledEntries: T[] = [];
  private shuffle: (input: T[]) => T[];
  private channelName?: string;
  private replacement?: boolean;

  constructor(entries: T[], options: Options<T> = {}) {
    this.entries = entries;

    this.shuffle = options.shuffle || this.defaultShuffle;
    this.shuffledEntries = this.shuffle([...this.entries]);

    this.channelName = options.channelName;
    this.replacement = options.replacement || false;
  }

  /**
   * Set the channel name.
   * @param channelName - The name of the channel.
   */
  setChannelName(channelName: string): void {
    this.channelName = channelName;
  }

  /**
   * Get the channel name.
   * @returns The name of the channel or undefined if not set.
   */
  getChannelName(): string | undefined {
    return this.channelName;
  }

  /**
   * Add entries to the lottery.
   * @param entries - The entries to add.
   */
  add(entries: T[]): void {
    this.entries.push(...entries);
    this.shuffledEntries = this.shuffle([...this.entries]);
  }

  /**
   * Draw all shuffled entries.
   * @returns The shuffled entries.
   */
  draw(): T[] {
    return [...this.shuffledEntries];
  }

  /**
   * Draw all original entries.
   * @returns The original entries.
   */
  drawOriginal(): T[] {
    return [...this.entries];
  }

  /**
   * Draw the first winner from the shuffled entries.
   * @returns The first winner. Throws an error if there is no entry.
   */
  drawWinner(): T {
    if (this.shuffledEntries.length > 0) {
      const winner = this.shuffledEntries[0];
      if (!this.replacement) {
        this.remove(winner);
      }
      return winner;
    } else {
      throw new Error("At least one entry is required.");
    }
  }

  /**
   * Draw a specified number of winners from the shuffled entries.
   * @param num - The number of winners to draw.
   * @returns The winners. Throws an error if the requested number of winners exceeds the total entries.
   */
  drawWinners(num: number): T[] {
    if (num <= this.shuffledEntries.length) {
      return this.shuffledEntries.slice(0, num);
    } else {
      throw new Error("Requested number of winners exceeds the total entries.");
    }
  }

  /**
   * Set the shuffle method.
   * @param shuffle - The shuffle method to set.
   */
  setShuffle(shuffle: (input: T[]) => T[]): void {
    this.shuffle = shuffle;
    this.shuffledEntries = this.shuffle([...this.entries]);
  }

  /**
   * Get the shuffle method.
   * @returns The shuffle method.
   */
  getShuffle(): (input: T[]) => T[] {
    return this.shuffle;
  }

  /**
   * Remove an entry from the lottery.
   * @param entry - The entry to remove.
   */
  remove(entry: T): void {
    const index = this.entries.indexOf(entry);
    if (index > -1) {
      this.entries.splice(index, 1);
      this.shuffledEntries = this.shuffle([...this.entries]);
    }
  }

  /**
   * Check if an entry is in the lottery.
   * @param entry - The entry to check.
   * @returns True if the entry is in the lottery, false otherwise.
   */
  hasEntry(entry: T): boolean {
    return this.entries.includes(entry);
  }

  /**
   * Get the size of the lottery.
   * @returns The size of the lottery.
   */
  size(): number {
    return this.entries.length;
  }

  /**
   * Check if the lottery is empty.
   * @returns True if the lottery is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.entries.length === 0;
  }

  /**
   * Reset the lottery.
   */
  reset(): void {
    this.entries = [];
    this.shuffledEntries = [];
  }

  /**
   * Draw the next winner from the shuffled entries and remove them from the lottery.
   * @returns A promise that resolves with the next winner or rejects if there are no more entries left.
   */
  async nextWinner(): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      if (this.shuffledEntries.length > 0) {
        const winner = this.shuffledEntries[0];
        if (!this.replacement) {
          this.remove(winner);
        }
        resolve(winner);
      } else {
        reject("No more entries left.");
      }
    });
  }

  /**
   * Implements the Fisher-Yates Shuffle Algorithm as the default shuffling method.
   * This method is used to shuffle the entries of the lottery.
   * See wikipedia at https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle.
   * @param input - The array to shuffle.
   * @returns The shuffled array.
   */
  private defaultShuffle(input: T[]): T[] {
    const array = [...input];
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap array[currentIndex] with array[randomIndex]
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export default MagicLottery;
export { MagicLottery, MagicLottery as Lottery };
