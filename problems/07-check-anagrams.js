/**
 * 🧩 Problem: Check if Two Strings are Anagrams
 *
 * ❓ Description:
 * Two strings are anagrams if they contain the same characters in any order.
 * Example:
 * "listen" and "silent" -> true
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Generate all permutations and check equality (inefficient).
 * 2️⃣ Built-in: Sort both strings and compare.
 * 3️⃣ Optimized: Count character frequency and compare maps.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n!)
 * Built-in: O(n log n)
 * Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(n)
 * Built-in: O(n)
 * Optimized: O(1) or O(n)
 */

// ✅ 1️⃣ Brute-force Approach (for concept, not practical)
const areAnagramsBruteForce = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const permute = s => {
    if (s.length <= 1) return [s];
    const result = [];
    for (let i = 0; i < s.length; i++) {
      const rest = s.slice(0, i) + s.slice(i + 1);
      for (const sub of permute(rest)) {
        result.push(s[i] + sub);
      }
    }
    return result;
  };

  return permute(str1).includes(str2);
};

// ✅ 2️⃣ Built-in Approach (Sorting)
const areAnagramsBuiltIn = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

// ✅ 3️⃣ Optimized Approach (Character Frequency Map)
const areAnagramsOptimized = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const freq = {};

  for (const ch of str1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of str2) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${areAnagramsBruteForce("ab", "ba")}`); // true
// console.log(`Built-in: ${areAnagramsBuiltIn("listen", "silent")}`); // true
// console.log(`Optimized: ${areAnagramsOptimized("triangle", "integral")}`); // true
// console.log(`Optimized: ${areAnagramsOptimized("apple", "papel")}`); // true
// console.log(`Optimized: ${areAnagramsOptimized("rat", "car")}`); // false

module.exports = {
  areAnagramsBruteForce,
  areAnagramsBuiltIn,
  areAnagramsOptimized
};
