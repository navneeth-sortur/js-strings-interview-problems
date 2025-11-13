const {
  mergeStringsBruteForce,
  mergeStringsBuiltIn,
  mergeStringsOptimized
} = require("../problems/26-merge-two-strings");

describe("Merge Two Strings Alternately", () => {
  test("Brute-force merges strings correctly", () => {
    expect(mergeStringsBruteForce("javascript", "programming")).toBe(
      "jparvoagsrcarmimpitng"
    );
  });

  test("Built-in merges strings correctly", () => {
    expect(mergeStringsBuiltIn("abc", "xyz")).toBe("axbycz");
  });

  test("Optimized merges strings correctly", () => {
    expect(mergeStringsOptimized("hello", "world")).toBe("hweolrllod");
  });

  test("Handles unequal string lengths", () => {
    expect(mergeStringsOptimized("short", "longerstring")).toBe(
      "slhoonrgterstring"
    );
  });

  test("Handles empty second string", () => {
    expect(mergeStringsBruteForce("abc", "")).toBe("abc");
  });

  test("Handles empty first string", () => {
    expect(mergeStringsBuiltIn("", "xyz")).toBe("xyz");
  });
});
