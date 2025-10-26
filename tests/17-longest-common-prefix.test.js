const {
  longestCommonPrefixBruteForce,
  longestCommonPrefixBuiltIn,
  longestCommonPrefixOptimized
} = require("../problems/17-longest-common-prefix");

describe("Find the Longest Common Prefix", () => {
  test("Brute-force finds correct prefix", () => {
    expect(longestCommonPrefixBruteForce(["flower", "flow", "flight"])).toBe(
      "fl"
    );
  });

  test("Sort-based finds correct prefix", () => {
    expect(longestCommonPrefixBuiltIn(["dog", "racecar", "car"])).toBe("");
  });

  test("Optimized finds correct prefix", () => {
    expect(
      longestCommonPrefixOptimized([
        "interspecies",
        "interstellar",
        "interstate"
      ])
    ).toBe("inters");
  });
});
