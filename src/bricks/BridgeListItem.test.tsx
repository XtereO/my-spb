import { shallow } from "enzyme";
import { BridgeListItem } from "./BridgeListItem";

describe("Test BridgeListItem component", () => {
  let wrapper = shallow(
    <BridgeListItem
      id={"bl"}
      distance={1230}
      timeIntervals={[{ timeOpen: "12:00", timeClose: "12:00" }]}
    >
      First
    </BridgeListItem>
  );
  beforeEach(() => {
    wrapper = shallow(
      <BridgeListItem
        distance={1230}
        id={"bl"}
        timeIntervals={[{ timeOpen: "12:00", timeClose: "12:00" }]}
      >
        First
      </BridgeListItem>
    );
  });
  test("should render BridgeListItem", () => {
    expect(!!wrapper.find("#bridge-list-item-bl")).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find("#bl-header")).toBe(true);
  });
  test("should header's text equal to 'First'", () => {
    expect(wrapper.find("#bl-header").text()).toBe("First");
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
  test("should disatnce's fontSize equal to 14", () => {
    expect(wrapper.find("#bl-distance").props().style).toHaveProperty(
      "fontSize",
      14
    );
  });
  test("should distance's fontWeight equal to 500", () => {
    expect(wrapper.find("#bl-distance").props().style).toHaveProperty(
      "fontWeight",
      500
    );
  });
  test("should distance's color equal to #A4A6AA", () => {
    expect(wrapper.find("#bl-distance").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
});
