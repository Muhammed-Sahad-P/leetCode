// 2942. Find Words Containing Character

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []

const findWordsContaining = function (words, x) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
