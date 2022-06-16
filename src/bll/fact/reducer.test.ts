import { Fact } from "../../types";
import { factActions, factReducer } from "./reducer";

describe("Test fact reducer", () => {
  test("should handle a state and set dates", () => {
    const fact: Fact = {
      title: "new museum",
      date: "12.12",
      date_txt: "12 december",
      text: "a lot of text",
    };
    expect(factReducer(undefined, factActions.setFact(fact))).toEqual(fact);
  });
});
