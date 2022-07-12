import { mount } from "enzyme";
import { Map } from "./Map";
import { PANEL_ROUTES } from "../../consts";
import { store } from "../../bll/store";
import { Provider } from "react-redux";

describe("Test Map component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <Map />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Map />
      </Provider>
    );
  });
  test("should render Map", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.MAP}`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.MAP}-back`).first().isEmptyRender()
    ).toBeFalsy();
  });
});
