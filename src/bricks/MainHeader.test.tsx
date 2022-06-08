import { shallow } from "enzyme";
import { MainHeader } from "./MainHeader";

describe("Test MainHeader component", () => {
  let wrapper = shallow(<MainHeader id="main-header">Main</MainHeader>);
  beforeEach(() => {
    wrapper = shallow(<MainHeader id="main-header">Main</MainHeader>);
  });
  test("should render MainHeader", () => {
    expect(!!wrapper.find("#main-header")).toBe(true);
  });
  test("should main-header's color equal to #000", () => {
    expect(wrapper.find("#main-header").props().style).toHaveProperty(
      "color",
      "#000"
    );
  });
  test("should main-header's fontWeight equal to 700", () => {
    expect(wrapper.find("#main-header").props().style).toHaveProperty(
      "fontWeight",
      700
    );
  });
  test("should main-header's fontSize equal to 22", () => {
    expect(wrapper.find("#main-header").props().style).toHaveProperty(
      "fontSize",
      22
    );
  });
  test("should main-header's text equal to Main", () => {
    expect(wrapper.find("#main-header").text()).toBe("Main");
  });
});
