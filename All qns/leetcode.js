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

//! 844. Backspace String Compare
// var backspaceCompare = function (s, t) {
//   let stackS = [];
//   let stackT = [];
//   for (let char of s) {
//     if (char === "#") {
//       stackS.pop();
//     } else {
//       stackS.push(char);
//     }
//   }
//   for (let char of t) {
//     if (char === "#") {
//       stackT.pop();
//     } else {
//       stackT.push(char);
//     }
//   }
//   return stackS.join("") === stackT.join("");
// };
// var backspaceCompare = function (s, t) {
//   let stackS = [];
//   let stackT = [];
//   for (let char of s) {
//     char === "#" ? stackS.pop() : stackS.push(char);
//   }
//   for (let char of t) {
//     char === "#" ? stackT.pop() : stackT.push(char);
//   }
//   return stackT.join("") === stackS.join("");
// };
// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a#c", "b"));

//! 2558. Take Gifts From the Richest Pile
// var pickGifts = function (gifts, k) {
//   gifts.sort((a, b) => b - a);
//   for (let i = 0; i < k; i++) {
//     if (gifts[i] === 0) return gifts.reduce((acc, val) => acc + val, 0);
//     gifts[0] = Math.floor(Math.sqrt(gifts[0]));
//     gifts.sort((a, b) => b - a);
//   }
//   return gifts.reduce((acc, val) => acc + val, 0);
// };
// console.log(pickGifts([25, 64, 9, 4, 100], 4)); //29
// console.log(pickGifts([1, 1, 1, 1], 4)); //4

//! 1422. Maximum Score After Splitting a String
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example 1:
// Input: s = "011101"
// Output: 5

// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Example 3:
// Input: s = "1111"
// Output: 3

//! 1422. Maximum Score After Splitting a String
// var maxScore = function (s) {
//   let left = 0;
//   let right = 0;
//   let max = 0;

