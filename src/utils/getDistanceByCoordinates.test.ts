import { getDistance } from "./getDistanceByCoordinates";

describe("test getDistanceByCoordinates", () => {
  test("should handle [30,60], [31, 61] equal to 146.776", () => {
    expect(getDistance([30, 60], [31, 61])).toEqual(146.77568122705154);
  });
});
