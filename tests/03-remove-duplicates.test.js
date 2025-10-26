const {
  removeDuplicatesBruteForce,
  removeDuplicatesBuiltIn,
  removeDuplicatesOptimized
} = require("../problems/03-remove-duplicates");

describe("Remove Duplicates from a String", () => {
  test("Brute-force removes duplicates correctly", () => {
    expect(removeDuplicatesBruteForce("aabbcc")).toBe("abc");
  });

  test("Set-based removes duplicates correctly", () => {
    expect(removeDuplicatesBuiltIn("programming")).toBe("progamin");
  });

  test("Filter-based removes duplicates correctly", () => {
    expect(removeDuplicatesOptimized("javascript")).toBe("javscript");
  });
});
