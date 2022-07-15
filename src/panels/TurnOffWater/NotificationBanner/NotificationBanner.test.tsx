import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../bll/store";
import { NotificationBannerComponent } from "./NotificationBanner";

describe("Test NotificationBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <NotificationBannerComponent />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <NotificationBannerComponent />
      </Provider>
    );
  });
  test("should render NotificationBanner", () => {
    expect(
      wrapper.find("#notification-banner").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper.find("#notification-banner-header").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render title", () => {
    expect(
      wrapper.find("#notification-banner-title").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should title's color equal to #000", () => {
    expect(
      wrapper.find("#notification-banner-title").first().props().style
    ).toHaveProperty("color", "#000");
  });
  test("should title's className equal to heading", () => {
    expect(
      wrapper.find("#notification-banner-title").first().props()
    ).toHaveProperty("className", "heading");
  });
  test("should render btn-change", () => {
    expect(
      wrapper.find("#notification-banner-btn-change").first().isEmptyRender()
    ).toBeFalsy();
  });
});
