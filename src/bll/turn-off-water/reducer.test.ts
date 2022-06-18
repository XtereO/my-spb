import { PlannedWaterOff } from "../../types";
import { turnOffWaterActions, turnOffWaterReducer } from "./reducer";

describe("Test turnOffWater reducer", () => {
  test("should handle a plannedWaterOffs and set array", () => {
    const plannedWaterOffs: PlannedWaterOff[] = [
      {
        address: "Kamysh21",
        begin: "2022-06-06",
        begin_time: "18:00",
        end: "2022-06-07",
        end_time: "19:00",
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
});
