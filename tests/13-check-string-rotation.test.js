const {
  isRotationBruteForce,
  isRotationBuiltIn,
  isRotationOptimized
} = require("../problems/13-check-string-rotation");

describe("Check if a String is a Rotation of Another String", () => {
  test("Brute-force detects rotation correctly", () => {
    expect(isRotationBruteForce("waterbottle", "erbottlewat")).toBe(true);
    expect(isRotationBruteForce("hello", "llohe")).toBe(true);
    expect(isRotationBruteForce("abc", "cab")).toBe(true);
  });

  test("Built-in detects rotation correctly", () => {
    expect(isRotationBuiltIn("abcd", "cdab")).toBe(true);
    expect(isRotationBuiltIn("abcd", "acbd")).toBe(false);
  });

  test("Optimized detects rotation correctly", () => {
    expect(isRotationOptimized("rotation", "tionrota")).toBe(true);
  });
});
