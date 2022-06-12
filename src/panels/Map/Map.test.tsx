import { shallow } from "enzyme";
import { Map } from "./Map";
import { PANEL_ROUTES } from "../../consts";

describe("Test Map component", () => {
  let wrapper = shallow(<Map />);
  beforeEach(() => {
    wrapper = shallow(<Map />);
  });
  test("should render Map", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.MAP}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.MAP}-map`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.MAP}-headeer`)).toBe(true);
  });
  test("should render map", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.MAP}`)).toBe(true);
  });
});
