import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { FreeWiFiDetailedItem } from "./FreeWiFiDetailedItem";

describe("Test FreeWiFiDetailedItem component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <FreeWiFiDetailedItem
        id={1}
        address={"Kamysh"}
        status={"Не работает"}
        distance={1231}
        name_wifi={"SPb-Free"}
        coverage={150}
      />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <FreeWiFiDetailedItem
          id={1}
          address={"Kamysh"}
          status={"Не работает"}
          distance={1231}
          name_wifi={"SPb-Free"}
          coverage={150}
        />
      </Provider>
    );
  });
  test("should render FreeWiFiDetailedItem", () => {
    expect(wrapper.find("#wf-1").first().isEmptyRender()).toBeFalsy();
  });
  test("should render address", () => {
    expect(wrapper.find("#wf-1-address").first().isEmptyRender()).toBeFalsy();
  });
  test("should render status", () => {
    expect(wrapper.find("#wf-1-status").first().isEmptyRender()).toBeFalsy();
  });
  test("should status's text equal to 'Статус: не работает'", () => {
    expect(wrapper.find("#wf-1-status").first().text()).toContain(
      "Статус: не работает"
    );
  });
  test("should render title", () => {
    expect(wrapper.find("#wf-1-title").first().isEmptyRender()).toBeFalsy();
  });
  test("should title's text equal to 'Название: SPb-Free'", () => {
    expect(wrapper.find("#wf-1-title").first().text()).toContain(
      "Название: SPb-Free"
    );
  });
  test("should render area-fill", () => {
    expect(wrapper.find("#wf-1-area-fill").first().isEmptyRender()).toBeFalsy();
  });
  test("should area-fill's text equal to 'Зона покрытия: 150 метров'", () => {
    expect(wrapper.find("#wf-1-area-fill").first().text()).toContain(
      "Зона покрытия: 150 метров"
    );
  });
  test("should render distance", () => {
    expect(wrapper.find("#wf-1-distance").first().isEmptyRender()).toBeFalsy();
  });
  test("should distance's text equal to 'Расстояние до Вас: 1.2 километров'", () => {
    expect(wrapper.find("#wf-1-distance").first().text()).toContain(
      "Расстояние до Вас: 1.2 километров"
    );
  });
  test("should render btn", () => {
    expect(wrapper.find("#wf-1-btn").first().isEmptyRender()).toBeFalsy();
  });
});
