const {
  isPalindromeBruteForce,
  isPalindromeTwoPointer,
  isPalindromeBuiltIn
} = require("../problems/02-check-palindrome.js");

describe("Check if a String is Palindrome", () => {
  test("Brute-force detects palindrome correctly", () => {
    expect(isPalindromeBruteForce("madam")).toBe(true);
    expect(isPalindromeBruteForce("hello")).toBe(false);
  });

  test("Two-pointer approach works correctly", () => {
    expect(isPalindromeTwoPointer("racecar")).toBe(true);
    expect(isPalindromeTwoPointer("javascript")).toBe(false);
  });

  test("Built-in approach works correctly", () => {
    expect(isPalindromeBuiltIn("level")).toBe(true);
    expect(isPalindromeBuiltIn("test")).toBe(false);
  });
});
