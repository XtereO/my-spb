import { PlannedWaterOff } from "../../types";
import { turnOffWaterActions, turnOffWaterReducer } from "./reducer";

describe("Test turnOffWater reducer", () => {
  test("should handle a plannedWaterOffs and set array", () => {
    const plannedWaterOffs: PlannedWaterOff[] = [
      {
        address: "Kamysh21",
        dates: [
          { date_on: "12.12.12", date_off: "12.12.12" },
          { date_on: "13.12.10", date_off: "14.12.10" },
        ],
        city: "SPb",
        house: "23",
        korp: "2",
        street: "Kamysh",
      },
    ];
    expect(
      turnOffWaterReducer(
        undefined,
        turnOffWaterActions.setPlannedWaterOffs(plannedWaterOffs)
      )
    ).toHaveProperty("plannedWaterOffs", plannedWaterOffs);
  });
  test("should handle a page and equal to 2", () => {
    expect(
      turnOffWaterReducer(undefined, turnOffWaterActions.setPage(2))
    ).toHaveProperty("page", 2);
  });
});
