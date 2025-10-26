const {
  containsOnlyDigitsBruteForce,
  containsOnlyDigitsBuiltIn,
  containsOnlyDigitsOptimized
} = require("../problems/21-check-only-digits");

describe("Check if a String Contains Only Digits", () => {
  test("Brute-force identifies numeric string", () => {
    expect(containsOnlyDigitsBruteForce("123456")).toBe(true);
  });

  test("Built-in identifies numeric string", () => {
    expect(containsOnlyDigitsBuiltIn("987654")).toBe(true);
  });

  test("Optimized identifies numeric string", () => {
    expect(containsOnlyDigitsOptimized("2025")).toBe(true);
  });

  test("Returns false for string with letters", () => {
    expect(containsOnlyDigitsOptimized("12a45")).toBe(false);
  });

  test("Returns false for empty string", () => {
    expect(containsOnlyDigitsBuiltIn("")).toBe(false);
  });
});
