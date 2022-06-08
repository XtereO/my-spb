import { shallow } from "enzyme";
import { DistanceFilter } from "./DistanceFilter";

describe("Test DistanceFilter", () => {
  let wrapper = shallow(<DistanceFilter value={"distance"} />);
  beforeEach(() => {
    wrapper = shallow(<DistanceFilter value={"distance"} />);
  });
  test("should render DistanceFilter", () => {
    expect(!!wrapper.find("#distance-filter")).toBe(true);
  });
  test("should distance-filter's top equal to Сортировка", () => {
    expect(wrapper.find("#distance-filter").props()).toHaveProperty(
      "top",
      "Сортировка"
    );
  });
  test("should render distance-filter", () => {
    expect(!!wrapper.find("#distance-filter-control")).toBe(true);
  });
  test("should distance-filter-control's size equal to l", () => {
    expect(wrapper.find("#distance-filter-control").props()).toHaveProperty(
      "size",
      "l"
    );
  });
  test("should distance-filter-control's value equal to 'distance'", () => {
    expect(wrapper.find("#distance-filter-control").props()).toHaveProperty(
      "value",
      "distance"
    );
  });
  test("should distance-filter-control's size equal to l", () => {
    expect(wrapper.find("#distance-filter-control").props()).toHaveProperty(
      "size",
      "l"
    );
  });
  test("should distance-filter-control's options be defautl", () => {
    expect(wrapper.find("#distance-filter-control").props()).toHaveProperty(
      "options",
      [
        {
          label: "По умолчанию",
          value: "default",
        },
        {
          label: "По расстоянию",
          value: "distance",
        },
      ]
    );
  });
});
