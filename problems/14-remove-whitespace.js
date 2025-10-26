/**
 * 🧩 Problem: Remove All White Spaces from a String
 *
 * ❓ Description:
 * Remove all spaces, tabs, and line breaks from a string.
 * Example:
 * "  Hello  World " → "HelloWorld"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Manually build string excluding spaces.
 * 2️⃣ Built-in: Use replace() with regex.
 * 3️⃣ Optimized: Use filter() with spread operator.
 *
 * 🕒 Time Complexity:
 * All Approaches: O(n)
 *
 * 💾 Space Complexity:
 * All Approaches: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const removeWhitespaceBruteForce = str => {
  let result = "";
  for (const ch of str) {
    if (ch !== " " && ch !== "\n" && ch !== "\t") {
      result += ch;
    }
  }
  return result;
};

// ✅ 2️⃣ Built-in Approach (Regex)
const removeWhitespaceBuiltIn = str => str.replace(/\s+/g, "");

// ✅ 3️⃣ Optimized Approach (Functional)
const removeWhitespaceOptimized = str =>
  [...str].filter(ch => ch.trim() !== "").join("");

// 🔍 Example Test Cases
// console.log(`Brute-force: "${removeWhitespaceBruteForce("  Hello World  ")}"`); // "HelloWorld"
// console.log(`Built-in: "${removeWhitespaceBuiltIn("Hi \t there\n friend")}"`); // "Hitherefriend"
// console.log(`Optimized: "${removeWhitespaceOptimized("  JS Rocks  ")}"`); // "JSRocks"

module.exports = {
  removeWhitespaceBruteForce,
  removeWhitespaceBuiltIn,
  removeWhitespaceOptimized
};
