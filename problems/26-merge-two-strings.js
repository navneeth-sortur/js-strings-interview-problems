/**
 * 🧩 Problem: Merge Two Strings Alternately
 *
 * ❓ Description:
 * Write a function that takes two strings and merges them alternately:
 * the first character from the first string, followed by the first character
 * from the second string, and so on until both strings are fully merged.
 *
 * Example:
 * str1 = "javascript"
 * str2 = "programming"
 * Output → "jparvoagsrcarmimpitng"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Use a loop and manual concatenation.
 * 2️⃣ Built-in: Use spread syntax and map to merge characters cleanly.
 * 3️⃣ Optimized: Use while loop and direct index tracking for efficiency.
 *
 * 🕒 Time Complexity:
 * All Approaches → O(n), where n = max(str1.length, str2.length)
 *
 * 💾 Space Complexity:
 * All Approaches → O(n)
 */

// ✅ 1️⃣ Brute-force Approach (manual loop)
const mergeStringsBruteForce = (str1, str2) => {
  let merged = "";
  const maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (str1[i]) merged += str1[i];
    if (str2[i]) merged += str2[i];
  }

  return merged;
};

// ✅ 2️⃣ Built-in Approach (using spread and map)
const mergeStringsBuiltIn = (str1, str2) => {
  const arr1 = [...str1];
  const arr2 = [...str2];
  const maxLength = Math.max(arr1.length, arr2.length);

  return Array.from(
    { length: maxLength },
    (_, i) => (arr1[i] || "") + (arr2[i] || "")
  ).join("");
};

// ✅ 3️⃣ Optimized Approach (two-pointer style)
const mergeStringsOptimized = (str1, str2) => {
  let merged = "";
  let i = 0,
    j = 0;

  while (i < str1.length || j < str2.length) {
    if (i < str1.length) merged += str1[i++];
    if (j < str2.length) merged += str2[j++];
  }

  return merged;
};

// 🔍 Example Test Cases
// console.log(mergeStringsBruteForce("javascript", "programming")); // jparvoagsrcarmimpitng
// console.log(mergeStringsBuiltIn("abc", "xyz")); // axbycz
// console.log(mergeStringsOptimized("hello", "world")); // hweolrllod

module.exports = {
  mergeStringsBruteForce,
  mergeStringsBuiltIn,
  mergeStringsOptimized
};
