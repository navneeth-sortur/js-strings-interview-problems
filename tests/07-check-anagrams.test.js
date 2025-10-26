const {
  areAnagramsBruteForce,
  areAnagramsBuiltIn,
  areAnagramsOptimized
} = require("../problems/07-check-anagrams");

describe("Check if Two Strings are Anagrams", () => {
  test("Brute-force detects anagrams correctly", () => {
    expect(areAnagramsBruteForce("listen", "silent")).toBe(true);
    expect(areAnagramsBruteForce("hello", "world")).toBe(false);
  });

  test("Sort-based detects anagrams correctly", () => {
    expect(areAnagramsBuiltIn("evil", "vile")).toBe(true);
  });

  test("Frequency-based detects anagrams correctly", () => {
    expect(areAnagramsOptimized("rail safety", "fairy tales")).toBe(true);
    expect(areAnagramsOptimized("node", "deno")).toBe(true);
  });
});
