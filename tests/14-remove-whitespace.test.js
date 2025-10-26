const {
  removeWhitespaceBruteForce,
  removeWhitespaceBuiltIn,
  removeWhitespaceOptimized
} = require("../problems/14-remove-whitespace");

describe("Remove All Whitespaces from a String", () => {
  test("Brute-force removes spaces correctly", () => {
    expect(removeWhitespaceBruteForce("a b  c")).toBe("abc");
  });

  test("Regex removes spaces correctly", () => {
    expect(removeWhitespaceBuiltIn("Hello   World")).toBe("HelloWorld");
  });

  test("Trim + Split removes spaces correctly", () => {
    expect(removeWhitespaceOptimized("  Java Script  ")).toBe("JavaScript");
  });
});
