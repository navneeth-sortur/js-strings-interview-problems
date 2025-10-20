/**
 * 🧩 Problem: Check if a String is a Rotation of Another String
 *
 * ❓ Description:
 * Given two strings, check if one is a rotation of the other.
 * Example:
 * "waterbottle" and "erbottlewat" → true
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Try all rotations manually.
 * 2️⃣ Built-in: Check if str2 is a substring of str1 + str1.
 * 3️⃣ Optimized: Early length check + substring method.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n²)
 * Built-in & Optimized: O(n)
 *
 * 💾 Space Complexity:
 * All Approaches: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const isRotationBruteForce = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    const rotated = str1.slice(i) + str1.slice(0, i);
    if (rotated === str2) return true;
  }
  return false;
};

// ✅ 2️⃣ Built-in Approach
const isRotationBuiltIn = (str1, str2) =>
  str1.length === str2.length && (str1 + str1).includes(str2);

// ✅ 3️⃣ Optimized Approach
const isRotationOptimized = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).indexOf(str2) !== -1;
};

// 🔍 Example Test Cases
console.log(
  `Brute-force: ${isRotationBruteForce("waterbottle", "erbottlewat")}`
); // true
console.log(`Built-in: ${isRotationBuiltIn("abcde", "deabc")}`); // true
console.log(`Optimized: ${isRotationOptimized("hello", "llohe")}`); // true
console.log(`Optimized: ${isRotationOptimized("abc", "cabx")}`); // false
