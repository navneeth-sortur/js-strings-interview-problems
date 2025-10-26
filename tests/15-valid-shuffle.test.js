const {
  isValidShuffleBuiltIn,
  isValidShuffleOptimized
} = require("../problems/15-valid-shuffle");

describe("Check if a String is a Valid Shuffle of Two Strings", () => {
  test("Sort-based detects valid shuffle correctly", () => {
    expect(isValidShuffleBuiltIn("abc", "xyz", "axbycz")).toBe(true);
  });

  test("Two-pointer detects valid shuffle correctly", () => {
    expect(isValidShuffleOptimized("hello", "world", "hweolrllod")).toBe(true);
    expect(isValidShuffleOptimized("abc", "def", "abcfed")).toBe(false);
  });
});
