const Node = require('./Node.js');
const Stack = require('../stack/Stack.js');
const Queue = require('../queue/Queue.js');

/** Class representing a binary tree */
class BinaryTree {
  /**
   * @class
   * @property {Node} root - The root of the tree
   */
  constructor() {
    this.root = null;
    this.height = 0;
  }

  /**
   * Inserts a new leaf onto the tree, if it doesn't exist
   * @param {number} value - The value of a new leaf
   * @returns {boolean} True if value inserted. False if value exists
   */
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return true;
    }

    let result = this.searchTree(this.root, value);

    this.height = this.getHeight(this.root);

    return result;
  }
  
  /**
   * Recursively searches the tree and perfoms the action indicated by mode
   * @param {Node} root - The current root
   * @param {number} value - The node being searched for
   * @param {boolean} mode - The operation to complete: false=insert, true=find
   * @returns {boolean} - True if operation completed succesfully
   */
  searchTree(root, value, mode = false) {
    if (value < root.value) {
      if (root.left) {
        return this.searchTree(root.left, value, mode);
      } else {
        if (mode) {
          return false;
        } else {
          root.setLeftNode(value);
          return true;
        }
      }
    } else if (value > root.value) {
      if (root.right) {
        return this.searchTree(root.right, value, mode);
      } else {
        if (mode) {
          return false;
        } else {
          root.setRightNode(value);
          return true;
        }
      }
    } else {
      if (mode) {
        return true;
      } else {
        return false;
      }
    }
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

    return this.searchTree(this.root, value, true);
  }

  /**
   * Prints out the contents on the tree from top to bottom,
   * in order according to depth
   */
  printBreadthFirst() {
    if (!this.root) {
      return;
    }

    let queue = new Queue();

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();
      console.log(currentNode.value);

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
  }

  /**
   * Prints the contents of the tree from left to right,
   * observing priority based on depth
   */
  printDepthFirst() {
    if (!this.root) {
      return;
    }

    let stack = new Stack();

    populateStack(this.root);

    while (!stack.isEmpty()) {
      console.log(stack.pop().value)
    }
    function populateStack(root) {
      if (!root) {
        return;
      }

      populateStack(root.right);
      
      populateStack(root.left);

      stack.push(root);
    }

  }
  
  /**
   * Recursively searches the tree for the last node that has no leaves
   * and then returns the depth of the tree. At each level a leaf is
   * treated as a temporary root. The bottom of the tree is reached
   * when there are no more "roots" that have leaves. The depth is
   * the longest distance travelled between the main root and any other root
   * @param {Node} root - The current leaf acting as root
   */
  getHeight(root) {
    if (!root) {
      return;
    }

    this.getHeight(root.left);

    this.getHeight(root.right);
    
    return root.getHeight();
  }

}

module.exports = BinaryTree;