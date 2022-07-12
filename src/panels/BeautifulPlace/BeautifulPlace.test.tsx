import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { BeautifulPlace } from "./BeautifulPlace";

describe("Test BeautifulPlace component", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
  let wrapper = mount(
    <Provider store={store}>
      <BeautifulPlace />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BeautifulPlace />
      </Provider>
    );
  });
  test("should render BeautifulPlace", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-back`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-header`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render filter", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-filter`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render list", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-list`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
});
