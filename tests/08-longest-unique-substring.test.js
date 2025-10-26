const {
  longestUniqueSubstringBruteForce,
  longestUniqueSubstringOptimized
} = require("../problems/08-longest-unique-substring");

describe("Find Longest Substring Without Repeating Characters", () => {
  test("Brute-force finds correct length", () => {
    expect(longestUniqueSubstringBruteForce("abcabcbb")).toBe(3);
  });

  test("Optimized method finds correct length", () => {
    expect(longestUniqueSubstringOptimized("pwwkew")).toBe(3);
    expect(longestUniqueSubstringOptimized("")).toBe(0);
  });
});
