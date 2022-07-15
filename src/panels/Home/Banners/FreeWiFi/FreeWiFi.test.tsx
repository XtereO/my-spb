import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../bll/store";
import { FreeWiFi } from "./FreeWiFi";

describe("Test FreeWiFiBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <FreeWiFi onClick={jest.fn} />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <FreeWiFi onClick={jest.fn} />
      </Provider>
    );
  });
  test("should render FreeWiFi", () => {
    expect(wrapper.find("#free-wifi").first().isEmptyRender()).toBeFalsy();
  });
  test("should render free-wifi-header", () => {
    expect(
      wrapper.find("#free-wifi-header").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render free-wifi-items", () => {
    expect(
      wrapper.find("#free-wifi-items").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render free-wifi-btn", () => {
    expect(wrapper.find("#free-wifi-btn").first().isEmptyRender()).toBeFalsy();
  });
});
