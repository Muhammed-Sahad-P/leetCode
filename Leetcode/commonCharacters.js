//! 1002. Find Common Characters

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
// You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function (words) {
  let map = new Map();
  for (let i = 0; i < words[0].length; i++) {
    map.set(words[0][i], 1);
  }
  for (let i = 1; i < words.length; i++) {
    let map2 = new Map();
    for (let j = 0; j < words[i].length; j++) {
      if (map.has(words[i][j])) {
        map2.set(words[i][j], (map2.get(words[i][j]) || 0) + 1);
      }
    }
    map = map2;
  }
  let arr = [];
  for (let [key, value] of map) {
    for (let i = 0; i < value; i++) {
      arr.push(key);
    }
  }
  return arr;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
