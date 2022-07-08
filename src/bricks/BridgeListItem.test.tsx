import { mount, shallow } from "enzyme";
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
  )
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
    )
  });
  test("should render BridgeListItem", () => {
    expect(!!wrapper.find("#bridge-list-item-bl")).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find("#bl-header")).toBe(true);
  });
  test("should header's text equal to 'First'", () => {
    expect(wrapper.find("#bl-header").first().text()).toContain("First");
  });
  test("should render time-intervals", () => {
    expect(!!wrapper.find("#bl-time-intervals")).toBe(true);
  });
  test("should render item-open", () => {
    expect(!!wrapper.find("#bl-item-0-open")).toBe(true);
  });
  test("should item-open's fontSize equal to 14", () => {
    expect(wrapper.find("#bl-item-0-open").props().style).toHaveProperty(
      "fontSize",
      14
    );
  });
  test("should item-open's fontWeight equal to 500", () => {
    expect(wrapper.find("#bl-item-0-open").props().style).toHaveProperty(
      "fontWeight",
      500
    );
  });
  test("should item-open's color equal to #A4A6AA", () => {
    expect(wrapper.find("#bl-item-0-open").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should render item-close", () => {
    expect(!!wrapper.find("#bl-item-0-close")).toBe(true);
  });
  test("should item-close's fontSize equal to 14", () => {
    expect(wrapper.find("#bl-item-0-close").props().style).toHaveProperty(
      "fontSize",
      14
    );
  });
  test("should item-close's fontWeight equal to 500", () => {
    expect(wrapper.find("#bl-item-0-close").props().style).toHaveProperty(
      "fontWeight",
      500
    );
  });
  test("should item-close's color equal to #A4A6AA", () => {
    expect(wrapper.find("#bl-item-0-close").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should render distance", () => {
    expect(!!wrapper.find("#bl-distance")).toBe(true);
  });
});
