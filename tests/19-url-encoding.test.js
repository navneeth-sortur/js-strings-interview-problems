const {
  urlEncodeBruteForce,
  urlEncodeBuiltIn,
  urlEncodeOptimized
} = require("../problems/19-url-encoding");

describe("Replace Spaces with %20 (URL Encoding)", () => {
  test("Brute-force encodes correctly", () => {
    expect(urlEncodeBruteForce("Mr John Smith")).toBe("Mr%20John%20Smith");
  });

  test("Built-in encodes correctly", () => {
    expect(urlEncodeBuiltIn("Hello World")).toBe("Hello%20World");
  });

  test("Regex encodes correctly", () => {
    expect(urlEncodeOptimized("a b c")).toBe("a%20b%20c");
  });
});
