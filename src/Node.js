/** 
 * Class representing a node in a singly linked list */
class Node {
  /**
   * Create a node
   * @class
   * @param {number} value - The node's value
   * @property {int} value - The value of the node
   * @property {Node} next - Pointer to the next node. null if there is none
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;