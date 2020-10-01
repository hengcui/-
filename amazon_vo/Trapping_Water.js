/**
 * 通用的想法是对于每一根柱子，计算积水量，那么如何计算每一个柱子上的积水量呢？
 * 我们会发现对于当前柱子， 左右两边柱子的最大高度决定了当前柱子的储水量
 * water[i] = min(left_max_height, right_max_height) - height[i]
 * 
 * 那么，暴力的解法就是对于每一个柱子都遍历数组找到他左右两边最大的高度，分别计算每一个柱子对应的储水量
 * time: O(n^2) space: O(n)
 */
var trap = function(height) {
  let water = 0;

  for (let i = 0;i < height.length;i++) {
    let left_max_height = right_max_height = height[i];

    //calculate left_max_height
    for (let j = i - 1;j >= 0;j--) {
      left_max_height = Math.max(left_max_height, height[j]);
    }

    //calculate right_max_height
    for (let j = i + 1;j < height.length;j++) {
      right_max_height = Math.max(right_max_height, height[j]);
    }

    water += Math.min(left_max_height, right_max_height) - height[i];
  }

  return water;
};

/**
 * 对于暴力法进一步优化的方案，可以发现没有必要计算每一个水位的时候都计算一遍左右的最大值，可以通过dp一次性计算每一个位置的左右最大高度。从左到右遍历计算left_max, 从右到左计算right_max
 * 
 * time: O(n), space: O(n)
 */

var trap = function (height) {
  let water = 0;
  const len = height.length;

  const left_max = new Array(len);
  const right_max = new Array(len);

  left_max[0] = height[0];
  right_max[len - 1] = height[len - 1];

  for (let i = 1;i < len;i++) left_max[i] = Math.max(height[i], left_max[i - 1]);
  for (let i = len - 2;i >= 0;i--) right_max[i] = Math.max(height[i], right_max[i + 1]);

  for (let i = 0;i < len;i++) {
    water += Math.min(left_max[i], right_max[i]) - height[i];
  }

  return water;
}

/**
 * 可以使用单调栈，一次遍历数组来计算储水量
 * 
 * 算法方法：
 * 1. 使用栈来记录入栈元素的index
 * 2. 当当前高度小于栈顶元素，那么直接入栈（说明如果后面有一个更高的柱子出现的时候，当前柱子的地方就可以形成一个洼地，两边的高度都大于当前高度）
 * 3. 当当前高度大于栈顶元素，且栈不为空的时候， 可以计算洼地中的水的面积
 *    a. 出栈栈顶元素，作为洼地，我们计算这个洼地的高度上能形成的水池面积
 *    b. 计算水池的高度： 左右两边的最小的高度 - 当前出栈元素的高度
 *    c. 计算水池的宽度： 当前柱子的index - 栈顶的index
 */

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(x) {
    this.stack.push(x);
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;

    this.size--;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }
}

var trap = function(heights) {
  let water = 0;
  const stack = new Stack;

  for (let i = 0;i < heights.length;i++) {
    while (!stack.isEmpty() && heights[stack.peek()] < heights[i]) {
      const index = stack.pop();
      //leftmost, rightmost 
      if (stack.isEmpty()) break;

      const height = Math.min(heights[stack.peek()], heights[i]) - heights[index];
      const width = i - stack.peek() - 1;
      // console.log(i, height, width)
      water += height * width;
    }

    stack.push(i);
  }

  return water;
}