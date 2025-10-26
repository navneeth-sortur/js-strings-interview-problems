const {
  countWordsBruteForce,
  countWordsBuiltIn,
  countWordsOptimized
} = require("../problems/22-count-words-in-string");

describe("Find the Number of Words in a String", () => {
  test("Brute-force counts words correctly", () => {
    expect(countWordsBruteForce("Hello world this is JS")).toBe(5);
  });

  test("Built-in counts words correctly", () => {
    expect(countWordsBuiltIn("The quick brown fox")).toBe(4);
  });

  test("Optimized counts words correctly", () => {
    expect(countWordsOptimized("Count these words please")).toBe(4);
  });

  test("Handles extra spaces", () => {
    expect(countWordsOptimized("  Hello   world  ")).toBe(2);
  });

  test("Returns 0 for empty string", () => {
    expect(countWordsBruteForce("")).toBe(0);
  });
});
