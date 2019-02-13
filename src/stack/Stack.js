const LinkedList = require('../linked-list/LinkedList.js');

/** Impliments a stack object FILO */
class Stack extends LinkedList {
  /**
   * @class
   * @param {Node} head - The first item on the stack
   * @param {int} length - The size of the stack
   */
  constructor(head = null, length = 0) {
    super(head,length);
  }

  /**
   * @description Pushes a value onto the top of the stack
   * @param {int} value - The value to be pushed
   */
  push(value) {
    this.prepend(value);
  }

  /**
   * @description Pops a value off the top of the stack
   * @returns {int} - The value of the node at the top of the stack
   */
  pop() {
    return this.removeFirst();
  }

  /**
   * @description Returns the value at the top of the stack
   * @returns {int} - The value at the top of the stack
   */
  peek() {
    if (this.head) {
      return this.head.value;
    } else {
      return null;
    }
  }

  /**
   * @description Returns the size of the stack
   * @returns {int} - Size of stack
   */
  size() {
    return this.length;
  }

  /**
   * @description Checks if stack is empty
   * @returns {boolean} - True if empty
   */
  isEmpty() {
    if (!this.head || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;