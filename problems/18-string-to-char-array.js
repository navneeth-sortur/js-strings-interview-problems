/**
 * 🧩 Problem: Convert a String to Character Array
 *
 * ❓ Description:
 * Convert a string into an array of characters.
 * Example:
 * "hello" → ['h','e','l','l','o']
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Use a loop to push chars.
 * 2️⃣ Built-in: Use split('') method.
 * 3️⃣ Optimized: Use spread operator.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const stringToCharArrayBruteForce = str => {
  const chars = [];
  for (let ch of str) chars.push(ch);
  return chars;
};

// ✅ 2️⃣ Built-in Approach
const stringToCharArrayBuiltIn = str => str.split("");

// ✅ 3️⃣ Optimized (Spread operator)
const stringToCharArrayOptimized = str => [...str];

// 🔍 Example Test Cases
// console.log(stringToCharArrayBruteForce("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]
// console.log(stringToCharArrayBuiltIn("JS")); // [ 'J', 'S' ]
// console.log(stringToCharArrayOptimized("Programming")); // ['P', 'r', 'o', 'g','r', 'a', 'm', 'm','i', 'n', 'g']

module.exports = {
  stringToCharArrayBruteForce,
  stringToCharArrayBuiltIn,
  stringToCharArrayOptimized
};
