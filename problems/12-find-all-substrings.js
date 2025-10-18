/**
 * 🧩 Problem: Find All Substrings of a Given String
 *
 * ❓ Description:
 * Given a string, return all possible substrings.
 * Example:
 * "abc" → ["a", "ab", "abc", "b", "bc", "c"]
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Generate all substrings using nested loops.
 * 2️⃣ Optimized: Collect substrings efficiently using array operations.
 *
 * 🕒 Time Complexity:
 * Both Approaches: O(n²)
 *
 * 💾 Space Complexity:
 * Both Approaches: O(n²)
 */

// ✅ 1️⃣ Brute-force Approach
const findAllSubstringsBruteForce = str => {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      substrings.push(temp);
    }
  }
  return substrings;
};

// ✅ 2️⃣ Optimized Approach (minimal extra operations)
const findAllSubstringsOptimized = str => {
  const res = [];
  const chars = [...str];
  chars.forEach((_, i) => {
    for (let j = i + 1; j <= chars.length; j++)
      res.push(chars.slice(i, j).join(""));
  });
  return res;
};

// 🔍 Example Test Cases
console.log(findAllSubstringsBruteForce("abc")); // ["a","ab","abc","b","bc","c"]
console.log(findAllSubstringsOptimized("abcd")); // ["a",    "ab", "abc", "abcd", "b",  "bc", "bcd",  "c",  "cd", "d"]
