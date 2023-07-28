import { describe, expect, test, beforeEach, afterEach } from "vitest";
import MagicLottery from "./main";

describe("MagicLottery", () => {
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

  test("nextWinner method draws the next winner and removes them from the lottery", async () => {
    const winner = await lottery.nextWinner();
    expect(winner).toBeDefined();
    expect(lottery.size()).toBe(4);

    const winner2 = await lottery.nextWinner();
    expect(winner2).toBeDefined();
    expect(lottery.size()).toBe(3);
  });
});
