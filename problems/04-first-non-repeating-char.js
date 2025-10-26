/**
 * 🧩 Problem: Find the First Non-Repeating Character
 *
 * ❓ Description:
 * Given a string, find the first character that does not repeat.
 * Example:
 * "stress" -> "t"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Check each character and see if it repeats.
 * 2️⃣ Built-in: Use indexOf() and lastIndexOf() for each character.
 * 3️⃣ Optimized: Use a frequency map to count characters first, then find the first with count 1.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n²)
 * Built-in: O(n²)
 * Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(1)
 * Built-in: O(1)
 * Optimized: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const firstNonRepeatingBruteForce = str => {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count === 1) return str[i];
  }
  return null;
};

// ✅ 2️⃣ Built-in Approach (indexOf + lastIndexOf)
const firstNonRepeatingBuiltIn = str => {
  for (const ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
};

// ✅ 3️⃣ Optimized Approach (using frequency map)
const firstNonRepeatingOptimized = str => {
  const freq = new Map();

  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (const ch of str) {
    if (freq.get(ch) === 1) return ch;
  }

  return null;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${firstNonRepeatingBruteForce("stress")}`); // "t"
// console.log(`Built-in: ${firstNonRepeatingBuiltIn("aabbcdd")}`); // "c"
// console.log(`Optimized: ${firstNonRepeatingOptimized("racecars")}`); // "e"

module.exports = {
  firstNonRepeatingBruteForce,
  firstNonRepeatingBuiltIn,
  firstNonRepeatingOptimized
};
