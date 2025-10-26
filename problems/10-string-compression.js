/**
 * 🧩 Problem: Compress a String (Run-Length Encoding)
 *
 * ❓ Description:
 * Compress the string by replacing sequences of the same character with the character followed by the count.
 * Example:
 * "aaabbccccd" -> "a3b2c4d1"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Use a loop and manually count consecutive characters.
 * 2️⃣ Optimized: Two-pointer technique to compress efficiently.
 *
 * 🕒 Time Complexity:
 * Both Approaches: O(n)
 *
 * 💾 Space Complexity:
 * Both Approaches: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const compressStringBruteForce = str => {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }

  return compressed;
};

// ✅ 2️⃣ Optimized (Two-pointer)
const compressStringOptimized = str => {
  if (!str) return "";
  const result = [];
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else {
      result.push(str[i - 1] + count);
      count = 1;
    }
  }

  return result.join("");
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${compressStringBruteForce("aaabbccccd")}`); // "a3b2c4d1"
// console.log(`Optimized: ${compressStringOptimized("aabccc")}`); // "a2b1c3"

module.exports = {
  compressStringBruteForce,
  compressStringOptimized
};
