/**
 * 🧩 Problem: Longest Common Prefix
 *
 * ❓ Description:
 * Find the longest common prefix among an array of strings.
 * Example:
 * ["flower", "flow", "flight"] → "fl"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Compare each character index-wise.
 * 2️⃣ Built-in: Sort array, compare first and last.
 * 3️⃣ Optimized: Binary search approach (character matching).
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n * m)
 * Built-in: O(n log n)
 * Optimized: O(n * log m)
 *
 * 💾 Space Complexity: O(1)
 */

// ✅ 1️⃣ Brute-force Approach
const longestCommonPrefixBruteForce = arr => {
  if (!arr.length) return "";
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
};

// ✅ 2️⃣ Built-in Approach
const longestCommonPrefixBuiltIn = arr => {
  if (!arr.length) return "";
  arr.sort();
  const first = arr[0],
    last = arr[arr.length - 1];
  let i = 0;
  while (i < first.length && first[i] === last[i]) i++;
  return first.slice(0, i);
};

// ✅ 3️⃣ Optimized (Binary Search)
const longestCommonPrefixOptimized = arr => {
  if (!arr.length) return "";
  const checkPrefix = len => {
    const prefix = arr[0].slice(0, len);
    return arr.every(word => word.startsWith(prefix));
  };
  let low = 0,
    high = arr[0].length;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (checkPrefix(mid)) low = mid;
    else high = mid - 1;
  }
  return arr[0].slice(0, low);
};

// 🔍 Example Test Cases
// console.log(longestCommonPrefixBruteForce(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefixBuiltIn(["dog", "racecar", "car"])); // ""
// console.log(
//   longestCommonPrefixOptimized(["interview", "internet", "internal"])
// ); // "inter"

module.exports = {
  longestCommonPrefixBruteForce,
  longestCommonPrefixBuiltIn,
  longestCommonPrefixOptimized
};
