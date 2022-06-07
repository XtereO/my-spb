import { shallow } from "enzyme";
import { RoundedCard } from "./RoundedCard";

describe("Test RoundedCard component", () => {
  let wrapper = shallow(<RoundedCard id="rounded-card">Content</RoundedCard>);
  beforeEach(() => {
    wrapper = shallow(<RoundedCard id="rounded-card">Content</RoundedCard>);
  });
  test("should render RoundedCard", () => {
    expect(!!wrapper.find("rounded-card")).toBe(true);
  });
  test("should render children", () => {
    expect(wrapper.find("rounded-card").text()).toBe("Content");
  });
  test("should borderRadius equal to 21px", () => {
    expect(wrapper.find("rounded-card").props().style).toHaveProperty(
      "borderRadius",
      21
    );
  });
  test("should background equal to #EDEFF2", () => {
    expect(wrapper.find("rounded-card").props().style).toHaveProperty(
      "background",
      "#EDEFF2"
    );
  });
});
