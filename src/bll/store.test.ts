import { store } from "./store";

describe("Test store", () => {
  test("Is main reducer exist", () => {
    expect(!!store.getState()["main"]).toBe(true);
  });
});
