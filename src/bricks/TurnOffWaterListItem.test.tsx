import { shallow } from "enzyme";
import { TurnOffWaterListItem } from "./TurnOffWaterListItem";

describe("Test TurnOffWaterListItem component", () => {
  let wrapper = shallow(
    <TurnOffWaterListItem
      id={"1"}
      timeIntervals={[
        { date_off: "2022.05.22T23:59", date_on: "2022.05.23T23:59" },
      ]}
    >
      SPb
    </TurnOffWaterListItem>
  );
  beforeEach(() => {
    wrapper = shallow(
      <TurnOffWaterListItem
        id={"1"}
        timeIntervals={[
          { date_off: "2022.05.22T00:00", date_on: "2022.05.23T23:59" },
        ]}
      >
        SPb
      </TurnOffWaterListItem>
    );
  });
  test("should render TurnOffWaterListItem", () => {
    expect(
      wrapper.find("#turn-off-water-list-item-1").isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(wrapper.find("#towl-1-header").isEmptyRender()).toBeFalsy();
  });
  test("should header's text equal to 'First'", () => {
    expect(wrapper.find("#towl-1-header-title").text()).toEqual("SPb");
  });
  test("should header's fontSize equal to 18", () => {
    expect(wrapper.find("#towl-1-header-title").props().style).toHaveProperty(
      "fontSize",
      18
    );
  });
  test("should header's color equal to #000", () => {
    expect(wrapper.find("#towl-1-header-title").props().style).toHaveProperty(
      "color",
      "#000"
    );
  });
  test("should render time-intervals", () => {
    expect(wrapper.find("#towl-1-time-intervals").isEmptyRender()).toBeFalsy();
  });
  test("should render time-interval", () => {
    expect(wrapper.find("#towl-1-item-0").isEmptyRender()).toBeFalsy();
  });
  test("should time-interval's text equal to '22.05, 00:00 - 23.05, 23:59'", () => {
    expect(wrapper.find("#towl-1-item-0").text()).toEqual(
      "22.05, 00:00 - 23.05, 23:59"
    );
  });
  test("should time-interval's color equal to #A4A6AA", () => {
    expect(wrapper.find("#towl-1-item-0").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should time-interval's fontSize equal to 18", () => {
    expect(wrapper.find("#towl-1-item-0").props().style).toHaveProperty(
      "fontSize",
      18
    );
  });
});
