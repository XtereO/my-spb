import { getEndingNumber } from "./getEndingNumber";

describe("Test getEndingNumber util", () => {
  test("should handle 121 to equal ''", () => {
    expect(getEndingNumber(121)).toEqual("");
  });
  test("should handle 332 to equal 'а'", () => {
    expect(getEndingNumber(332)).toEqual("а");
  });
  test("should handle 1205 to equal 'ов'", () => {
    expect(getEndingNumber(1205)).toEqual("ов");
  });
  test("shoul handle 114 to equal 'ов'", () => {
    expect(getEndingNumber(114)).toEqual("ов");
  });
});
