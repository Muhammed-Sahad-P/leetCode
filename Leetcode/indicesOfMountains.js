// //! 3285. Find Indices of Stable Mountains
// There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.
// A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.
// Return an array containing the indices of all stable mountains in any order.

Input: (height = [10, 1, 10, 1, 10]), (threshold = 10);
// Input: height = [1,2,3,4,5], threshold = 2
// Output: [3,4]
// Explanation:
// Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
// Mountain 4 is stable because height[3] == 4 is greater than threshold == 2.

// Example 2:
// Input: height = [10,1,10,1,10], threshold = 3
// Output: [1,3]

// Example 3:
// Input: height = [10,1,10,1,10], threshold = 10
// Output: []

var stableMountains = function (height, threshold) {
  let op = [];
  for (let i = 0; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      op.push(i);
    }
  }
  return op;
};

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
console.log(stableMountains([10, 1, 10, 1, 10], 10));
