const {
  findShortestWordBruteForce,
  findShortestWordBuiltIn,
  findShortestWordOptimized
} = require("../problems/24-find-shortest-word");

describe("Find the Shortest Word in a String", () => {
  test("Brute-force finds shortest word", () => {
    expect(findShortestWordBruteForce("The quick brown fox")).toBe("The");
  });

  test("Built-in finds shortest word", () => {
    expect(findShortestWordBuiltIn("dog cat hat")).toBe("dog");
  });

  test("Optimized finds shortest word", () => {
    expect(findShortestWordOptimized("one two three")).toBe("one");
  });

  test("Handles single word", () => {
    expect(findShortestWordBuiltIn("Hello")).toBe("Hello");
  });

  test("Handles multiple spaces", () => {
    expect(findShortestWordOptimized("  one   two  three  ")).toBe("one");
  });
});
