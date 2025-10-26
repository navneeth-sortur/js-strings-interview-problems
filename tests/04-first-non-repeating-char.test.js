const {
  firstNonRepeatingBruteForce,
  firstNonRepeatingOptimized,
  firstNonRepeatingBuiltIn
} = require("../problems/04-first-non-repeating-char");

describe("Find First Non-Repeating Character", () => {
  test("Brute-force finds correct character", () => {
    expect(firstNonRepeatingBruteForce("swiss")).toBe("w");
    expect(firstNonRepeatingBruteForce("aabb")).toBe(null);
  });

  test("Map-based approach finds correct character", () => {
    expect(firstNonRepeatingOptimized("success")).toBe("u");
  });

  test("IndexOf approach works correctly", () => {
    expect(firstNonRepeatingBuiltIn("redivider")).toBe("v");
  });
});
