import { FreeWifi } from "../../types";
import { freeWifiActions, freeWifiReducer } from "./reducer";

describe("Test freeWifi reducer", () => {
  test("should handle a wifiSpots", () => {
    const wifiSpots: FreeWifi[] = [
      {
        number: 1,
        address: "Kamysh",
        district: "Bogatyrskaya",
        name_wifi: "SPb-free",
        coverage: 150,
        status: "Работает",
        coordinates: [60, 30],
      },
    ];
    expect(
      freeWifiReducer(undefined, freeWifiActions.setWifiSpots(wifiSpots))
    ).toHaveProperty("wifiSpots", wifiSpots);
  });
  test("should handle a page and equal to 2", () => {
    expect(
      freeWifiReducer(undefined, freeWifiActions.setPage(2))
    ).toHaveProperty("page", 2);
  });
});
