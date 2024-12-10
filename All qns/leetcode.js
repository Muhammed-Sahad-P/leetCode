//! 1346. Check If N and Its Double Exist
// var checkIfExist = function (arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] * 2 === arr[j] || arr[i] === 2 * arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// console.log(checkIfExist([10, 2, 5, 3]));
// console.log(checkIfExist([3, 1, 7, 11]));

//! 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// var isPrefixOfWord = function (sentence, searchWord) {
//   let spl = sentence.split(" ");
//   for (let i = 0; i < spl.length; i++) {
//     if (spl[i].startsWith(searchWord)) {
//       return i + 1;
//     }
//   }
//   return -1;
// };
// console.log(isPrefixOfWord("i love eating burger", "burg"));
// console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
// console.log(isPrefixOfWord("i am tired", "you"));

//! 41. First Missing Positive
// var firstMissingPositive = function (nums) {
//   nums.sort((a, b) => a - b);
//   let miss = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === miss) {
//       miss++;
//     } else if (nums[i] > miss) {
//       break;
//     }
//   }
//   return miss;
// };

// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));

//! 2109. Adding Spaces to a String
// var addSpaces = function (s, spaces) {
//   let str = "";
//   let index = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (index < spaces.length && i === spaces[index]) {
//       str += " ";
//       index++;
//     }
//     str += s[i];
//   }
//   return str;
// };
// console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
// console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));
// console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));

//! 1431. Kids With the Greatest Number of Candies
// var kidsWithCandies = function (candies, extraCandies) {
//   let maxCandy = Math.max(...candies);
//   console.log(maxCandy);
//   let res = [];
//   for (let i = 0; i < candies.length; i++) {
//     res.push(candies[i] + extraCandies >= maxCandy);
//   }
//   return res;
// };

// console.log(kidsWithCandies, ([2, 3, 5, 1, 3], 3));
// console.log(kidsWithCandies, ([4, 2, 1, 1, 2], 1));
// console.log(kidsWithCandies, ([12, 1, 12], 10));

//! 1662. Check If Two String Arrays are Equivalent
//* return word1.join('') === word2.join('') //simple way
// var arrayStringsAreEqual = function (word1, word2) {
//   let str1 = "";
//   let str2 = "";
//   for (let word of word1) {
//     str1 += word;
//   }
//   for (let word of word2) {
//     str2 += word;
//   }
//   return str1 === str2;
// };

// console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

// //! 944. Delete Columns to Make Sorted
// var minDeletionSize = function (strs) {
//   let count = 0;
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] < strs[j - 1][i]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// };

// console.log(minDeletionSize(["cba", "daf", "ghi"]));
// console.log(minDeletionSize(["a", "b"]));
// console.log(minDeletionSize(["zyx", "wvu", "tsr"]));

//! 2287. Rearrange Characters to Make Target String
// var rearrangeCharacters = function (s, target) {
//   let count = {};
//   let count1 = {};
//   for (const char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (const char of target) {
//     count1[char] = (count1[char] || 0) + 1;
//   }

//   let res = Infinity;
//   for (const char in count1) {
//     if (!count[char]) {
//       return 0;
//     }
//     res = Math.min(res, Math.floor(count[char] / count1[char]));
//   }
//   return res;
// };
// console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
// console.log(rearrangeCharacters("abcba", "abc"));

// console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));

// //! 682. Baseball Game
// var calPoints = function (operations) {
//   let ops = [];
//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] === "C") {
//       ops.pop();
//     } else if (operations[i] === "D") {
//       let value = ops[ops.length - 1];
//       ops.push(value * 2);
//     } else if (operations[i] === "+") {
//       let val1 = ops[ops.length - 1];
//       let val2 = ops[ops.length - 2];
//       ops.push(val1 + val2);
//     } else {
//       ops.push(Number(operations[i]));
//     }
//   }
//   return ops.reduce((acc, val) => acc + val, 0);
// };

// var calPoints = function (operations) {
//   let ops = [];
//   for (let i = 0; i < operations.length; i++) {
//     operations[i] === "C"
//       ? ops.pop()
//       : operations[i] === "D"
//       ? ops.push(ops[ops.length - 1] * 2)
//       : operations[i] === "+"
//       ? ops.push(ops[ops.length - 1] + ops[ops.length - 2])
//       : ops.push(Number(operations[i]));
//   }
//   return ops.reduce((acc, val) => acc + val, 0);
// };

// console.log(calPoints(["5", "2", "C", "D", "+"]));
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
// console.log(calPoints(["1", "C"]));
