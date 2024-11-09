//! 119 Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  let res = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(res[j - 1] + res[j]);
    }
    row.push(1);
    res = row;
  }
  return res;
};

console.log(getRow(3));
console.log(getRow(2));
console.log(getRow(1));
