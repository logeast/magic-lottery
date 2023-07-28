import { describe, expect, test, beforeEach } from "vitest";
import MagicLottery from "./main";

describe("MagicLottery", () => {
  let lottery: MagicLottery<number>;

  beforeEach(() => {
    lottery = new MagicLottery([1, 2, 3, 4, 5]);
  });

  test("add method adds entries to the lottery", () => {
    lottery.add([6, 7, 8]);
    expect(lottery.size()).toBe(8);
  });

  test("draw method returns shuffled entries", () => {
    const drawnEntries = lottery.draw();
    expect(drawnEntries.length).toBe(5);
  });
});
