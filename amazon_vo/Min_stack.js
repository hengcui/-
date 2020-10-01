
/**
 * 维护两个栈的做法
 */
var MinStack = function() {
  //维护两个栈，stack 用来存栈的值，minStack用来存对应的最小值
  this.stack = [];
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  //当入栈元素x小于栈顶元素，说明x是当前栈的最小值
  if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x) this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const x = this.stack.pop();
  if (this.minStack.length && x === this.minStack[this.minStack.length - 1]) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

//只使用一个栈的做法， 当push(x) <= min， 的时候， 就将min push入栈， 当出栈的时候， 如果=== min, 那么就min = pop
var MinStack = function() {
  this.stack = new Stack;
  this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x <= this.min) {
    this.stack.push(this.min);
    this.min = x;
  } 

  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const pop = this.stack.pop();
  if (pop === this.min) {
    this.min = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};