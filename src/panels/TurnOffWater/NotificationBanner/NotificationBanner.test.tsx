import { shallow } from "enzyme";
import { NotificationBanner } from "./NotificationBanner";

describe("Test NotificationBanner component", () => {
  let wrapper = shallow(<NotificationBanner />);
  beforeEach(() => {
    wrapper = shallow(<NotificationBanner />);
  });
  test("should render NotificationBanner", () => {
    expect(!!wrapper.find("#notification-banner")).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find("#notification-banner-header")).toBe(true);
  });
  test("should render title", () => {
    expect(!!wrapper.find("#notification-banner-title")).toBe(true);
  });
  test("should title's color equal to #000", () => {
    expect(
      wrapper.find("#notification-banner-title").props().style
    ).toHaveProperty("color", "#000");
  });
  test("should title's className equal to heading", () => {
    expect(wrapper.find("#notification-banner-title").props()).toHaveProperty(
      "className",
      "heading"
    );
  });
  test("should render description", () => {
    expect(!!wrapper.find("#notification-banner-description")).toBe(true);
  });
  test("should description's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#notification-banner-description").props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should description's className equal to text", () => {
    expect(
      wrapper.find("#notification-banner-description").props()
    ).toHaveProperty("className", "text");
  });
  test("should render btn-change", () => {
    expect(wrapper.find("#notification-banner-btn-change"));
  });
  test("should render btn-permission", () => {
    expect(wrapper.find("#notification-banner-btn-permission"));
  });
});
