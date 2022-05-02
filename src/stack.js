const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.len = 0;
  }
  push(element) {
    this.arr[this.len] = element;
    this.len += 1;
  }

  pop() {
    if (this.len > 0) {
      this.len -= 1;
      return this.arr[this.len];
    } else return undefined;
  }

  peek() {
    return this.arr[this.len - 1];
  }
}

module.exports = {
  Stack
};
