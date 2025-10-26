const {
  removeCharBruteForce,
  removeCharBuiltIn,
  removeCharOptimized
} = require("../problems/23-remove-given-character");

describe("Remove a Given Character from a String", () => {
  test("Brute-force removes character correctly", () => {
    expect(removeCharBruteForce("hello world", "l")).toBe("heo word");
  });

  test("Built-in removes character correctly", () => {
    expect(removeCharBuiltIn("banana", "a")).toBe("bnn");
  });

  test("Optimized removes character correctly", () => {
    expect(removeCharOptimized("JavaScript", "J")).toBe("avaScript");
  });

  test("Handles character not present", () => {
    expect(removeCharBuiltIn("abc", "x")).toBe("abc");
  });

  test("Removes all occurrences", () => {
    expect(removeCharOptimized("aaaa", "a")).toBe("");
  });
});
