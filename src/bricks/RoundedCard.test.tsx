import { shallow } from "enzyme";
import { RoundedCard } from "./RoundedCard";

describe("Test RoundedCard component", () => {
  let wrapper = shallow(<RoundedCard id="rounded-card">Content</RoundedCard>);
  beforeEach(() => {
    wrapper = shallow(<RoundedCard id="rounded-card">Content</RoundedCard>);
  });
  test("should render RoundedCard", () => {
    expect(wrapper.find("#rounded-card").isEmptyRender()).toBeFalsy();
  });
  test("should render children", () => {
    expect(wrapper.find("#rounded-card").text()).toBe("Content");
  });
  test("should borderRadius equal to 21px", () => {
    expect(wrapper.find("#rounded-card").props().style).toHaveProperty(
      "borderRadius",
      21
    );
  });
  test("should height equal to 100%", () => {
    expect(wrapper.find("#rounded-card").props().style).toHaveProperty(
      "height",
      "100%"
    );
  });
  test("should background equal to #EDEFF2", () => {
    expect(wrapper.find("#rounded-card").props().style).toHaveProperty(
      "background",
      "#EDEFF2"
    );
  });
});
