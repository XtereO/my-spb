import { PANEL_ROUTES } from "../../consts";
import { initialState, mainActions, mainReducer } from "./reducer";

describe("Test mainReducer", () => {
  test("should return the initial state", () => {
    expect(mainReducer(undefined, {} as any)).toEqual(initialState);
  });
  test("should handle a theme and set dark", () => {
    expect(mainReducer(undefined, mainActions.setTheme("dark"))).toHaveProperty(
      "theme",
      "dark"
    );
  });
  test("should handle a platform and set pc", () => {
    expect(
      mainReducer(undefined, mainActions.setPlatform("pc"))
    ).toHaveProperty("platform", "pc");
  });
  test("should handle a platform and set FREE_WIFI", () => {
    expect(
      mainReducer(undefined, mainActions.setActivePanel(PANEL_ROUTES.FREE_WIFI))
    ).toHaveProperty("activePanel", PANEL_ROUTES.FREE_WIFI);
  });
  test("should handle a userCoordinates and set [60, 30]", () => {
    expect(
      mainReducer(undefined, mainActions.setUserCoordinates([60, 30]))
    ).toHaveProperty("userCoordinates", [60, 30]);
  });
});
