/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * Brute Force:
 * for every bar, finding the consecutive leftmost and rightmost bar which height is larger than or equal to current height
 * width = right - left + 1, height = currentHeight, area = width * height
 * Based on each bar result, finding the maximum area 
 */
var largestRectangleArea = function(heights) {
  const len = heights.length;
  let maxRec = 0;

  for (let i = 0;i < heights.length;i++) {
    const height = heights[i];

    let left = i - 1, right = i + 1;

    while (left >= 0 && heights[i] <= heights[left]) left--;
    while (right < len && heights[i] <= heights[right]) right++;
    // console.log(left, right, i)
    const width = right - left - 1;

    maxRec = Math.max(maxRec, height * width);
  }

  return maxRec;
};

//use stack we can calculate every point, first lowest height in one loop
class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

var largestRectangleArea = function (heights) {
  const len = heights.length;

  const left_stack = new Stack(), right_stack = new Stack();
  const left_heights = new Array(len), right_heights = new Array(len);

  for (let i = 0;i < len;i++) {
    while (!right_stack.isEmpty() && heights[right_stack.top()] > heights[i]) {
      const index = right_stack.pop();
      right_heights[index] = i;
    }

    right_stack.push(i);
  }

  while (!right_stack.isEmpty()) {
    const index = right_stack.pop();
    right_heights[index] = len;
  }

  for (let i = len - 1;i >= 0;i--) {
    while (!left_stack.isEmpty() && heights[left_stack.top()] > heights[i]) {
      const index = left_stack.pop();
      left_heights[index] = i;
    }

    left_stack.push(i);
  }

  while (!left_stack.isEmpty()) {
    const index = left_stack.pop();
    left_heights[index] = -1;
  }
  // console.log(left_heights, right_heights)
  let maxRec = 0;
  for (let i = 0;i < len;i++) {
    const rec = heights[i] * (right_heights[i] - left_heights[i] - 1);
    maxRec = Math.max(maxRec, rec);
  }

  return maxRec;
}