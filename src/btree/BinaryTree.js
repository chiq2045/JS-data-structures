const Node = require('./Node.js');

/** Class representing a binary tree */
class BinaryTree {
  /**
   * @class
   * @property {Node} root - The root of the tree
   * @property {int} height - The height of the tree
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new leaf onto the tree, if it doesn't exist
   * @param {number} value - The value of a new leaf
   * @returns {boolean} True if value inserted. False if value exists
   */
  insert(value) {
    let child = new Node(value);

    if (!this.root) {
      this.root = child;
      return true;
    }

    let currentLeaf = this.root;
    
    return this.addLeaf(currentLeaf, child);
  }

  /**
   * Searches the tree for a value
   * @param {number} value - The value to search for
   * @returns {boolean} - True if the value exists. False otherwise
   */
  contains(value) {
    if (!this.root) {
      return false;
    }
    
    let currentLeaf = this.root;

    return this.findLeaf(currentLeaf, value);
  }

  /**
   * Recursively searches the tree for an empty spot to place the new leaf.
   * For each leaf, if the value of the new leaf is less than that of the
   * current leaf, it searches the left leaf if there is one. If there is
   * none, it adds a new leaf there. Vice versa if the value of the new
   * leaf is greater than the value of the current leaf. If it is the same
   * it does not add a leaf
   * @param {Node} currentLeaf - the current leaf being searched through
   * @param {Node} newChild - The new leaf to be added
   * @returns {boolean} - True if added. False if leaf already exists
   */
  addLeaf(currentLeaf, newChild) {
    if (newChild.value < currentLeaf.value) {
      if (currentLeaf.left) {
        return this.addLeaf(currentLeaf.left, newChild);
      } else {
        currentLeaf.left = newChild;
        return true;
      }
    } else if (newChild.value > currentLeaf.value) {
      if (currentLeaf.right) {
        return this.addLeaf(currentLeaf.right, newChild);
      } else {
        currentLeaf.right = newChild;
        return true;
      }
    } else {
      return false;      
    }
  }

  /**
   * Recursively searches the tree leaf by leaf depending on the value
   * being searched for. If the value is less than that of the current
   * leaf, search the left leaf; if greater, search the right leaf
   * @param {Node} currentLeaf - The current leaf being searhced
   * @param {Node} value - The value being searched for
   * @returns {boolean} - True if the leaf is found. False otherwise
   */
  findLeaf(currentLeaf, value) {
    if (value < currentLeaf.value && currentLeaf.left) {
      return this.findLeaf(currentLeaf.left, value);
    } else if (value > currentLeaf.value && currentLeaf.right) {
      return this.findLeaf(currentLeaf.right, value);
    } else if (value === currentLeaf.value) {
      return true;     
    } else {
      return false;
    }
  }

  
}

module.exports = BinaryTree;