/**
 * 🧩 Problem: Reverse Words in a Sentence
 *
 * ❓ Description:
 * Given a sentence, reverse the order of words but not the words themselves.
 * Example:
 * "Hello World JavaScript" -> "JavaScript World Hello"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Split words manually and rebuild in reverse order.
 * 2️⃣ Built-in: Use split(), reverse(), join().
 * 3️⃣ Optimized: Use two-pointer technique on word array.
 *
 * 🕒 Time Complexity:
 * All Approaches: O(n)
 *
 * 💾 Space Complexity:
 * All Approaches: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const reverseWordsBruteForce = sentence => {
  let word = "";
  const words = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }

  words.push(word);

  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
    if (i > 0) reversed += " ";
  }

  return reversed;
};

// ✅ 2️⃣ Built-in Approach
const reverseWordsBuiltIn = sentence => sentence.split(" ").reverse().join(" ");

// ✅ 3️⃣ Optimized Approach (two-pointer swap)
const reverseWordsOptimized = sentence => {
  const words = sentence.trim().split(/\s+/);
  let left = 0,
    right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(" ");
};

// 🔍 Example Test Cases
// console.log(`Brute-force: ${reverseWordsBruteForce("Hello World JavaScript")}`); // "JavaScript World Hello"
// console.log(`Built-in: ${reverseWordsBuiltIn("I love coding")}`); // "coding love I"
// console.log(`Optimized: ${reverseWordsOptimized("Frontend Developer Rocks")}`); // "Rocks Developer Frontend"

module.exports = {
  reverseWordsBruteForce,
  reverseWordsBuiltIn,
  reverseWordsOptimized
};
