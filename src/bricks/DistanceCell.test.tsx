import { shallow } from "enzyme";
import { DistanceCell } from "./DistanceCell";

describe("Test DistanceCell component", () => {
  let wrapper = shallow(
    <DistanceCell id="distance-cell" distance={1200}>
      Distance
    </DistanceCell>
  );
  beforeEach(() => {
    wrapper = shallow(
      <DistanceCell id="distance-cell" distance={1200}>
        Distance
      </DistanceCell>
    );
  });
  test("should render DistanceCell", () => {
    expect(!!wrapper.find("#distance-cell")).toBe(true);
  });
  test("should disatnce's fontSize equal to 14", () => {
    expect(wrapper.find("#distance-cell").props().style).toHaveProperty(
      "fontSize",
      14
    );
  });
  test("should distance's fontWeight equal to 500", () => {
    expect(wrapper.find("#distance-cell").props().style).toHaveProperty(
      "fontWeight",
      500
    );
  });
  test("should distance's color equal to #A4A6AA", () => {
    expect(wrapper.find("#distance-cell").props().style).toHaveProperty(
      "color",
      "#A4A6AA"
    );
  });
  test("should render children", () => {
    expect(wrapper.find("#distance-cell").text()).toContain("Distance");
  });
});
