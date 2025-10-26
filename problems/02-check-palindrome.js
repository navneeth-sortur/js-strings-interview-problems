/**
 * 🧩 Problem: Check if a String is a Palindrome
 *
 * ❓ Description:
 * A palindrome is a string that reads the same forward and backward.
 * Example:
 * "madam" -> true
 * "hello" -> false
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Manually reverse the string and compare.
 * 2️⃣ Built-in Methods: Use split(), reverse(), join(), and compare.
 * 3️⃣ Two-Pointer (Optimized): Compare characters from both ends without reversing.
 *
 * 🕒 Time Complexity:
 * All Approaches: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(n)
 * Built-in: O(n)
 * Two-Pointer: O(1)
 */

// ✅ 1️⃣ Brute-force Approach (no built-ins)
const isPalindromeBruteForce = str => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
};

// ✅ 2️⃣ Built-in Methods Approach
const isPalindromeBuiltIn = str => str === str.split("").reverse().join("");

// ✅ 3️⃣ Optimized Two-Pointer Approach
const isPalindromeTwoPointer = str => {
  const cleanStr = [...str];
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }

  return true;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${isPalindromeBruteForce("madam")}`); // true
// console.log(`Built-in: ${isPalindromeBuiltIn("racecar")}`); // true
// console.log(`Two-pointer: ${isPalindromeTwoPointer("level")}`); // true
// console.log(`Not a palindrome: ${isPalindromeTwoPointer("hello")}`); // false

module.exports = {
  isPalindromeBruteForce,
  isPalindromeBuiltIn,
  isPalindromeTwoPointer
};
