import { removeHrefs } from "./removeHrefs";

describe("Test removeHrefs util", () => {
  test("should handle a 'text with <a href='link'>href</a>\\n and <a href=https://>this</a>' to equal 'text with <a>href</a> and <a>this</a>'", () => {
    expect(
      removeHrefs(
        "text with <a href='link'>href</a>\\n and <a href=https://>this</a>"
      )
    ).toEqual("text with <a>href</a> and <a>this</a>");
  });
});
