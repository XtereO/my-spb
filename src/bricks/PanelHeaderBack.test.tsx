import { shallow } from "enzyme";
import { PanelHeaderBack } from "./PanelHeaderBack";

describe("Test PanelHeaderBack component", () => {
  let wrapper = shallow(<PanelHeaderBack id="panel-header-back" />);
  beforeEach(() => {
    wrapper = shallow(<PanelHeaderBack id="panel-header-back" />);
  });
  test("should render PanelHeaderBack", () => {
    expect(!!wrapper.find("#panel-header-back")).toBe(true);
  });
  test("should panel-header-back's separator equal to false", () => {
    expect(wrapper.find("#panel-header-back").props()).toHaveProperty(
      "separator",
      false
    );
  });
});
