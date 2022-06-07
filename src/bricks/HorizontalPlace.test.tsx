import { shallow } from "enzyme";
import { HorizontalPlace } from "./HorizontalPlace";

describe("Test HorizontalPlace component", () => {
  let wrapper = shallow(
    <HorizontalPlace
      title={"Glacier"}
      imgSrc={
        "https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
      }
    />
  );
  beforeEach(() => {
    wrapper = shallow(
      <HorizontalPlace
        title={"Glacier"}
        imgSrc={
          "https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
        }
      />
    );
  });
  test("should render horizontal-place", () => {
    expect(!!wrapper.find("#horizontal-place")).toBe(true);
  });
  test("should render horizontal-place-img", () => {
    expect(!!wrapper.find("#horizontal-place-img")).toBe(true);
  });
  test("should horizontal-place-img's borderRadius equal to 21", () => {
    expect(wrapper.find("#horizontal-place-img").props().style).toHaveProperty(
      "borderRadius",
      21
    );
  });
  test("should horizontal-place-img's width equal to 107.77", () => {
    expect(wrapper.find("#horizontal-place-img").props().style).toHaveProperty(
      "width",
      107.77
    );
  });
  test("should horizontal-place-img's height equal to 81", () => {
    expect(wrapper.find("#horizontal-place-img").props().style).toHaveProperty(
      "height",
      81
    );
  });
  test("should render horizontal-place-title", () => {
    expect(!!wrapper.find("#horizontal-place-title")).toBe(true);
  });
  test("should horizontal-place-title's fontSize equal to 12", () => {
    expect(
      wrapper.find("#horizontal-place-title").props().style
    ).toHaveProperty("fontSize", 12);
  });
  test("should horizontal-place-title's fontWeight equal to 600", () => {
    expect(
      wrapper.find("#horizontal-place-title").props().style
    ).toHaveProperty("fontWeight", 600);
  });
  test("should horizontal-place-title's color equal to #000", () => {
    expect(
      wrapper.find("#horizontal-place-title").props().style
    ).toHaveProperty("color", "#000");
  });
});
