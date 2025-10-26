/**
 * 🧩 Problem: Remove Duplicates from a String
 *
 * ❓ Description:
 * Given a string, remove all duplicate characters and return the result.
 * Example:
 * "programming" -> "progamin"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Build a new string and check manually if each char already exists.
 * 2️⃣ Built-in: Use Set to automatically remove duplicates.
 * 3️⃣ Optimized: Use a frequency map to track seen characters efficiently.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n²)
 * Built-in: O(n)
 * Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(n)
 * Built-in: O(n)
 * Optimized: O(n)
 */

// ✅ 1️⃣ Brute-force Approach (no built-ins)
const removeDuplicatesBruteForce = str => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) result += str[i];
  }
  return result;
};

// ✅ 2️⃣ Built-in Approach (using Set)
const removeDuplicatesBuiltIn = str => [...new Set(str)].join("");

// ✅ 3️⃣ Optimized Approach (using Map)
const removeDuplicatesOptimized = str => {
  const seen = new Map();
  let result = "";

  for (const ch of str) {
    if (!seen.has(ch)) {
      seen.set(ch, true);
      result += ch;
    }
  }

  return result;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${removeDuplicatesBruteForce("programming")}`); // "progamin"
// console.log(`Built-in: ${removeDuplicatesBuiltIn("language")}`); // "langue"
// console.log(`Optimized: ${removeDuplicatesOptimized("hello")}`); // "helo"

module.exports = {
  removeDuplicatesBruteForce,
  removeDuplicatesBuiltIn,
  removeDuplicatesOptimized
};
