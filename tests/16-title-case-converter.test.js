const {
  toTitleCaseBruteForce,
  toTitleCaseBuiltIn,
  toTitleCaseOptimized
} = require("../problems/16-title-case-converter");

describe("Convert a String to Title Case", () => {
  test("Brute-force converts correctly", () => {
    expect(toTitleCaseBruteForce("hello world")).toBe("Hello World");
  });

  test("Built-in converts correctly", () => {
    expect(toTitleCaseBuiltIn("javaScript is fun")).toBe("Javascript Is Fun");
  });

  test("Regex converts correctly", () => {
    expect(toTitleCaseOptimized("make it title case")).toBe(
      "Make It Title Case"
    );
  });
});
