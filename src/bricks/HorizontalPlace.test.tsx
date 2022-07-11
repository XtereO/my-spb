import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { HorizontalPlace } from "./HorizontalPlace";

describe("Test HorizontalPlace component", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
  let wrapper = mount(
    <Provider store={store}>
      <HorizontalPlace
        title={"Glacier"}
        coordinates={[60, 30]}
        pathToPhoto={
          "https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
        }
      />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <HorizontalPlace
          title={"Glacier"}
          coordinates={[60, 30]}
          pathToPhoto={
            "https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          }
        />
      </Provider>
    );
  });
  test("should render horizontal-place", () => {
    expect(
      wrapper.find("#horizontal-place").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render horizontal-place-img", () => {
    expect(
      wrapper.find("#horizontal-place-img").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should horizontal-place-img's borderRadius equal to 21", () => {
    expect(
      wrapper.find("#horizontal-place-img").first().props().style
    ).toHaveProperty("borderRadius", 21);
  });
  test("should horizontal-place-img's width equal to 107.77", () => {
    expect(
      wrapper.find("#horizontal-place-img").first().props().style
    ).toHaveProperty("width", 107.77);
  });
  test("should horizontal-place-img's height equal to 81", () => {
    expect(
      wrapper.find("#horizontal-place-img").first().props().style
    ).toHaveProperty("height", 81);
  });
  test("should render horizontal-place-title", () => {
    expect(
      wrapper.find("#horizontal-place-title").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should horizontal-place-title's equal to Glacier", () => {
    expect(wrapper.find("#horizontal-place-title").first().text()).toEqual(
      "Glacier"
    );
  });
  test("should horizontal-place-title's fontSize equal to 12", () => {
    expect(
      wrapper.find("#horizontal-place-title").first().props().style
    ).toHaveProperty("fontSize", 12);
  });
  test("should horizontal-place-title's color equal to #000", () => {
    expect(
      wrapper.find("#horizontal-place-title").first().props().style
    ).toHaveProperty("color", "#000");
  });
});
