/**
 * 🧩 Problem: Reverse a String
 *
 * ❓ Description:
 * Given a string, return its reverse.
 * Example: "hello" -> "olleh"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Build reversed string manually using a loop.
 * 2️⃣ Built-in Methods: Use split(), reverse(), join().
 * 3️⃣ In-place Array Swap: Convert string to array, swap characters.
 *
 * 🕒 Time Complexity:
 * All Approaches: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(n)
 * Built-in: O(n)
 * In-place (Array): O(n)
 */

// ✅ 1️⃣ Brute-force Approach (no built-ins)
const reverseStringBruteForce = str => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// ✅ 2️⃣ Optimized Approach (using built-ins)
const reverseStringBuiltIn = str => str.split("").reverse().join("");

// ✅ 3️⃣ In-place Array Swap Approach
const reverseStringInPlace = str => {
  const arr = [...str];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${reverseStringBruteForce("hello")}`); // "olleh"
// console.log(`Built-in: ${reverseStringBuiltIn("world")}`); // "dlrow"
// console.log(`In-place Swap: ${reverseStringInPlace("JavaScript")}`); // "tpircSavaJ"

module.exports = {
  reverseStringBruteForce,
  reverseStringBuiltIn,
  reverseStringInPlace
};
