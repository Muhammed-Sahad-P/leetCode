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

// //! 1. Two Sum
// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

//! IsPalindrome check
// function isPalindrome(str) {
//   // return str === str.split("").reverse().join("");
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome("racecar")); //true
// console.log(isPalindrome("madam")); //true
// console.log(isPalindrome("hello")); //false

//! Reverse an Array → arr.reverse() or Two-Pointer approach
// function reverseArray(arr) {
//?   return arr.reverse();
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

//! Check for Palindrome → Two-pointer or .split('').reverse().join('')
// function isPalindrome(str) {
//?   return str === str.split("").reverse().join("");
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("dog"));

//! Find Duplicate Elements → Set() or HashMap
//?Set
// function findDup(arr) {
//   let seen = new Set();
//   let duplicate = new Set();
//   for (let num of arr) {
//     if (seen.has(num)) {
//       duplicate.add(num);
//     }
//     seen.add(num);
//   }
//   return [...duplicate];
// }
// console.log(findDup([1, 2, 3, 2, 4, 5, 1]));
// console.log(findDup([1, 2, 5, 3, 2, 4, 5]));

//?Hashmap
// function findDup(arr) {
//   let seen = {};
//   let duplicate = [];
//   for (let num of arr) {
//     seen[num] = (seen[num] || 0) + 1;
//     if (seen[num] === 2) duplicate.push(num);
//   }
//   return duplicate;
// }
// console.log(findDup([1, 2, 3, 2, 4, 5, 1]));
// console.log(findDup([1, 2, 5, 3, 2, 4, 5]));

//! Rotate an Array → arr.slice() or use Two-Pointer swap
// function rotateArr(arr, k) {
//   k = k % arr.length;
//   function reverse(start, end) {
//     while (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }
//   reverse(0, arr.length - 1);
//   reverse(0, k - 1);
//   reverse(k, arr.length - 1);
//   return arr;
// }
// console.log(rotateArr([1, 2, 3, 4, 5], 2));
// console.log(rotateArr([121, 3, 4, 5, 6, 4, 3], 3));

//! Find First Non-Repeating Character (HashMap)
// function nonRepeat(str) {
//   let count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (count[char] === 1) return char;
//   }
//   return null;
// }
// console.log(nonRepeat("leetcode"));
// console.log(nonRepeat("aabbcc"));
// console.log(nonRepeat("sahad"));

//! Check for Duplicates in an Array (Set)
// function isDup(arr) {
//   let include = new Set();
//   for (let num of arr) {
//     if (include.has(num)) {
//       return true;
//     }
//     include.add(num);
//   }
//   return false;
// }
// console.log(isDup([1, 2, 3, 4, 25, 1]));
// console.log(isDup([1, 2, 3, 4, 5]));
// console.log(isDup([1, 21, 3, 4, 21, 5]));

//! Two Sum Problem (HashMap for O(n) lookup)
// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

//! Linear Search → O(n), check one by one
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (target === arr[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Output: -1

//! Fibonacci Sequence
//? recursive way
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));
//?best way
// function fibonacci(n) {
//   if (n <= 1) return n;
//   let prev = 0;
//   let curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// }
// console.log(fibonacci(6));

//! Factorial of a Number
//? recursive way
// function factorial(n) {
//   if (n <= 2) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

//?concise way
// function factorial(n) {
//   let res = 1;
//   for (let i = 2; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log(factorial(5));

//! Valid Parentheses (Stack)
// function isValidParentheses(s) {
//   let stack = [];
//   let pairs = { "]": "[", "}": "{", ")": "(" };
//   for (let char of s) {
//     if (char in pairs) {
//       if (stack.pop() !== pairs[char]) return false;
//     } else {
//       stack.push(char);
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isValidParentheses("(){}[]")); // true
// console.log(isValidParentheses("({[)]}")); // false
// console.log(isValidParentheses("{[]}")); // true
