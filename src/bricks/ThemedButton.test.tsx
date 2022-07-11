import { shallow } from "enzyme";
import { ThemedButton } from "./ThemedButton";

describe("Test ThemedButton component", () => {
  let wrapper = shallow(
    <ThemedButton fontSize={10} id="btn">
      Push
    </ThemedButton>
  );
  beforeEach(() => {
    wrapper = shallow(
      <ThemedButton fontSize={10} id="btn">
        Push
      </ThemedButton>
    );
  });
  test("should render ThemedButton", () => {
    expect(wrapper.find("#btn").isEmptyRender()).toBeFalsy();
  });
  test("should btn-title's children equal to Push", () => {
    expect(wrapper.find("#btn-title").text()).toEqual("Push");
  });
  test("should btn-title's fontSize equal to 10", () => {
    expect(wrapper.find("#btn-title").props().style).toHaveProperty("fontSize", 10);
  });
  test("should btn's size equal to l", () => {
    expect(wrapper.find("#btn").props()).toHaveProperty("size", "l");
  });
  test("should btn's background equal to #A4A6AA", () => {
    expect(wrapper.find("#btn").props().style).toHaveProperty(
      "background",
      "#A4A6AA"
    );
  });
  test("should btn's color equal to #fff", () => {
    expect(wrapper.find("#btn").props().style).toHaveProperty("color", "#fff");
  });
});
