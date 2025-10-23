/**
 * 🧩 Problem: Generate Acronym from a String
 *
 * ❓ Description:
 * Given a phrase, generate its acronym (first letters of each word in uppercase).
 * Example:
 * "As Soon As Possible" → "ASAP"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Split string, manually pick first letters.
 * 2️⃣ Built-in: Use map() + join().
 * 3️⃣ Optimized: Use regex for first letter extraction.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const generateAcronymBruteForce = phrase => {
  let acronym = "";
  const words = phrase.split(" ");
  for (const word of words) {
    if (word.trim().length > 0) acronym += word[0].toUpperCase();
  }
  return acronym;
};

// ✅ 2️⃣ Built-in Approach
const generateAcronymBuiltIn = phrase =>
  phrase
    .split(" ")
    .filter(Boolean)
    .map(w => w[0].toUpperCase())
    .join("");

// ✅ 3️⃣ Optimized (Regex-based)
const generateAcronymOptimized = phrase =>
  (phrase.match(/\b\w/g) || []).join("").toUpperCase();

// 🔍 Example Test Cases
console.log(generateAcronymBruteForce("As Soon As Possible")); // "ASAP"
console.log(generateAcronymBuiltIn("Read The Fine Manual")); // "RTFM"
console.log(generateAcronymOptimized("International Cricket Council")); // "ICC"
