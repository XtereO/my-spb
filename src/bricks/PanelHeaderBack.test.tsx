import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { PanelHeaderBack } from "./PanelHeaderBack";

describe("Test PanelHeaderBack component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <PanelHeaderBack id="panel-header-back" />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <PanelHeaderBack id="panel-header-back" />
      </Provider>
    );
  });
  test("should render PanelHeaderBack", () => {
    expect(wrapper.find("#panel-header-back").first().isEmptyRender()).toBeFalsy();
  });
  test("should panel-header-back's separator equal to false", () => {
    expect(wrapper.find("#panel-header-back").get(1).props).toHaveProperty(
      "separator",
      false
    );
  });
});
