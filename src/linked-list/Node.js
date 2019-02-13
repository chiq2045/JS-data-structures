/** 
 * Class representing a node in a linked list */
class Node {
  /**
   * Create a node
   * @class
   * @param {number} value - The node's value
   * @property {int} value - The value of the node
   * @property {Node} next - Pointer to the next node. null if there is none
   * @property {Node} prev - Pointer to the previous node. null if there is none.
   */
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;