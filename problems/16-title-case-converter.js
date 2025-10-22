/**
 * 🧩 Problem: Convert a String to Title Case
 *
 * ❓ Description:
 * Convert each word’s first character to uppercase and the rest to lowercase.
 * Example:
 * "hello world with js" → "Hello World With Js"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Split string manually and transform.
 * 2️⃣ Built-in: Use map() and slice().
 * 3️⃣ Optimized: Use regex replacement.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const toTitleCaseBruteForce = str => {
  const words = str.split(" ");
  const result = [];
  for (let word of words) {
    if (word.length > 0)
      result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return result.join(" ");
};

// ✅ 2️⃣ Built-in Approach
const toTitleCaseBuiltIn = str =>
  str
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

// ✅ 3️⃣ Optimized (Regex-based)
const toTitleCaseOptimized = str =>
  str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

// 🔍 Example Test Cases
console.log(toTitleCaseBruteForce("hello world with js")); // "Hello World With Js"
console.log(toTitleCaseBuiltIn("JAVA script LANGUAGE")); // "Java Script Language"
console.log(toTitleCaseOptimized("good morning!")); // "Good Morning!"
