import { toFullTime } from "./toFullTime";

describe("Test toFullTime util", () => {
  test("should handle 2.15 and to equal 02:15", () => {
    expect(toFullTime("2.15")).toEqual("02:15");
  });
  test("should handll 02.10 and to equal 02:10", () => {
    expect(toFullTime("02.10")).toEqual("02:10");
  });
});
