import { shallow } from "enzyme";
import { TurnOffWater } from "./TurnOffWater";

describe("Test TurnOffWaterBanner component", () => {
  let wrapper = shallow(<TurnOffWater />);
  beforeEach(() => {
    wrapper = shallow(<TurnOffWater />);
  });
  test("should render turn-off-water", () => {
    expect(!!wrapper.find("#turn-off-water")).toBe(true);
  });
  test("should render WasherOutlineIcon", () => {
    expect(!!wrapper.find("#turn-off-water-icon")).toBe(true);
  });
  test("should render turn-off-water-title", () => {
    expect(!!wrapper.find("#turn-off-water-title")).toBe(true);
  });
  test("should turn-off-water-title's text equal to Развод мостов", () => {
    expect(wrapper.find("#turn-off-water-title").text()).toBe(
      "Развод мостов"
    );
  });
  test("should turn-off-water-title's className equal to heading", () => {
    expect(wrapper.find("#turn-off-water-title").props()).toHaveProperty(
      "className",
      "heading"
    );
  });
  test("should turn-off-water-title's color equal to #000", () => {
    expect(
      wrapper.find("#turn-off-water-title").props().style
    ).toHaveProperty("color", "#000");
  });
  test("should render turn-off-water-description", () => {
    expect(!!wrapper.find("#turn-off-water-description")).toBe(true);
  });
  test("should turn-off-water-description's className equal to text", () => {
    expect(wrapper.find("#turn-off-water-description").props()).toHaveProperty(
      "className",
      "text"
    );
  });
  test("should turn-off-water-'s color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#turn-off-water-description").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render turn-off-water-btn", () => {
    expect(!!wrapper.find("#turn-off-water-btn")).toBe(true);
  });
});
