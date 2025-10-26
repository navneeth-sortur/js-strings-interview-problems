const {
  reverseStringBruteForce,
  reverseStringBuiltIn,
  reverseStringInPlace
} = require("../problems/01-reverse-string.js");

describe("Reverse a String", () => {
  test("Brute-force reverses string correctly", () => {
    expect(reverseStringBruteForce("hello")).toBe("olleh");
    expect(reverseStringBruteForce("")).toBe("");
  });

  test("Built-in reverses string correctly", () => {
    expect(reverseStringBuiltIn("world")).toBe("dlrow");
  });

  test("In-place reverses string correctly", () => {
    expect(reverseStringInPlace("JavaScript")).toBe("tpircSavaJ");
  });
});
