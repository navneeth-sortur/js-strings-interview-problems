/**
 * 🧩 Problem: Find the Longest Palindromic Substring
 *
 * ❓ Description:
 * Find the longest substring within a given string that is a palindrome.
 * Example:
 * "babad" → "bab" or "aba"
 *
 * 💡 Approaches:
 * 1️⃣ Brute-force: Check all substrings and test palindrome.
 * 2️⃣ Expand Around Center (Optimized): Expand for each index.
 * 3️⃣ DP Approach: Use dynamic programming for sub-problems.
 *
 * 🕒 Time Complexity:
 * Brute-force: O(n³)
 * Expand Around Center: O(n²)
 * DP: O(n²)
 *
 * 💾 Space Complexity:
 * Brute-force: O(1)
 * Expand Around Center: O(1)
 * DP: O(n²)
 */

// ✅ 1️⃣ Brute-force Approach
const longestPalindromeBruteForce = str => {
  let longest = "";
  const isPalindrome = s => s === s.split("").reverse().join("");
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const sub = str.slice(i, j);
      if (isPalindrome(sub) && sub.length > longest.length) longest = sub;
    }
  }
  return longest;
};

// ✅ 2️⃣ Expand Around Center (Optimized)
const longestPalindromeExpandCenter = str => {
  if (!str) return "";
  let start = 0,
    end = 0;

  const expand = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < str.length; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.slice(start, end + 1);
};

// ✅ 3️⃣ Dynamic Programming Approach
const longestPalindromeDP = str => {
  const n = str.length;
  if (n < 2) return str;
  let start = 0,
    maxLen = 1;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) dp[i][i] = true;

  for (let end = 1; end < n; end++) {
    for (let begin = 0; begin < end; begin++) {
      if (
        str[begin] === str[end] &&
        (end - begin <= 2 || dp[begin + 1][end - 1])
      ) {
        dp[begin][end] = true;
        if (end - begin + 1 > maxLen) {
          start = begin;
          maxLen = end - begin + 1;
        }
      }
    }
  }

  return str.slice(start, start + maxLen);
};

// 🔍 Example Test Cases
console.log(longestPalindromeBruteForce("babad")); // "bab" or "aba"
console.log(longestPalindromeExpandCenter("cbbd")); // "bb"
console.log(longestPalindromeDP("racecarbananab")); // "racecar"
