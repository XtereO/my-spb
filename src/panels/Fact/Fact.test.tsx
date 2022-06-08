import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { Fact } from "./Fact";

describe("Test Fact component", () => {
  let wrapper = shallow(<Fact />);
  beforeEach(() => {
    wrapper = shallow(<Fact />);
  });
  test("should render Fact", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}`)).toBe(true);
  });
  test("should render panel-header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-panel-header`)).toBe(true);
  });
  test("should render panel-header's text", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.FACT}-panel-header`).text()).toBe(
      "Главная"
    );
  });
  test("should panel-header's color equal to #000", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-panel-header`).props().style
    ).toHaveProperty("color", "#000");
  });
});
