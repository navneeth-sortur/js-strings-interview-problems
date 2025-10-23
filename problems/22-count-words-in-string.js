/**
 * 🧩 Problem: Count the Number of Words in a String
 *
 * ❓ Description:
 * Count how many words exist in a given sentence.
 * Example:
 * "Hello world!" → 2
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Loop through characters and detect word boundaries.
 * 2️⃣ Built-in: Split by spaces and filter out empties.
 * 3️⃣ Optimized: Use regex match for word patterns.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const countWordsBruteForce = str => {
  let count = 0;
  let inWord = false;

  for (const ch of str) {
    if (ch !== " " && !inWord) {
      inWord = true;
      count++;
    } else if (ch === " ") {
      inWord = false;
    }
  }

  return count;
};

// ✅ 2️⃣ Built-in Approach
const countWordsBuiltIn = str => str.split(" ").filter(Boolean).length;

// ✅ 3️⃣ Optimized (Regex)
const countWordsOptimized = str => (str.match(/\b\w+\b/g) || []).length;

// 🔍 Example Test Cases
console.log(countWordsBruteForce("Hello world!")); // 2
console.log(countWordsBuiltIn("   This is   a test  ")); // 4
console.log(countWordsOptimized("Count words in a sentence")); // 5
