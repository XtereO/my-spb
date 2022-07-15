import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../bll/store";
import { Fact } from "./Fact";

describe("Test FactBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <Fact onClick={jest.fn} />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Fact onClick={jest.fn} />
      </Provider>
    );
  });
  test("should render fact", () => {
    expect(wrapper.find("#fact").first().isEmptyRender()).toBeFalsy();
  });
  test("should render fact-header", () => {
    expect(wrapper.find("#fact-header").first().isEmptyRender()).toBeFalsy();
  });
  test("should render fact-date", () => {
    expect(wrapper.find("#fact-date").first().isEmptyRender()).toBeFalsy();
  });
  test("should fact-date's className equal to heading-small", () => {
    expect(wrapper.find("#fact-date").first().props()).toHaveProperty(
      "className",
      "heading-small"
    );
  });
  test("should fact-date's color equal to #000", () => {
    expect(wrapper.find("#fact-date").first().props().style).toHaveProperty(
      "color",
      "#000"
    );
  });
  test("should render fact-description", () => {
    expect(
      wrapper.find("#fact-description").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should fact-description's className equal to text", () => {
    expect(wrapper.find("#fact-description").first().props()).toHaveProperty(
      "className",
      "text"
    );
  });
  test("should fact-description's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#fact-description").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render fact-btn", () => {
    expect(wrapper.find("#fact-btn").first().isEmptyRender()).toBeFalsy();
  });
});
