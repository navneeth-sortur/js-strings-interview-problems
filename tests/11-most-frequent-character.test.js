const {
  mostFrequentCharBruteForce,
  mostFrequentCharOptimized,
  mostFrequentCharBuiltIn
} = require("../problems/11-most-frequent-character");

describe("Find the Most Frequent Character", () => {
  test("Brute-force finds correct character", () => {
    expect(mostFrequentCharBruteForce("banana")).toBe("a");
  });

  test("Map-based finds correct character", () => {
    expect(mostFrequentCharOptimized("javascript")).toBe("a");
  });

  test("Reduce-based finds correct character", () => {
    expect(mostFrequentCharBuiltIn("aabbccddddd")).toBe("d");
  });
});
