import { shallow } from "enzyme";
import { Fact } from "./Fact";

describe("Test FactBanner component", () => {
  let wrapper = shallow(<Fact />);
  beforeEach(() => {
    wrapper = shallow(<Fact />);
  });
  test("should render fact", () => {
    expect(!!wrapper.find(`#fact`)).toBe(true);
  });
  test("should render fact-header", () => {
    expect(!!wrapper.find(`#fact-header`)).toBe(true);
  });
  test("should render fact-date", () => {
    expect(!!wrapper.find("#fact-date")).toBe(true);
  });
  test("should fact-date's className equal to heading-small", () => {
    expect(wrapper.find("#fact-date").props()).toHaveProperty(
      "className",
      "heading-small"
    );
  });
  test("should fact-date's color equal to #000", () => {
    expect(wrapper.find("#fact-date").props().style).toHaveProperty(
      "color",
      "#000"
    );
  });
  test("should render fact-description", () => {
    expect(!!wrapper.find("#fact-description")).toBe(true);
  });
  test("should fact-description's className equal to text", () => {
    expect(wrapper.find("#fact-description").props()).toHaveProperty(
      "className",
      "text"
    );
  });
  test("should fact-description's color equal to #A4A6AA", () => {
    expect(wrapper.find("#fact-description").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should render fact-btn", () => {
    expect(!!wrapper.find("#fact-btn").props()).toBe(true);
  });
});