/**
 * 维护一个单调递减栈
 * 当栈顶元素小于x时，栈顶元素对应的最大值就是x， 不断出栈直到栈顶元素大于x
 * 当栈顶元素大于x时， 入栈x
 * 
 * 使用一个数组记录入栈元素的值， 入栈的是下标位置i
 */
var nextLargerNodes = function(head) {
  const stack = [];
  let val = [];
  let res = [];
  let i = 0;

  while (head) {
    val.push(head.val);
    res.push(0);

    while (stack.length && val[stack[stack.length - 1]] < head.val) {
      const peek = stack.pop();
      res[peek] = head.val;
    }

    stack.push(i);
    i++;
    head = head.next;
  }

  return res;
};