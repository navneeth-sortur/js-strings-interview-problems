const {
  compressStringBruteForce,
  compressStringOptimized
} = require("../problems/10-string-compression");

describe("Compress a String (Run-Length Encoding)", () => {
  test("Brute-force compresses correctly", () => {
    expect(compressStringBruteForce("aaabb")).toBe("a3b2");
  });

  test("Optimized compresses correctly", () => {
    expect(compressStringOptimized("abcd")).toBe("a1b1c1d1");
    expect(compressStringOptimized("aaab")).toBe("a3b1");
  });
});
