import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { FreeWiFi } from "./FreeWiFi";

describe("Test FreeWiFi component", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
  let wrapper = mount(
    <Provider store={store}>
      <FreeWiFi />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <FreeWiFi />
      </Provider>
    );
  });
  test("should render FreeWiFi", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-back`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-header`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render filter", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-filter`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render list", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-list`).first().isEmptyRender()
    ).toBeFalsy();
  });
});
