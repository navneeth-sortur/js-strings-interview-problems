const {
  stringToIntegerBruteForce,
  stringToIntegerBuiltIn,
  stringToIntegerOptimized
} = require("../problems/09-string-to-integer");

describe("Convert String to Integer (atoi Implementation)", () => {
  test("Brute-force converts correctly", () => {
    expect(stringToIntegerBruteForce("123")).toBe(123);
    expect(stringToIntegerBruteForce("-42")).toBe(-42);
  });

  test("Built-in converts correctly", () => {
    expect(stringToIntegerBuiltIn("567")).toBe(567);
    expect(stringToIntegerBuiltIn("0")).toBe(0);
  });

  test("Optimized converts correctly with spaces", () => {
    expect(stringToIntegerOptimized("   -42")).toBe(-42);
    expect(stringToIntegerOptimized("4193 with words")).toBe(4193);
  });
});
