import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { DistanceFilter } from "./DistanceFilter";
import { TextSFProTextMedium } from "./Fonts";

describe("Test DistanceFilter", () => {
  let wrapper = mount(
    <Provider store={store}>
      <DistanceFilter id="distance-filter" value={"distance"} />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <DistanceFilter id="distance-filter" value={"distance"} />
      </Provider>
    );
  });
  test("should render DistanceFilter", () => {
    expect(
      wrapper.find("#distance-filter").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render distance-filter", () => {
    expect(
      wrapper.find("#distance-filter-control").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should distance-filter-control's size equal to l", () => {
    expect(
      wrapper.find("#distance-filter-control").first().props()
    ).toHaveProperty("size", "l");
  });
  test("should distance-filter-control's value equal to 'distance'", () => {
    expect(
      wrapper.find("#distance-filter-control").first().props()
    ).toHaveProperty("value", "distance");
  });
  test("should distance-filter-control's size equal to l", () => {
    expect(
      wrapper.find("#distance-filter-control").first().props()
    ).toHaveProperty("size", "l");
  });
});
