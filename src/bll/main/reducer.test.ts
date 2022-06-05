import { PANEL_ROUTES } from "../../consts";
import { mainActions, mainState } from "./reducer";

describe("Test mainState", () => {
  test("should return the initial state", () => {
    expect(mainState(undefined, {} as any)).toEqual({
      theme: "light",
      platform: "mobile",
      activePanel: PANEL_ROUTES.HOME,
    });
  });
  test("should handle a theme and set dark", () => {
    expect(mainState(undefined, mainActions.setTheme("dark"))).toHaveProperty(
      "theme",
      "dark"
    );
  });
  test("should handle a platform and set pc", () => {
    expect(mainState(undefined, mainActions.setPlatform("pc"))).toHaveProperty(
      "platform",
      "pc"
    );
  });
  test("should handle a platform and set FREE_WIFI", () => {
    expect(
      mainState(undefined, mainActions.setActivePanel(PANEL_ROUTES.FREE_WIFI))
    ).toHaveProperty("activePanel", PANEL_ROUTES.FREE_WIFI);
  });
});