//   for (const char of s) {
//     if (char === "1") {
//       right++;
//     }
//   }
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === "0") {
//       left++;
//     } else {
//       right--;
//     }
//     max = Math.max(max, left + right);
//   }
//   return max;
// };
// console.log(maxScore("011101"));
// console.log(maxScore("00111"));
// console.log(maxScore("1111"));

// //! 268. Missing Number
// var missingNumber = function (nums) {
//   let n = nums.length;
//   let result = (n * (n + 1)) / 2;
//   let sum = nums.reduce((a, b) => a + b, 0);
//   return result - sum;
// };

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//! 942. DI String Match
// var diStringMatch = function (s) {
//   let res = [];
//   let i = 0;
//   let d = s.length;
//   for (const char of s) {
//     if (char === "I") {
//       res.push(i++);
//     } else {
//       res.push(d--);
//     }
//   }
//   res.push(i);
//   return res;
// };
// console.log(diStringMatch("IDID"));
// console.log(diStringMatch("III"));
// console.log(diStringMatch("DDI"));

//! 1816. Truncate Sentence
// var truncateSentence = function (s, k) {
// return s.split(" ").slice(0, k).join(" ");
// };
// console.log(truncateSentence("Hello how are you Contestant", 4));
// console.log(truncateSentence("What is the solution to this problem", 4));
// console.log(truncateSentence("chopper is not a tanuki", 5));

//! 2114. Maximum Number of Words Found in Sentences
// var mostWordsFound = function (sentences) {
//   let count = 0;
//   for (let i = 0; i < sentences.length; i++) {
//     let output = sentences[i].split(" ").length;
//     console.log(output);
//     if (output > count) {
//       count = output;
//     }
//   }
//   return count;
// };
// console.log(
//   mostWordsFound([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );
// console.log(
//   mostWordsFound(["please wait", "continue to fight", "continue to win"])
// );

// //! 2185. Counting Words With a Given Prefix
// var prefixCount = function (words, pref) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].startsWith(pref)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
// console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));

//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words.length; j++) {
//       if (i !== j && words[i].includes(words[j])) {
//         str += words[j] + " ";
//       }
//     }
//   }
//   return str.split(" ");

//! 41. First Missing Positive
// var firstMissingPositive = function (nums) {
//   nums.sort((a, b) => a - b);
//   let miss = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === miss) {
//       miss++;
//     }
//   }
//   return miss;
// };
// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));

//! 1408. String Matching in an Array
// var stringMatching = function (words) {
//   let res = [];
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words.length; j++) {
//       if (i !== j && words[i].includes(words[j]) && !res.includes(words[j])) {
//         res.push(words[j]);
//       }
//     }
//   }
//   return res;
// };
// console.log(stringMatching(["mass", "as", "hero", "superhero"]));
// console.log(stringMatching(["leetcode", "et", "code"]));
// console.log(stringMatching(["blue", "green", "bu"]));

//! 2255. Count Prefixes of a Given String
// var countPrefixes = function (words, s) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (s.startsWith(words[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
// console.log(countPrefixes(["a", "a"], "aa"));

//! 1961. Check If String Is a Prefix of Array
// var isPrefixString = function (s, words) {
//   let res = "";
//   for (let i = 0; i < words.length; i++) {
//     res += words[i];
//     if (res === s) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(
//   isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
// );
// console.log(
//   isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
// );

//! 1475. Final Prices With a Special Discount in a Shop
// var finalPrices = function (prices) {
//   let res = [];
//   for (let i = 0; i < prices.length; i++) {
//     let discount = false;
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] <= prices[i]) {
//         res.push(prices[i] - prices[j]);
//         discount = true;
//         break;
//       }
//     }
//     if (!discount) {
//       res.push(prices[i]);
//     }
//   }
//   return res;
// };
// console.log(finalPrices([8, 4, 6, 2, 3]));
// console.log(finalPrices([1, 2, 3, 4, 5]));
// console.log(finalPrices([10, 1, 1, 6]));

//! 1945. Sum of Digits of String After Convert
// var getLucky = function (s, k) {
//   let str = "";
//   for (let i = 0; i < s.length; i++) {
//     str += (s.charCodeAt(i) - 96).toString();
//   }
//   while (k > 0) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += Number(str[i]);
//     }
//     str = sum.toString();
//     k--;
//   }
//   return str;
// };
// console.log(getLucky("iiii", 1));
// console.log(getLucky("leetcode", 2));
// console.log(getLucky("zbax", 2));

// //! 747. Largest Number At Least Twice of Others
// var dominantIndex = function (nums) {
//   let max = -1;
//   let index = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       index = i;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (i !== index && nums[i] * 2 > max) {
//       return -1;
//     }
//   }
//   return index;
// };
// console.log(dominantIndex([3, 6, 1, 0]));
// console.log(dominantIndex([1, 2, 3, 4]));
// console.log(dominantIndex([0, 0, 0, 1]));

// //! fibanocci with recursion
// function fibRec(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibRec(n - 1) + fibRec(n - 2);
// }
// function fib(n) {
//   const series = [];
//   for (let i = 0; i < n; i++) {
//     series.push(fibRec(i));
//   }
//   return series;
// }

// const n = 10;
// console.log(fib(n));

//! 2085. Count Common Words With One Occurrence
// var countWords = function (words1, words2) {
//   let count = 0;
//   for (let i = 0; i < words1.length; i++) {
//     if (
//       words1.indexOf(words1[i]) == words1.lastIndexOf(words1[i]) &&
//       words2.indexOf(words1[i]) >= 0 &&
//       words2.indexOf(words1[i]) == words2.lastIndexOf(words1[i])
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(
//   countWords(
//     ["leetcode", "is", "amazing", "as", "is"],
//     (words2 = ["amazing", "leetcode", "is"])
//   )
// );
// console.log(countWords(["b", "bb", "bbb"], (words2 = ["a", "aa", "aaa"])));
// console.log(countWords(["a", "ab"], (words2 = ["a", "a", "a", "ab"])));

//! 21. Merge Two Sorted Lists
// var mergeTwoLists = function (list1, list2) {
//   for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       if (list1[i] > list2[j]) {
//         list1.splice(i, 0, list2[j]);
//         list2.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return list1.concat(list2);
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0]));

//! 3042. Count Prefix and Suffix Pairs I
// var countPrefixSuffixPairs = function (words) {
//   let totalPairs = 0;
//   let n = words.length - 1;
//   for (let i = 0; i < n; i++) {
//     let str1 = words[i];
//     for (let j = i + 1; j <= n; j++) {
//       let str2 = words[j];
//       if (str2.length < str1.length) continue;
//       if (str2.startsWith(str1) && str2.endsWith(str1)) {
//         totalPairs++;
//       }
//     }
//   }
//   return totalPairs;
// };
// console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
// console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]));
// console.log(countPrefixSuffixPairs(["abab", "ab"]));

