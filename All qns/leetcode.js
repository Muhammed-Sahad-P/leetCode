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
