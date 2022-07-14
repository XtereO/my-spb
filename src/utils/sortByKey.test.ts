import { sortByKey } from "./sortByKey";

describe("Test sortByKey util", () => {
  test("shoul handle [{k:3},{k:1},{k:2}] and equal to [{k:1},{k:2},{k:3}]", () => {
    expect([{ k: 3 }, { k: 1 }, { k: 2 }].sort(sortByKey("k"))).toEqual([
      { k: 1 },
      { k: 2 },
      { k: 3 },
    ]);
  });
});
