const {
  countCharOccurrencesBruteForce,
  countCharOccurrencesOptimized,
  countCharOccurrencesBuiltIn
} = require("../problems/05-count-char-occurrences");

describe("Count Occurrences of Each Character", () => {
  test("Brute-force counts correctly", () => {
    expect(countCharOccurrencesBruteForce("aabbc")).toEqual({
      a: 2,
      b: 2,
      c: 1
    });
  });

  test("Map-based counts correctly", () => {
    expect(countCharOccurrencesOptimized("hello")).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1
    });
  });

  test("Reduce-based counts correctly", () => {
    expect(countCharOccurrencesBuiltIn("test")).toEqual({ t: 2, e: 1, s: 1 });
  });
});
