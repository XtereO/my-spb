import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../bll/store";
import { TurnOffWater } from "./TurnOffWater";

describe("Test TurnOffWaterBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <TurnOffWater onClick={jest.fn} />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TurnOffWater onClick={jest.fn} />
      </Provider>
    );
  });
  test("should render turn-off-water", () => {
    expect(wrapper.find("#turn-off-water").first().isEmptyRender()).toBeFalsy();
  });
  test("should render WasherOutlineIcon", () => {
    expect(
      wrapper.find("#turn-off-water-icon").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render turn-off-water-title", () => {
    expect(
      wrapper.find("#turn-off-water-title").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should turn-off-water-title's text equal to 'Без воды'", () => {
    expect(wrapper.find("#turn-off-water-title").first().text()).toBe(
      "Без воды"
    );
  });
  test("should turn-off-water-title's className equal to heading", () => {
    expect(
      wrapper.find("#turn-off-water-title").first().props()
    ).toHaveProperty("className", "heading");
  });
  test("should turn-off-water-title's color equal to #000", () => {
    expect(
      wrapper.find("#turn-off-water-title").first().props().style
    ).toHaveProperty("color", "#000");
  });
  test("should render turn-off-water-description", () => {
    expect(
      wrapper.find("#turn-off-water-description").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should turn-off-water-description's className equal to text", () => {
    expect(
      wrapper.find("#turn-off-water-description").first().props()
    ).toHaveProperty("className", "text");
  });
  test("should turn-off-water-'s color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#turn-off-water-description").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render turn-off-water-btn", () => {
    expect(
      wrapper.find("#turn-off-water-btn").first().isEmptyRender()
    ).toBeFalsy();
  });
});
