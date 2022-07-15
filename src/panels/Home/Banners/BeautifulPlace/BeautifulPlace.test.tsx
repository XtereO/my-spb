import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../bll/store";
import { BeautifulPlace } from "./BeautifulPlace";

describe("Test BeautifulPlaceBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <BeautifulPlace data={[]} onClick={jest.fn} />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BeautifulPlace data={[]} onClick={jest.fn} />
      </Provider>
    );
  });
  test("should render beautiful-place", () => {
    expect(
      wrapper.find("#beautiful-place").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render beautiful-place-header", () => {
    expect(
      wrapper.find("#beautiful-place-header").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render hoizontal-scroll", () => {
    expect(
      wrapper.find("#horizontal-scroll").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render beautiful-place-btn", () => {
    expect(
      wrapper.find("#beautiful-place-btn").first().isEmptyRender()
    ).toBeFalsy();
  });
});
