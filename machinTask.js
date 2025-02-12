//! 1.Write a JavaScript function to return the Fibonacci sequence up to a given number n ?
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fib(n) {
//   let series = [];
//   for (let i = 0; i < n; i++) {
//     series.push(fibonacci(i));
//   }
//   return series;
// }

// const n = 10;
// console.log(fib(n));

//! 2.Write a function that checks if a given string is a palindrome (a word that reads the same backward as forward).
// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("racecar")); //true
// console.log(isPalindrome("madam")); //true
// console.log(isPalindrome("hello")); //false

//! 3.Given an array of consecutive numbers from 1 to n, but with one missing, find the missing number.
// function findMissingNumber(arr) {
//   let n = arr.length + 1;
//   let exp = (n * (n + 1)) / 2;
//   let sum = arr.reduce((acc, val) => acc + val, 0);
//   return exp - sum;
// }
// console.log(findMissingNumber([1, 2, 4, 5, 6])); //3
// console.log(findMissingNumber([1, 2, 3, 5])); //4

//! 4.Write a function that checks if two strings are anagrams of each other ?
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(isAnagram("listen", "silent")); //true
// console.log(isAnagram("hello", "world")); //false
// console.log(isAnagram("hello", "ollehl")); //false

//! 5.Write a function to flatten a nested array ?
// function flatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function flatten() {
//   return arr.flat(Infinity);
// }
// console.log(flatten([1, 2, [3, 4], 5, [6, 7]])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten([1, [2, 3], 4, [5, 6, 7]])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten([1, [2, [3, 4], 5], 6, [7, 8, 9]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//! 6.Write a function that returns the factorial of a given number n ?
// function factorial(n) {
//   if (n === 0 || n === 1) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); //120
// console.log(factorial(10)); //3628800

//! 7.Write a function that returns the sum of all digits of a given number ?
// function sumDigits(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, val) => acc + Number(val), 0);
// }
// console.log(sumDigits(352));
// console.log(sumDigits(12345));

//! 8.Write a function to split an array into smaller arrays of a specified size ?
// function splitArray(arr, size) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// }
// console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(splitArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]

//! 9.Write a function to find duplicate elements in an array ?
// function findDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         result.push(arr[i]);
//       }
//     }
//   }
//   return result;
// }
// console.log(findDuplicates([1, 2, 3, 4, 3, 2, 1])); // Output: [1, 2, 3]
// console.log(findDuplicates([1, 2, 3, 4, 5])); // Output: []

//! 10.Write a function that calculates the sum of all even numbers in an array ?
// function sumOfEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); // Output: 6

//! 11.Find the second largest in an array ?
// function findSecondLargest(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[1];
// }

// console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
// console.log(findSecondLargest([1, 2, 3, 4, 5, 6])); // Output: 5

//! 12.reverse words in a given string( input:”hello world” //output:”olleh dlrow”) ?
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords("hello world")); // Output: "olleh dlrow"
