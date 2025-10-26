/**
 * 🧩 Problem: Find the Shortest Word in a String
 *
 * ❓ Description:
 * Find the shortest word in a given sentence.
 * Example:
 * "The quick brown fox" → "The"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Split words and track min length.
 * 2️⃣ Built-in: Use reduce() for cleaner logic.
 * 3️⃣ Optimized: Use regex match + Math.min() trick.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const findShortestWordBruteForce = str => {
  const words = str.split(" ").filter(Boolean);
  let shortest = words[0] || "";
  for (const word of words) {
    if (word.length < shortest.length) shortest = word;
  }
  return shortest;
};

// ✅ 2️⃣ Built-in Approach
const findShortestWordBuiltIn = str =>
  str
    .split(" ")
    .filter(Boolean)
    .reduce((min, word) => (word.length < min.length ? word : min));

// ✅ 3️⃣ Optimized (Regex + Math.min)
const findShortestWordOptimized = str => {
  const words = str.match(/\b\w+\b/g);
  if (!words) return "";
  const minLen = Math.min(...words.map(w => w.length));
  return words.find(w => w.length === minLen);
};

// 🔍 Example Test Cases
// console.log(findShortestWordBruteForce("The quick brown fox")); // "The"
// console.log(findShortestWordBuiltIn("Jump over lazy dog")); // "dog"
// console.log(findShortestWordOptimized("Find the smallest word")); // "the"

module.exports = {
  findShortestWordBruteForce,
  findShortestWordBuiltIn,
  findShortestWordOptimized
};
