import { describe, expect, test, beforeEach, afterEach } from "vitest";
import MagicLottery from "./main";

describe("Magic Lottery Manage Methods", () => {
  let lottery: MagicLottery<number>;

  beforeEach(() => {
    lottery = new MagicLottery([1, 2, 3, 4, 5]);
  });

  afterEach(() => {
    lottery.reset();
  });

  test("setChannelName and getChannelName method handle set and get a channel name", () => {
    expect(lottery.getChannelName()).toBeUndefined();

    lottery.setChannelName("Test Channel");
    expect(lottery.getChannelName()).toBe("Test Channel");
  });

  test("add method adds entries to the lottery", () => {
    lottery.add([6, 7, 8]);
    expect(lottery.size()).toBe(8);
    expect(lottery.drawOriginal()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("add method handles empty array", () => {
    lottery.add([]);
    expect(lottery.size()).toBe(5);
  });

  test("remove method removes an entry from the lottery", () => {
    lottery.remove(1);
    expect(lottery.size()).toBe(4);
    expect(lottery.hasEntry(1)).toBe(false);
  });

  test("remove method handles non-existent entry", () => {
    lottery.remove(6);
    expect(lottery.size()).toBe(5);
  });

  test("hasEntry method checks if an entry is in the lottery", () => {
    expect(lottery.hasEntry(1)).toBe(true);
    expect(lottery.hasEntry(6)).toBe(false);
  });

  test("size method returns the size of the lottery", () => {
    expect(lottery.size()).toBe(5);
  });

  test("isEmpty method checks if the lottery is empty", () => {
    expect(lottery.isEmpty()).toBe(false);
    lottery.reset();
    expect(lottery.isEmpty()).toBe(true);
  });

  test("reset method resets the lottery", () => {
    lottery.reset();
    expect(lottery.size()).toBe(0);
  });
});

describe("Magic Lottery Draw and Shuffle", () => {
  let lottery: MagicLottery<number>;

  beforeEach(() => {
    lottery = new MagicLottery([1, 2, 3, 4, 5]);
  });

  afterEach(() => {
    lottery.reset();
  });

  test("draw method returns shuffled entries", () => {
    const originalEntries = lottery.drawOriginal();
    const drawnEntries = lottery.draw();

    expect(drawnEntries).toHaveLength(originalEntries.length);
    expect(drawnEntries).not.toStrictEqual(originalEntries);

    expect(drawnEntries.sort()).toEqual(originalEntries.sort());
  });

  test("drawOriginal method returns original entries", () => {
    const originalEntries = lottery.drawOriginal();
    expect(originalEntries).toEqual([1, 2, 3, 4, 5]);
  });

  test("drawWinner method returns a winner", () => {
    const winner = lottery.drawWinner();
    expect(winner).toBeDefined();

    const winner2 = lottery.drawWinner({ replacement: false });
    expect(lottery.hasEntry(winner2)).toBe(false);
  });

  test("drawWinner method throws error when lottery is empty", () => {
    lottery.reset();
    expect(() => lottery.drawWinner()).toThrow();
  });

  test("drawWinners method returns specified number of winners", () => {
    const winners = lottery.drawWinners(3);
    expect(winners?.length).toBe(3);
  });

  test("drawWinners method throws error when there are not enough entries", () => {
    lottery.reset();
    lottery.add([1]);
    expect(() => lottery.drawWinners(3)).toThrow();
  });
});

describe("Magic Lottery Draw Async", () => {
  let lottery: MagicLottery<number>;

  beforeEach(() => {
    lottery = new MagicLottery([1, 2, 3, 4, 5]);
  });

  afterEach(() => {
    lottery.reset();
  });

  test("nextWinner method draws the next winner and removes them from the lottery", async () => {
    const winner = await lottery.nextWinner({ replacement: false });
    expect(winner).toBeDefined();
    expect(lottery.size()).toBe(4);

    const winner2 = await lottery.nextWinner();
    expect(winner2).toBeDefined();
    expect(lottery.size()).toBe(4);
  });

  test("nextWinner method should reject when there are no more entries left", async () => {
    lottery.reset();

    try {
      await lottery.nextWinner();
      throw new Error("nextWinner should have thrown an error but did not.");
    } catch (error) {
      expect(error).toBe("No more entries left.");
    }
  });
});

describe("Magic Lottery Options", () => {
  let lottery: MagicLottery<string>;

  beforeEach(() => {
    lottery = new MagicLottery(["Alice", "Bob", "Charlie"], {
      channelName: "Test Channel",
      shuffle: (input: string[]) => input.reverse(),
      replacement: true,
    });
  });

  test("should set the channel name", () => {
    expect(lottery.getChannelName()).toBe("Test Channel");
  });

  test("should apply the shuffle function", () => {
    const originalEntries = lottery.drawOriginal();
    const shuffledEntries = lottery.draw();

    expect(shuffledEntries).toEqual(originalEntries.reverse());
  });

  test("drawWinner should set the replacement option", () => {
    const winner1 = lottery.drawWinner() || "";
    expect(lottery.hasEntry(winner1)).toBe(true);

    lottery.add(["1", "2"]);
    const winner2 = lottery.drawWinner({ replacement: false });
    expect(lottery.hasEntry(winner2)).toBe(false);
  });

  test("drawWinners should set the replacement options", () => {
    const initialSize = lottery.size();
    const drawCount = 3;
    lottery.drawWinners(drawCount, { replacement: false });
    const finalSize = lottery.size();

    expect(finalSize).toBe(initialSize - drawCount);
  });

  test("nextWinner should set the replacement option", async () => {
    const winner = (await lottery.nextWinner()) || "";
    expect(lottery.hasEntry(winner)).toBe(true);
  });
});
