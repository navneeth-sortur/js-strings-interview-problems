const {
  findAllSubstringsBruteForce,
  findAllSubstringsOptimized
} = require("../problems/12-find-all-substrings");

describe("Find All Substrings of a Given String", () => {
  test("Brute-force finds all substrings", () => {
    expect(findAllSubstringsBruteForce("abc")).toEqual([
      "a",
      "ab",
      "abc",
      "b",
      "bc",
      "c"
    ]);
  });

  test("Optimized approach returns  all substrings", () => {
    expect(findAllSubstringsOptimized("abcd")).toEqual([
      "a",
      "ab",
      "abc",
      "abcd",
      "b",
      "bc",
      "bcd",
      "c",
      "cd",
      "d"
    ]);
  });
});
