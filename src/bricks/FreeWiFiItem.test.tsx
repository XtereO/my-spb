import { shallow } from "enzyme";
import { FreeWiFiItem } from "./FreeWiFiItem";

describe("Test FreeWiFiItem component", () => {
  let wrapper = shallow(
    <FreeWiFiItem id={1} title={"new spot"} isTurnedOn={false} />
  );
  beforeEach(() => {
    wrapper = shallow(
      <FreeWiFiItem id={1} title={"new spot"} isTurnedOn={false} />
    );
  });
  test("should render FreeWiFiItem", () => {
    expect(wrapper.find("#free-wifi-item1"));
  });
  test("should free-wifi-item's display equal to flex", () => {
    expect(wrapper.find("#free-wifi-item1").props().style).toHaveProperty(
      "display",
      "flex"
    );
  });
  test("should render free-wifi-item-indicator", () => {
    expect(!!wrapper.find("#free-wifi-item1-indicator")).toBe(true);
  });
  test("should free-wifi-item-indicator's text 1", () => {
    expect(wrapper.find("#free-wifi-item1-indicator").text()).toBe(1);
  });
  test("should free-wifi-item-indicator's background equal to #FFA7A5", () => {
    expect(
      wrapper.find("#free-wifi-item1-indicator").props().style
    ).toHaveProperty("background", "#FFA7A5");
  });
  test("should free-wifi-item-indicator's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#free-wifi-item1-indicator").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render free-wifi-item-title", () => {
    expect(!!wrapper.find("#free-wifi-item1-title")).toBe(true);
  });
  test("should free-wifi-item-title's color equal to #A4A6AA", () => {
    expect(wrapper.find("#free-wifi-item1-title").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should free-wifi-item-title's fontSize equal to 14", () => {
    expect(wrapper.find("#free-wifi-item1-title").props().style).toHaveProperty(
      "fontSize",
      14
    );
  });
  test("should free-wifi-item-title's fontWeight equal to 500", () => {
    expect(wrapper.find("#free-wifi-item1-title").props().style).toHaveProperty(
      "fontWeight",
      500
    );
  });
});
