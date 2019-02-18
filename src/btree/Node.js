/**
 * Class representing a node with two children
 */
class Node {
  /**
   * @class
   * @param {int} value - Value of node
   * @property {int} value - Value of node
   * @property {Node} left - Pointer to left child
   * @property {Node} right - Pointer to right child
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;