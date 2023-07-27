import { describe, expect, test, beforeEach } from "vitest";
import MagicLottery from "./main";

describe("MagicLottery", () => {
  let magicLottery: MagicLottery<number>;

  beforeEach(() => {
    magicLottery = new MagicLottery([1, 2, 3, 4, 5]);
  });

  test("getEntries should return correct enties", () => {
    expect(magicLottery.getEntries()).toEqual([1, 2, 3, 4, 5]);
  });

  test("setEntries should set correct entries", () => {
    magicLottery.setEntries([6, 7, 8, 9, 10]);
    expect(magicLottery.getEntries()).toEqual([6, 7, 8, 9, 10]);
  });

  test("setShuffleAlgorithm should set correct algorithm", () => {
    const newAlgorithm = (input: number[]) => input.reverse();
    magicLottery.setShuffleAlgorithm(newAlgorithm);
    expect(magicLottery.getShuffleAlgorithm()).toBe(newAlgorithm);
  });

  test("defaultShuffle should shuffle entries", () => {
    const originalEntries = magicLottery.getEntries();
    const shuffledEntries = magicLottery.getShuffleAlgorithm()(originalEntries);
    expect(shuffledEntries).not.toEqual(originalEntries);
    expect(shuffledEntries.sort()).toEqual(originalEntries.sort());
  });
});
