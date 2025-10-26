/**
 * 🧩 Problem: Count the Occurrences of Each Character
 *
 * ❓ Description:
 * Given a string, count how many times each character appears.
 * Example:
 * "apple" -> { a:1, p:2, l:1, e:1 }
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Use nested loops to count each character.
 * 2️⃣ Built-in: Use reduce() on a split array.
 * 3️⃣ Optimized: Use a single-pass frequency map.
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

// ✅ 1️⃣ Brute-force Approach
const countCharOccurrencesBruteForce = str => {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    result[str[i]] = count;
  }
  return result;
};

// ✅ 2️⃣ Built-in Approach (using reduce)
const countCharOccurrencesBuiltIn = str =>
  str.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

// ✅ 3️⃣ Optimized Approach (using Map)
const countCharOccurrencesOptimized = str => {
  const freq = new Map();

  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Convert to plain object for display
  return Object.fromEntries(freq);
};

// 🔍 Example Test Cases
// console.log("Brute-force:", countCharOccurrencesBruteForce("mangoes")); // { m: 1, a: 1, n: 1, g: 1, o: 1, e: 1, s: 1 }
// console.log("Built-in:", countCharOccurrencesBuiltIn("banana")); // { b:1, a:3, n:2 }
// console.log("Optimized:", countCharOccurrencesOptimized("apple")); // { a:1, p:2, l:1, e:1 }

module.exports = {
  countCharOccurrencesBruteForce,
  countCharOccurrencesBuiltIn,
  countCharOccurrencesOptimized
};
