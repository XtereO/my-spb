import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { Home } from "./Home";

describe("Test Home component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  test("should render Home", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.HOME}`).first().isEmptyRender()
    ).toBeFalsy();
  });
});
