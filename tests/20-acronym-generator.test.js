const {
  generateAcronymBruteForce,
  generateAcronymBuiltIn,
  generateAcronymOptimized
} = require("../problems/20-acronym-generator");

describe("Convert a Sentence into an Acronym", () => {
  test("Brute-force generates correct acronym", () => {
    expect(generateAcronymBruteForce("Portable Network Graphics")).toBe("PNG");
  });

  test("Built-in generates correct acronym", () => {
    expect(generateAcronymBuiltIn("First In First Out")).toBe("FIFO");
  });

  test("Regex generates correct acronym", () => {
    expect(generateAcronymOptimized("As Soon As Possible")).toBe("ASAP");
  });
});
