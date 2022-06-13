import { initialState, mapActions, mapReducer } from "./reducer";

describe("Test map reducer", () => {
  test("should return the initial state", () => {
    expect(mapReducer(undefined, {} as any)).toEqual(initialState);
  });
  test("should handle a mapZoom and set 5", () => {
    expect(mapReducer(undefined, mapActions.setMapZoom(5))).toHaveProperty(
      "mapZoom",
      5
    );
  });
  test("should handle a center and set [30, 50]", () => {
    expect(
      mapReducer(undefined, mapActions.setCenter([30, 50]))
    ).toHaveProperty("center", [30, 50]);
  });
  test("should handle a language and set en-EN", () => {
    expect(
      mapReducer(undefined, mapActions.setLanguage("en-EN"))
    ).toHaveProperty("language", "en-EN");
  });
});
