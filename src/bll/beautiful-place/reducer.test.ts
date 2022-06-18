import { BeautifulPlace } from "../../types";
import { beautifulPlaceActions, beautifulPlaceReducer } from "./reducer";

describe("Test beautifulPlace reducer", () => {
  test("should handle a beautifulPlaces and set it", () => {
    const beautiflPlaces: BeautifulPlace[] = [
      {
        id: 1,
        name: null,
        description: "Dinosaur",
        coordinates: "59, 31",
        address: null,
        href: null,
        telegram: "telegramSPb",
        hashtag: "#places",
        general_hashtag: "#dino",
        seasons_hashtag: null,
        path_to_photo: "long_path",
      },
    ];
    expect(
      beautifulPlaceReducer(
        undefined,
        beautifulPlaceActions.setBeautifulPlaces(beautiflPlaces)
      )
    ).toHaveProperty("beautifulPlaces", beautiflPlaces);
  });
});
