import { shallow } from "enzyme";
import { LocationMapOutlineIcon } from "../icons";
import { CardHeader } from "./CardHeader";

describe("Test CardHeader component", () => {
  let wrapper = shallow(
    <CardHeader id="beautiful-place-header" before={<LocationMapOutlineIcon />}>
      Красивые места
    </CardHeader>
  );
  beforeEach(() => {
    wrapper = shallow(
      <CardHeader
        id="beautiful-place-header"
        before={<LocationMapOutlineIcon />}
      >
        Красивые места
      </CardHeader>
    );
  });
  test("should render beautiful-place-header", () => {
    expect(!!wrapper.find("#beautiful-place-header")).toBe(true);
  });
  test("should beautiful-place-title's text equal to Красивые места", () => {
    expect(wrapper.find(`#beautiful-place-header-title`).text()).toContain(
      "Факт"
    );
  });
  test("should render beautiful-place-title", () => {
    expect(!!wrapper.find("#beautiful-place-title")).toBe(true);
  });
  test("should beautiful-place-title's className equal to heading-large", () => {
    expect(wrapper.find("#beautiful-place-title").props()).toHaveProperty(
      "className",
      "heading-large"
    );
  });
  test("should beautiful-place-title's color equal to #000", () => {
    expect(wrapper.find("#beautiful-place-title").props().style).toHaveProperty(
      "color",
      "#000"
    );
  });
});
