import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../bll/store";
import { VerticalPlace } from "./VerticalPlace";

describe("Test VerticalPlace component", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
  let wrapper = mount(
    <Provider store={store}>
      <VerticalPlace
        id={1}
        coordinates={[60, 30]}
        distance={135}
        title="glacier"
        pathToPhoto="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
      />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <VerticalPlace
          id={1}
          coordinates={[60, 30]}
          distance={135}
          title="glacier"
          pathToPhoto="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
        />
      </Provider>
    );
  });
  test("should render vp-1", () => {
    expect(wrapper.find("#vp-1").first().isEmptyRender()).toBeFalsy();
  });
  test("should render header", () => {
    expect(wrapper.find("#vp-1-header").first().isEmptyRender()).toBeFalsy();
  });
  test("should header's text equal to gacier", () => {
    expect(wrapper.find("#vp-1-header").first().text()).toBe("glacier");
  });
  test("should render image", () => {
    expect(wrapper.find("#vp-1-img").first().isEmptyRender()).toBeFalsy();
  });
  test("should render distance", () => {
    expect(wrapper.find("#vp-1-distance").first().isEmptyRender()).toBeFalsy();
  });
  test("should render btn", () => {
    expect(wrapper.find("#vp-1-btn").first().isEmptyRender()).toBeFalsy();
  });
});
