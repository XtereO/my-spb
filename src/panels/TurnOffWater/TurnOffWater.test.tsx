import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { TurnOffWater } from "./TurnOffWater";

describe("Test TurnOffWater component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <TurnOffWater />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TurnOffWater />
      </Provider>
    );
  });
  test("should render TurnOffWater", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.TURN_OFF_WATER}`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.TURN_OFF_WATER}-back`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.TURN_OFF_WATER}-header`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should render list", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.TURN_OFF_WATER}-list`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
});
