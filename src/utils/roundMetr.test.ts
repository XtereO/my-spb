import { roundMetr } from "./roundMetr";

describe("Test roundMetr util", () => {
  test("should handle 1400000 and return 1 400", () => {
    expect(roundMetr(1400000)).toBe("1 400");
  });
  test("should handle 143050210610 and return 143 050 211", ()=>{
    expect(roundMetr(143050210610)).toBe("143 050 211")
  })
  test("should handle 143 and return 143", ()=>{
    expect(roundMetr(143)).toBe("143")
  })
  test("should handle 1433 and return 1.4", ()=>{
    expect(roundMetr(1433)).toBe("1.4")
  })
});
