/**
 * 🧩 Problem: Convert a String to an Integer (atoi Implementation)
 *
 * ❓ Description:
 * Implement the `atoi` function that converts a string to an integer.
 * Ignore leading spaces, handle optional '+' or '-' signs, and stop at first non-digit character.
 *
 * Example:
 * "42" -> 42
 * "   -42" -> -42
 * "4193 with words" -> 4193
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Iterate and build the number manually using character codes.
 * 2️⃣ Built-in: Use parseInt() or Number().
 * 3️⃣ Optimized: Manual implementation with full control (like real `atoi`).
 *
 * 🕒 Time Complexity:
 * All Approaches: O(n)
 *
 * 💾 Space Complexity:
 * All Approaches: O(1)
 */

// ✅ 1️⃣ Brute-force (Manual conversion without built-ins)
const stringToIntegerBruteForce = str => {
  str = str.trim();
  if (!str) return 0;

  let sign = 1;
  let num = 0;
  let i = 0;

  if (str[0] === "-" || str[0] === "+") {
    sign = str[0] === "-" ? -1 : 1;
    i++;
  }

  for (; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code < 48 || code > 57) break; // non-digit
    num = num * 10 + (code - 48);
  }

  return sign * num;
};

// ✅ 2️⃣ Built-in Approach
const stringToIntegerBuiltIn = str => parseInt(str.trim(), 10) || 0;

// ✅ 3️⃣ Optimized (Handles edge cases gracefully)
const stringToIntegerOptimized = str => {
  str = str.trim();
  const match = str.match(/^([+-]?\d+)/);
  return match ? Number(match[1]) : 0;
};

// 🔍 Example Test Cases
console.log(`Brute-force: ${stringToIntegerBruteForce("42")}`); // 42
console.log(`Brute-force: ${stringToIntegerBruteForce("   -42")}`); // -42
console.log(`Built-in: ${stringToIntegerBuiltIn("4193 with words")}`); // 4193
console.log(`Optimized: ${stringToIntegerOptimized("words and 987")}`); // 0
