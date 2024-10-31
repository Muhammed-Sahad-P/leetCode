// 2828. Check if a String Is an Acronym of Words

// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.

var isAcronym = function (words, s) {
  let acr = "";
  for (let i = 0; i < words.length; i++) {
    acr += words[i][0];
  }
  return acr === s;
};
console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
console.log(isAcronym(["an", "apple"], "a"));
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
