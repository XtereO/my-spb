import { shallow } from "enzyme";
import { VerticalPlace } from "./VerticalPlace";

describe("Test VerticalPlace component", () => {
  let wrapper = shallow(
    <VerticalPlace
      id="vertical-place"
      distance={135}
      title="glacier"
      imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
    />
  );
  beforeEach(() => {
    wrapper = shallow(
      <VerticalPlace
        id="vertical-place"
        distance={135}
        title="glacier"
        imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
      />
    );
  });
  test("should render vertical-place", () => {
    expect(!!wrapper.find("#vertical-place")).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find("#vertical-place-header")).toBe(true);
  });
  test("should header's text equal to gacier", () => {
    expect(wrapper.find("#vertical-place-header").text()).toBe("glacier");
  });
  test("should render image", () => {
    expect(!!wrapper.find("#vertical-place-img")).toBe(true);
  });
  test("should render distance", () => {
    expect(!!wrapper.find("#vertical-place-distance")).toBe(true);
  });
  test("should img's borderRadius equal to 21", () => {
    expect(wrapper.find("#vertical-place-img").props().style).toHaveProperty(
      "borderRadius",
      21
    );
  });
  test("should img's width equal to 100%", () => {
    expect(wrapper.find("#vertical-place-img").props().style).toHaveProperty(
      "width",
      "100%"
    );
  });
  test("should img's src equal to https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg", () => {
    expect(wrapper.find("#vertical-place-img").props().style).toHaveProperty(
      "src",
      "https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
    );
  });
});
