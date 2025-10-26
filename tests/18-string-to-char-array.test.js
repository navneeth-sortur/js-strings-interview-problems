const {
  stringToCharArrayBruteForce,
  stringToCharArrayBuiltIn,
  stringToCharArrayOptimized
} = require("../problems/18-string-to-char-array");

describe("Convert a String to a Character Array", () => {
  test("Brute-force converts correctly", () => {
    expect(stringToCharArrayBruteForce("abc")).toEqual(["a", "b", "c"]);
  });

  test("Spread syntax converts correctly", () => {
    expect(stringToCharArrayOptimized("hello")).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o"
    ]);
  });

  test("Built-in split converts correctly", () => {
    expect(stringToCharArrayBuiltIn("test")).toEqual(["t", "e", "s", "t"]);
  });
});
