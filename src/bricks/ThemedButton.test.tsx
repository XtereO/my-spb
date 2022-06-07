import { shallow } from "enzyme";
import { ThemedButton } from "./ThemedButton";

describe("Test ThemedButton component", () => {
  let wrapper = shallow(<ThemedButton id="btn">Push</ThemedButton>);
  beforeEach(() => {
    wrapper = shallow(<ThemedButton id="btn">Push</ThemedButton>);
  });
  test("should render ThemedButton", () => {
    expect(!!wrapper.find("#btn")).toBe(true);
  });
  test("should btn's children equal to Push", () => {
    expect(wrapper.find("#btn").text()).toBe("Push");
  });
  test("should btn's size equal to m", () => {
    expect(wrapper.find("#btn").props()).toHaveProperty("size", "m");
  });
  test("should btn's background equal to #A4A6AA", () => {
    expect(wrapper.find("#btn").props().style).toHaveProperty(
      "background",
      "#A4A6AA"
    );
  });
  test("should btn's color equal to #fff", () => {
    expect(wrapper.find("#btn").props().style).toHaveProperty("color", "#fff");
  });
});
