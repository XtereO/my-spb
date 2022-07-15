import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { BridgeListItem } from "./BridgeListItem";

describe("Test BridgeListItem component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <BridgeListItem
        id={"bl"}
        distance={1230}
        time_first_wiring={"2.00"}
        the_first_arch={"3.00"}
        the_second_wiring={"4.15"}
        the_second_arch={"5.30"}
        coordinates={[55, 30]}
      >
        First
      </BridgeListItem>
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BridgeListItem
          id={"bl"}
          distance={1230}
          time_first_wiring={"2.00"}
          the_first_arch={"3.00"}
          the_second_wiring={"4.15"}
          the_second_arch={"5.30"}
          coordinates={[55, 30]}
        >
          First
        </BridgeListItem>
      </Provider>
    );
  });
  test("should render BridgeListItem", () => {
    expect(wrapper.find("#bridge-list-item-bl").first().isEmptyRender()).toBeFalsy()
  });
  test("should render header", () => {
    expect(wrapper.find("#bl-header").first().isEmptyRender()).toBeFalsy()
  });
  test("should header's text equal to 'First'", () => {
    expect(wrapper.find("#bl-header").first().text()).toContain("First");
  });
  test("should render time-intervals", () => {
    expect(wrapper.find("#bl-time-intervals").first().isEmptyRender()).toBeFalsy()
  });
  test("should render item-wiring", () => {
    expect(wrapper.find("#bl-item-0-wiring").first().isEmptyRender()).toBeFalsy()
  });
  test("should item-wiring's text equal to 02:00", () => {
    expect(wrapper.find("#bl-item-0-wiring").first().text()).toEqual("02:00");
  });
  test("should item-wiring's fontSize equal to 14", () => {
    expect(
      wrapper.find("#bl-item-0-wiring").first().props().style
    ).toHaveProperty("fontSize", 14);
  });
  test("should item-wiring's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bl-item-0-wiring").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render item-arch", () => {
    expect(wrapper.find("#bl-item-0-arch").first().isEmptyRender()).toBeFalsy()
  });
  test("should item-arch's text equal to 03:00", () => {
    expect(wrapper.find("#bl-item-0-arch").first().text()).toEqual("03:00");
  });
  test("should item-arch's fontSize equal to 14", () => {
    expect(
      wrapper.find("#bl-item-0-arch").first().props().style
    ).toHaveProperty("fontSize", 14);
  });
  test("should item-arch's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bl-item-0-arch").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render distance", () => {
    expect(wrapper.find("#bl-distance").first().isEmptyRender()).toBeFalsy();
  });
});