//! 1773. Count Items Matching a Rule
// var countMatches = function (items, ruleKey, ruleValue) {
//   let match = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (ruleKey === "type" && items[i][0] === ruleValue) match += 1;
//     if (ruleKey === "color" && items[i][1] === ruleValue) match += 1;
//     if (ruleKey === "name" && items[i][2] === ruleValue) match += 1;
//   }
//   return match;
// };
// console.log(
//   countMatches(
//     [
//       ["phone", "blue", "pixel"],
//       ["computer", "silver", "lenovo"],
//       ["phone", "gold", "iphone"],
//     ],
//     (ruleKey = "color"),
//     (ruleValue = "silver")
//   )
// );
// console.log(
//   countMatches(
//     [
//       ["phone", "blue", "pixel"],
//       ["computer", "silver", "phone"],
//       ["phone", "gold", "iphone"],
//     ],
//     (ruleKey = "type"),
//     (ruleValue = "phone")
//   )
// );

// //! 2788. Split Strings by Separator
// var splitWordsBySeparator = function (words, separator) {
//   let res = [];
//   for (let i = 0; i < words.length; i++) {
//     let result = words[i].split(separator).filter((word) => word !== "");
//     res.push(...result);
//   }
//   return res;
// };
// console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
// console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
// console.log(splitWordsBySeparator(["|||"], "|"));

// //! 1002. Find Common Characters
// var commonChars = function (words) {
//   let res = [];
//   let reference = words[0];
//   for (let char of reference) {
//     if (words.every((word) => word.includes(char))) {
//       res.push(char);
//       words = words.map((word) => word.replace(char, ""));
//     }
//   }

//   return res;
// };

// console.log(commonChars(["bella", "label", "roller"])); // Output: ["e", "l", "l"]
// console.log(commonChars(["cool", "lock", "cook"])); // Output: ["c", "o"]

//! 2744. Find Maximum Number of String Pairs
// var maximumNumberOfStringPairs = function (words) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i] === words[j].split("").reverse().join("")) {
//         count++;
//         words.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return count;
// };
// console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
// console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"]));
// console.log(maximumNumberOfStringPairs(["aa", "ab"]));

//! 1684. Count the Number of Consistent Strings
// var countConsistentStrings = function (allowed, words) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if (!allowed.includes(words[i][j])) {
//         break;
//       }
//       if (j === words[i].length - 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
// console.log(
//   countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
// );
// console.log(
//   countConsistentStrings("cad", [
//     "cc",
//     "acd",
//     "b",
//     "ba",
//     "bac",
//     "bad",
//     "ac",
//     "d",
//   ])
// );

// //! 2108. Find First Palindromic String in the Array
// var firstPalindrome = function (words) {
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === words[i].split("").reverse().join("")) {
//       return words[i];
//     }
//   }
//   return "";
// };
// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
// console.log(firstPalindrome(["notapalindrome", "racecar"]));
// console.log(firstPalindrome(["def", "ghi"]));

// //! 3151. Special Array I
// var isArraySpecial = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if ((nums[i] + nums[i + 1]) % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isArraySpecial([1])); // true
// console.log(isArraySpecial([2, 1, 4])); // true
// console.log(isArraySpecial([4, 3, 1, 6])); //false

//! 2506. Count Pairs Of Similar Strings
// var similarPairs = function (words) {
//   let count = 0;
//   let str = words.map((word) => [...new Set(word)].sort().join(""));
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); //2
// console.log(similarPairs(["aabb", "ab", "ba"])); //3
// console.log(similarPairs(["nba", "cba", "dba"])); //0

//! 2496. Maximum Value of a String in an Array
// var maximumValue = function (strs) {
//   let count = 0;
//   for (let i = 0; i < strs.length; i++) {
//     if (isNaN(Number(strs[i]))) {
//       if (strs[i].length > count) {
//         count = strs[i].length;
//       }
//     } else {
//       if (Number(strs[i]) > count) {
//         count = Number(strs[i]);
//       }
//     }
//   }
//   return count;
// };
// console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); //output = 5
// console.log(maximumValue(["1", "01", "001", "0001"])); //output = 1

