const {
  longestPalindromeBruteForce,
  longestPalindromeExpandCenter,
  longestPalindromeDP
} = require("../problems/25-longest-palindromic-substring");

describe("Find the Longest Palindromic Substring", () => {
  test("Brute-force finds palindrome correctly", () => {
    const result = longestPalindromeBruteForce("babad");
    expect(["bab", "aba"]).toContain(result);
  });

  test("Handles even-length palindrome", () => {
    expect(longestPalindromeExpandCenter("cbbd")).toBe("bb");
  });

  test("Handles single character", () => {
    expect(longestPalindromeExpandCenter("a")).toBe("a");
  });

  test("Handles identical characters", () => {
    expect(longestPalindromeExpandCenter("aaaa")).toBe("aaaa");
  });

  test("Handles empty string", () => {
    expect(longestPalindromeExpandCenter("")).toBe("");
  });

  test("Handles larger string", () => {
    expect(longestPalindromeDP("racecarbananab")).toBe("racecar");
  });
});
