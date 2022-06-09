import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { TurnOffWater } from "./TurnOffWater";

describe("Test TurnOffWater component", () => {
  let wrapper = shallow(<TurnOffWater />);
  beforeEach(() => {
    wrapper = shallow(<TurnOffWater />);
  });
  test("should render TurnOffWater", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.TURN_OFF_WATER}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.TURN_OFF_WATER}-back`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.TURN_OFF_WATER}-header`)).toBe(true);
  });
  test("should render list", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.TURN_OFF_WATER}-list`)).toBe(true);
  });
});
