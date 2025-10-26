/**
 * 🧩 Problem: Find the Longest Substring Without Repeating Characters
 *
 * ❓ Description:
 * Given a string, find the length of the longest substring without repeating characters.
 * Example:
 * "abcabcbb" -> 3 ("abc")
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Generate all substrings and check uniqueness.
 * 2️⃣ Optimized: Sliding window technique with a Set or Map.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n³)
 * Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(n)
 * Optimized: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const longestUniqueSubstringBruteForce = str => {
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substring = str.slice(i, j + 1);
      const set = new Set(substring);
      if (set.size === substring.length) {
        maxLen = Math.max(maxLen, substring.length);
      }
    }
  }

  return maxLen;
};

// ✅ 2️⃣ Optimized Approach (Sliding Window + Map)
const longestUniqueSubstringOptimized = str => {
  let left = 0,
    maxLen = 0;
  const seen = new Map();

  for (let right = 0; right < str.length; right++) {
    const ch = str[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1;
    }
    seen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${longestUniqueSubstringBruteForce("abcabcbb")}`); // 3
// console.log(`Optimized: ${longestUniqueSubstringOptimized("pwwkew")}`); // 3
// console.log(`Optimized: ${longestUniqueSubstringOptimized("abcdeabcbb")}`); // 5

module.exports = {
  longestUniqueSubstringBruteForce,
  longestUniqueSubstringOptimized
};
