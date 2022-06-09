import { shallow } from "enzyme";
import { TurnOffWaterListItem } from "./TurnOffWaterListItem";

describe("Test TurnOffWaterListItem component", () => {
  let wrapper = shallow(
    <TurnOffWaterListItem
      id={"1"}
      timeIntervals={[{ from: "22.05, 00:00", to: "05.06, 00:00" }]}
    >
      SPb
    </TurnOffWaterListItem>
  );
  beforeEach(() => {
    wrapper = shallow(
      <TurnOffWaterListItem
        id={"1"}
        timeIntervals={[{ from: "22.05, 00:00", to: "05.06, 00:00" }]}
      >
        SPb
      </TurnOffWaterListItem>
    );
  });
  test("should render TurnOffWaterListItem", () => {
    expect(!!wrapper.find("#turn-off-water-list-item-1"));
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
});
