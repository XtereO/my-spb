import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { BridgeConstruction } from "./BridgeConstruction";

describe("Test BridgeConstruction component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <BridgeConstruction />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BridgeConstruction />
      </Provider>
    );
  });
  test("should render BridgeConstrution", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-back`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-header`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render filter", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-filter`)
        .first()
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render list", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-list`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
});
