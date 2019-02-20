const Node = require('./Node.js');
const LinkedList = require('../linked-list/LinkedList.js');

/** Class representing a binary tree */
class BinaryTree {
  /**
   * @class
   * @property {Node} root - The root of the tree
   * @property {int} depth - The depth of the tree
   */
  constructor() {
    this.root = null;
    this.depth = 0;
  }

  /**
   * Inserts a new leaf onto the tree, if it doesn't exist
   * @param {number} value - The value of a new leaf
   * @returns {boolean} True if value inserted. False if value exists
   */
  insert(value) {
    let leaf = new Node(value);

    if (!this.root) {
      this.root = leaf;
      this.depth = this.updateDepth(this.root);
      return true;
    }

    let added = addLeaf(this.root, leaf);
    this.depth = this.updateDepth(this.root);
    return added;

    /**
     * Recursively searches the tree for an empty spot to place the new leaf.
     * For each leaf, if the value of the new leaf is less than that of the
     * current leaf, it searches the left leaf if there is one. If there is
     * none, it adds a new leaf there. Vice versa if the value of the new
     * leaf is greater than the value of the current leaf. If it is the same
     * it does not add a leaf
     * @param {Node} root - the current leaf being searched through
     * @param {Node} newLeaf - The new leaf to be added
     * @returns {boolean} - True if added. False if leaf already exists
     */
    function addLeaf(root, newLeaf) {
      if (newLeaf.value < root.value) {
        if (root.left) {
          return addLeaf(root.left, newLeaf);
        } else {
          root.left = newLeaf;
          return true;
        }
      } else if (newLeaf.value > root.value) {
        if (root.right) {
          return addLeaf(root.right, newLeaf);
        } else {
          root.right = newLeaf;
          return true;
        }
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
    
    return findLeaf(this.root, value);

    /**
     * Recursively searches the tree leaf by leaf depending on the value
     * being searched for. If the value is less than that of the current
     * leaf, search the left leaf; if greater, search the right leaf
     * @param {Node} root - The current leaf being searhced
     * @param {Node} value - The value being searched for
     * @returns {boolean} - True if the leaf is found. False otherwise
     */
    function findLeaf(root, value) {
      if (value < root.value && root.left) {
        return findLeaf(root.left, value);
      } else if (value > root.value && root.right) {
        return findLeaf(root.right, value);
      } else if (value === root.value) {
        return true;     
      } else {
        return false;
      }
    }
  }

  /**
   * Prints out the contents on the tree from top to bottom,
   * in order according to depth
   */
  printBreadthFirst() {
    if (!this.root) {
        return;
    }
    
    let list = new LinkedList();
    for (let depth = this.depth; depth >= 0; depth--) {
      addToListFromBottom(this.root, depth);
    }

    function addToListFromBottom(root, depth) {
      let d = depth;
      if (root.right) {
        addToListFromBottom(root.right, d-1);
      }
      if (root.left) {
        addToListFromBottom(root.left, d-1);
      }
      if (d === 0) {
        list.prepend(root.value);
      }
    }

    list.print()
  }

  /**
   * Prints the contents of the tree from left to right,
   * observing priority based on depth
   */
  printDepthFirst() {
    if (!this.root) {
      return;
    }

    let list = new LinkedList();
    addToLostFromLeft(this.root);

    function addToLostFromLeft(root) {
      list.append(root.value);
      if (root.left) {
        addToLostFromLeft(root.left);
      }
      if (root.right) {
        addToLostFromLeft(root.right)
      }
    }

    list.print();
  }
  
  /**
   * Recursively searches the tree for the last node that has no leaves
   * and then returns the depth of the tree. At each level a leaf is
   * treated as a temporary root. The bottom of the tree is reached
   * when there are no more "roots" that have leaves. The depth is
   * the longest distance travelled between the main root and any other root
   * @param {Node} root - The current leaf acting as root
   * @returns {number} - The current depth of the tree
   */
  updateDepth(root) {
    let depth = 0;
    let leftDepth = 0;
    let rightDepth = 0;
  
    if (!root) {
      return depth;
    } else {
      depth = 1;
    }
  
    if (root.left) {
      leftDepth = this.updateDepth(root.left);
    }
  
    if (root.right) {
      rightDepth = this.updateDepth(root.right);
    }
  
    depth += Math.max(leftDepth, rightDepth);
    return depth;
  }

}

module.exports = BinaryTree;