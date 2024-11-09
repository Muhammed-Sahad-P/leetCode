//! 118.Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    row.push(1);
    res.push(row);
  }
  return res;
};

console.log(generate(5));
console.log(generate(1));
