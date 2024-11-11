//! 1528. Shuffle String

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character
// at the ith position moves to indices[i] in the shuffled string.Return the shuffled string.

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

//!
// var restoreString = function (s, indices) {
//   let res = new Array(indices.length);
//   console.log(res);
//   for (let i = 0; i < indices.length; i++) {
//     res[indices[i]] = s[i];
//   }
//   return res.join("");
// };

var restoreString = function (s, indices) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    res.push([indices[i], s[i]]);
  }
  res.sort((a, b) => a[0] - b[0]);
  return res.map((item) => item[1]).join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("a,b,c", [0, 1, 2]));