//! 1752. Check if Array Is Sorted and Rotated
// var check = function (nums) {
//   let count = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       count ++;
//     }
//   }
//   nums[nums.length - 1] > nums[0] && count++;
//   return count <= 1;
// };
// console.log(check([3, 4, 5, 1, 2])); //true
// console.log(check([2, 1, 3, 4])); //false
// console.log(check([1, 2, 3])); //true

//! 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
// var longestMonotonicSubarray = function (nums) {
//   if (nums.length === 0) return 0;
//   let longest = 1;
//   let inc = 1;
//   let dec = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1]) {
//       inc++;
//       dec = 1;
//     } else if (nums[i] < nums[i - 1]) {
//       dec++;
//       inc = 1;
//     } else {
//       inc = 1;
//       dec = 1;
//     }
//     longest = Math.max(longest, inc, dec);
//   }
//   return longest;
// };
// console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
// console.log(longestMonotonicSubarray([3, 3, 3, 3]));
// console.log(longestMonotonicSubarray([3, 2, 1]));

//! 1800. Maximum Ascending Subarray Sum
// var maxAscendingSum = function (nums) {
//   let sum = nums[0];
//   let currentSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1]) {
//       currentSum += nums[i];
//     } else {
//       currentSum = nums[i];
//     }
//     sum = Math.max(sum, currentSum);
//   }
//   return sum;
// };
// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); //65
// console.log(maxAscendingSum([10, 20, 30, 40, 50])); //150
// console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); //33

//! 1790. Check if One String Swap Can Make Strings Equal
// var areAlmostEqual = function (s1, s2) {
//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     return true;
//   } else if (count === 2) {
//     let arr = [];
//     for (let i = 0; i < s1.length; i++) {
//       if (s1[i] !== s2[i]) {
//         arr.push(i);
//       }
//     }
//     if (s1[arr[0]] === s2[arr[1]] && s1[arr[1]] === s2[arr[0]]) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };
// console.log(areAlmostEqual("bank", "kanb")); //true
// console.log(areAlmostEqual("attack", "defend")); //false
// console.log(areAlmostEqual("kelb", "kelb")); //true

//! 2678. Number of Senior Citizens
// var countSeniors = function (details) {
//   let count = 0;
//   for (let i = 0; i < details.length; i++) {
//     if (Number(details[i].slice(11, 13)) > 60) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(
//   countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
// );
// console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));

//! 83. Remove Duplicates from Sorted List
// var deleteDuplicates = function (head) {
//   let res = [];
//   for (let i = 0; i < head.length; i++) {
//     if (!res.includes(head[i])) {
//       res.push(head[i]);
//     }
//   }
//   return res;
// };
// console.log(deleteDuplicates([1, 1, 2])); //[1,2]
// console.log(deleteDuplicates([1, 1, 2, 3, 3])); //[1,2,3]

//! 929. Unique Email Addresses
// var numUniqueEmails = function (emails) {
//     let res = [];
//     for (let i = 0; i < emails.length; i++) {
//         let email = emails[i].split("@");
//         email[0] = email[0].split("+")[0].replace(/\./g, "");
//         res.push(email.join("@"));
//     }
//     return new Set(res).size;
// };
// console.log(
//   numUniqueEmails([
//     "test.email+alex@leetcode.com",
//     "test.e.mail+bob.cathy@leetcode.com",
//     "testemail+david@lee.tcode.com",
//   ])
// );
// console.log(
//   numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
// );

//! 49. Group Anagrams
// var groupAnagrams = function (strs) {
//   let map = new Map();
//   for (let i = 0; i < strs.length; i++) {
//       let key = strs[i].split("").sort().join("");
//     if (map.has(key)) {
//       map.get(key).push(strs[i]);
//     } else {
//       map.set(key, [strs[i]]);
//     }
//   }
//   return Array.from(map.values());
// };
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));

//! 70. Climbing Stairs
// var climbStairs = function (n) {
//   let dp = [1, 2];
//   for (let i = 2; i < n; i++) {
//     dp.push(dp[i - 1] + dp[i - 2]);
//   }
//   return dp[n - 1];
// };
// console.log(climbStairs(2));
// console.log(climbStairs(3));


