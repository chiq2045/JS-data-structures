const LinkedList = require('../linked-list/LinkedList');

/** Class representing a queue FIFO*/
class Queue extends LinkedList {
  /**
   * @class
   * @param {Node} head - A pointer to the front of the queue
   * @param {int} length - The size of the queue
   */
  constructor(head = null, length = 0) {
    super(head, length);
  }

  /**
   * @description Adds a node to the back of the queue
   * @param {int} value - The value of the node
   */
  enqueue(value) {
    super.append(value);
  }

  /**
   * @description Removes the node at the front of the queue
   * @returns {int} - The value of the removed node
   */
  dequeue() {
    return this.removeFirst();
  }

  /**
   * @description Retruns the value of the node at the front of the queue
   * @returns {int} - The value of the node
   */
  peek() {
    if (this.head){
      return this.head.value;
    } else {
      return this.head;
    }
  }

  /**
   * @description Returns the size of the queue
   * @returns {int} - The size of the queue
   */
  size() {
    return this.length;
  }

  /**
   * @description Checks if the queue is empty
   * @returns {boolean} - True if empty
   */
  isEmpty() {
    if (this.length === 0 || !this.head) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;