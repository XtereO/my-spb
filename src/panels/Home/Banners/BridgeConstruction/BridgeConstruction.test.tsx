import { shallow } from "enzyme";
import { BridgeConstruction } from "./BridgeConstruction";

describe("Test BridgeConstructionBanner component", () => {
  let wrapper = shallow(<BridgeConstruction />);
  beforeEach(() => {
    wrapper = shallow(<BridgeConstruction />);
  });
  test("should render BrdigeConstruction", () => {
    expect(!!wrapper.find("#bridge-construction")).toBe(true);
  });
  test("should render CarOutlineIcon", () => {
    expect(!!wrapper.find("#bridge-construction-icon")).toBe(true);
  });
  test("should render bridge-construction-title", () => {
    expect(!!wrapper.find("#bridge-construction-title")).toBe(true);
  });
  test("should bridge-construction-title's text equal to Развод мостов", () => {
    expect(wrapper.find("#bridge-construction-title").text()).toBe(
      "Развод мостов"
    );
  });
  test("should bridge-construction-title's className equal to heading", () => {
    expect(wrapper.find("#bridge-construction-title").props()).toHaveProperty(
      "className",
      "heading"
    );
  });
  test("should bridge-construction-title's color equal to #000", () => {
    expect(
      wrapper.find("#bridge-construction-title").props().style
    ).toHaveProperty("color", "#000");
  });
  test("should render bridge-construction-name", () => {
    expect(!!wrapper.find("#bridge-construction-name")).toBe(true);
  });
  test("should bridge-construction-name's className equal to text", () => {
    expect(wrapper.find("#bridge-construction-name").props()).toHaveProperty(
      "className",
      "text"
    );
  });
  test("should bridge-construction-name's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bridge-construction-name").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render bridge-construction-time", () => {
    expect(!!wrapper.find("#bridge-construction-time")).toBe(true);
  });
  test("should bridge-construction-time's className equal to text", () => {
    expect(wrapper.find("#bridge-construction-time").props()).toHaveProperty(
      "className",
      "text"
    );
  });
  test("should bridge-construction-time's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bridge-construction-time").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render bridge-construction-btn", () => {
    expect(!!wrapper.find("#bridge-construction-btn")).toBe(true);
  });
});