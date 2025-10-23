/**
 * 🧩 Problem: Check if a String Contains Only Digits
 *
 * ❓ Description:
 * Determine if a string contains only numeric digits (0–9).
 * Example:
 * "12345" → true
 * "12a45" → false
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Check each character using a loop.
 * 2️⃣ Built-in: Use regex to test pattern.
 * 3️⃣ Optimized: Use Number coercion and validation.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

// ✅ 1️⃣ Brute-force Approach
const containsOnlyDigitsBruteForce = str => {
  for (const ch of str) {
    if (ch < "0" || ch > "9") return false;
  }
  return true;
};

// ✅ 2️⃣ Built-in (Regex) Approach
const containsOnlyDigitsBuiltIn = str => /^\d+$/.test(str);

// ✅ 3️⃣ Optimized (Number Validation)
const containsOnlyDigitsOptimized = str =>
  str.trim() !== "" && !isNaN(str) && !str.includes(" ");

// 🔍 Example Test Cases
console.log(containsOnlyDigitsBruteForce("12345")); // true
console.log(containsOnlyDigitsBuiltIn("12a45")); // false
console.log(containsOnlyDigitsOptimized("00123")); // true
console.log(containsOnlyDigitsOptimized("12 45")); // false
