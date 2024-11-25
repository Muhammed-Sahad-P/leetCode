// //! 3232. Find if Digit Game Can Be Won
// You are given an array of positive integers nums.
// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums,
// and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.
// Return true if Alice can win this game, otherwise, return false.

// Example 1:
// Input: nums = [1,2,3,4,10]
// Output: false
// Explanation:
// Alice cannot win by choosing either single-digit or double-digit numbers.

// Example 2:
// Input: nums = [1,2,3,4,5,14]
// Output: true
// Explanation:
// Alice can win by choosing single-digit numbers which have a sum equal to 15.

// Example 3:
// Input: nums = [5,5,5,25]
// Output: true
// Explanation:
// Alice can win by choosing double-digit numbers which have a sum equal to 25.

var canAliceWin = function (nums) {
  let s = 0;
  let d = 0;

  for (n of nums) {
    if (n >= 1 && n <= 9) {
      s += n;
    } else if (n >= 10 && n <= 99) {
      d += n;
    }
  }
  return s > d || d > s;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
