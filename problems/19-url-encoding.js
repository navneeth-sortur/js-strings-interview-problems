/**
 * 🧩 Problem: Encode a String for URL
 *
 * ❓ Description:
 * Replace spaces with "%20" or use built-in encoding functions.
 * Example:
 * "Hello World!" → "Hello%20World%21"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Replace spaces manually.
 * 2️⃣ Built-in: Use encodeURIComponent().
 * 3️⃣ Optimized: Use regex-based replace for selective encoding.
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ 1️⃣ Brute-force Approach
const urlEncodeBruteForce = str => {
  let result = "";
  for (const ch of str) {
    if (ch === " ") result += "%20";
    else result += encodeURIComponent(ch);
  }
  return result;
};

// ✅ 2️⃣ Built-in Approach
const urlEncodeBuiltIn = str => encodeURIComponent(str);

// ✅ 3️⃣ Optimized (Regex-based)
const urlEncodeOptimized = str => str.replace(/ /g, "%20");

// 🔍 Example Test Cases
// console.log(urlEncodeBruteForce("Hello World!")); // "Hello%20World%21"
// console.log(urlEncodeBuiltIn("React JS @ 2025")); // "React%20JS%20%40%202025"
// console.log(urlEncodeOptimized("Encode this text")); // "Encode%20this%20text"

module.exports = {
  urlEncodeBruteForce,
  urlEncodeBuiltIn,
  urlEncodeOptimized
};
