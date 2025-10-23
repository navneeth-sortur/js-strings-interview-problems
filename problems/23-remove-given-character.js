/**
 * 🧩 Problem: Remove a Given Character from a String
 *
 * ❓ Description:
 * Remove all occurrences of a specified character from a string.
 * Example:
 * ("banana", "a") → "bnn"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Build a new string manually excluding the target.
 * 2️⃣ Built-in: Use split() and join().
 * 3️⃣ Optimized: Use regex replacement.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const removeCharBruteForce = (str, target) => {
  let result = "";
  for (const ch of str) {
    if (ch !== target) result += ch;
  }
  return result;
};

// ✅ 2️⃣ Built-in Approach
const removeCharBuiltIn = (str, target) => str.split(target).join("");

// ✅ 3️⃣ Optimized (Regex)
const removeCharOptimized = (str, target) =>
  str.replace(new RegExp(target, "g"), "");

// 🔍 Example Test Cases
console.log(removeCharBruteForce("banana", "a")); // "bnn"
console.log(removeCharBuiltIn("hello world", "l")); // "heo word"
console.log(removeCharOptimized("apple", "p")); // "ale"
