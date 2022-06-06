import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../consts";
import { Home } from "./Home";

describe("Test Home component", () => {
  let wrapper = shallow(<Home />);
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  test("should render Home", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.HOME}`)).toBe(true);
  });
  test("should render panel-header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.HOME}-panel-header`)).toBe(true);
  });
  test("should render panel-header's text", () => {
    expect(wrapper.find(`${PANEL_ROUTES.HOME}-panel-header`)).toBe("Главная");
  });
  test("should panel-header's color equal to #000", () => {
    expect(
      wrapper.find(`${PANEL_ROUTES.HOME}-panel-header`).props().style
    ).toHaveProperty("color", "#000");
  });
  test("should panel-header's separator equal to false", () => {
    expect(
      wrapper.find(`${PANEL_ROUTES.HOME}-panel-header`).props()
    ).toHaveProperty("separator", false);
  });
  test("should render fact", () => {
    expect(!!wrapper.find(`${PANEL_ROUTES.HOME}-fact`)).toBe(true);
  });
});
