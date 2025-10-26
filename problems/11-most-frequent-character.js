/**
 * 🧩 Problem: Find the Most Frequent Character
 *
 * ❓ Description:
 * Given a string, find the character that appears the most number of times.
 * Example:
 * "javascript" -> "a"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Count frequency of each char using nested loops.
 * 2️⃣ Built-in: Use reduce() and Object.entries() to find max.
 * 3️⃣ Optimized: Single-pass frequency map.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n²)
 * Built-in & Optimized: O(n)
 *
 * 💾 Space Complexity:
 * Brute-force: O(1)
 * Built-in & Optimized: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const mostFrequentCharBruteForce = str => {
  let maxCount = 0;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }

  return maxChar;
};

// ✅ 2️⃣ Built-in Approach (using reduce)
const mostFrequentCharBuiltIn = str => {
  const freq = [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(freq).reduce((a, b) => (a[1] >= b[1] ? a : b))[0];
};

// ✅ 3️⃣ Optimized Approach (Single-pass)
const mostFrequentCharOptimized = str => {
  const freq = {};
  let maxChar = "";
  let maxCount = 0;

  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      maxChar = ch;
    }
  }

  return maxChar;
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${mostFrequentCharBruteForce("javascript")}`); // "a"
// console.log(`Built-in: ${mostFrequentCharBuiltIn("aabbbccdeee")}`); // "b"
// console.log(`Optimized: ${mostFrequentCharOptimized("hellooo")}`); // "o"

module.exports = {
  mostFrequentCharBruteForce,
  mostFrequentCharBuiltIn,
  mostFrequentCharOptimized
};
