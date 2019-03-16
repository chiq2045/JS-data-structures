/**
 * Class representing a node with two children
 */
class Node {
  /**
   * @class
   * @param {number} value - Value of node
   * @property {number} value - Value of node
   * @property {Node} left - Pointer to left child
   * @property {Node} right - Pointer to right child
   * @property {number} height - Height of child from bottom of tree
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getLeftHeight() {
    if (this.left) {
      return Math.max(this.left.getLeftHeight(), this.left.getRightHeight()) + 1;
    } else {
      return -1;
    }
  }

  getRightHeight() {
    if (this.right) {
      return Math.max(this.right.getLeftHeight(), this.right.getRightHeight()) + 1;
    } else {
      return -1;
    }
  }

  setLeftNode(value) {
    this.left = new Node(value);
  }

  setRightNode(value) {
    this.right = new Node(value);
  }

  getHeight() {
    return Math.max(this.getLeftHeight(), this.getRightHeight()) + 1;
  }
}

module.exports = Node;