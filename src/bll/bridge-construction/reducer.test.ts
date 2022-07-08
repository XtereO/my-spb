import { BridgeConstruction } from "../../types";
import {
  bridgeConstructionActions,
  bridgeConstructionReducer,
} from "./reducer";

describe("Test bridge-construction reducer", () => {
  test("should handle a bridges and equal to non-empty", () => {
    const bridges: BridgeConstruction[] = [
      {
        name: "Литейный",
        numbe: 1,
        time_first_wiring: "-",
        the_first_arch: "2.05",
        the_second_wiring: "2.50",
        the_second_arch: "-",
        coordinates: [12, 12],
      },
    ];
    expect(
      bridgeConstructionReducer(
        undefined,
        bridgeConstructionActions.setBridges(bridges)
      )
    ).toHaveProperty("bridges", bridges);
  });
});
