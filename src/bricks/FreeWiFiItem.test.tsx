import { shallow } from "enzyme";
import { FreeWiFiItem } from "./FreeWiFiItem";

describe("Test FreeWiFiItem component", () => {
  let wrapper = shallow(
    <FreeWiFiItem id={1} address={"Kamysh"} status={"Не работает"} />
  );
  beforeEach(() => {
    wrapper = shallow(
      <FreeWiFiItem id={1} address={"Kamysh"} status={"Не работает"} />
    );
  });
  test("should render FreeWiFiItem", () => {
    expect(wrapper.find("#free-wifi-item-1").isEmptyRender()).toBeFalsy();
  });
  test("should free-wifi-item's display equal to flex", () => {
    expect(wrapper.find("#free-wifi-item-1").props().style).toHaveProperty(
      "display",
      "flex"
    );
  });
  test("should render free-wifi-item-indicator", () => {
    expect(
      wrapper.find("#free-wifi-item-1-indicator").isEmptyRender()
    ).toBeFalsy();
  });
  test("should free-wifi-item-indicator's text 1", () => {
    expect(wrapper.find("#free-wifi-item-1-indicator").text()).toBe("1");
  });
  test("should free-wifi-item-indicator's background equal to #FFA7A5", () => {
    expect(
      wrapper.find("#free-wifi-item-1-indicator").props().style
    ).toHaveProperty("background", "#FFA7A5");
  });
  test("should free-wifi-item-indicator's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#free-wifi-item-1-indicator").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render free-wifi-item-title", () => {
    expect(wrapper.find("#free-wifi-item-1-title").isEmptyRender()).toBeFalsy();
  });
  test("should free-wifi-item-title's equal to Kamysh", () => {
    expect(wrapper.find("#free-wifi-item-1-title").text()).toEqual("Kamysh");
  });
  test("should free-wifi-item-title's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#free-wifi-item-1-title").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should free-wifi-item-title's fontSize equal to 14", () => {
    expect(
      wrapper.find("#free-wifi-item-1-title").props().style
    ).toHaveProperty("fontSize", 14);
  });
});
