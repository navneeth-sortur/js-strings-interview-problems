/**
 * 🧩 Problem: Check if a String is a Valid Shuffle of Two Strings
 *
 * ❓ Description:
 * A string is a valid shuffle of two strings if it can be formed by interleaving the characters
 * of both strings while maintaining their original order.
 *
 * Example:
 * str1 = "abc", str2 = "def"
 * shuffle = "dabecf" → true
 *
 * 💡 Approaches:
 * 1️⃣ Built-in: Sort and compare (not order-aware).
 * 2️⃣ Optimized: Two-pointer approach maintaining character order.
 *
 * 🕒 Time Complexity:
 * Built-in: O(n log n)
 * Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Built-in: O(n)
 * Optimized: O(1)
 */

// ✅ 1️⃣ Built-in (Checks characters, ignores order)
const isValidShuffleBuiltIn = (str1, str2, result) =>
  [...result].sort().join("") === [...str1, ...str2].sort().join("");

// ✅ 2️⃣ Optimized (Two-pointer)
const isValidShuffleOptimized = (str1, str2, result) => {
  if (str1.length + str2.length !== result.length) return false;

  let i = 0,
    j = 0,
    k = 0;
  while (k < result.length) {
    if (i < str1.length && str1[i] === result[k]) i++;
    else if (j < str2.length && str2[j] === result[k]) j++;
    else return false;
    k++;
  }
  return true;
};

// 🔍 Example Test Cases
// console.log(`Built-in: ${isValidShuffleBuiltIn("abc", "def", "dabecf")}`); // true
// console.log(`Optimized: ${isValidShuffleOptimized("abc", "def", "dabecf")}`); // true
// console.log(`Optimized: ${isValidShuffleOptimized("ab", "cd", "adbcx")}`); // false

module.exports = {
  isValidShuffleBuiltIn,
  isValidShuffleOptimized
};
