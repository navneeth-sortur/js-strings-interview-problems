const {
  reverseWordsBruteForce,
  reverseWordsBuiltIn,
  reverseWordsOptimized
} = require("../problems/06-reverse-words-in-sentence");

describe("Reverse Words in a Sentence", () => {
  test("Brute-force reverses words correctly", () => {
    expect(reverseWordsBruteForce("Hello World")).toBe("World Hello");
  });

  test("Built-in reverses words correctly", () => {
    expect(reverseWordsBuiltIn("JavaScript is awesome")).toBe(
      "awesome is JavaScript"
    );
  });

  test("In-place reverses words correctly", () => {
    expect(reverseWordsOptimized("Frontend Developer Rocks")).toBe(
      "Rocks Developer Frontend"
    );
  });
});
