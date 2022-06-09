import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { BridgeConstruction } from "./BridgeConstruction";

describe("Test BridgeConstruction component", () => {
  let wrapper = shallow(<BridgeConstruction />);
  beforeEach(() => {
    wrapper = shallow(<BridgeConstruction />);
  });
  test("should render BridgeConstrution", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-back`)).toBe(
      true
    );
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-header`)).toBe(
      true
    );
  });
  test("should render filter", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-filter`)).toBe(
      true
    );
  });
  test("should render list", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-list`)).toBe(
      true
    );
  })
});
