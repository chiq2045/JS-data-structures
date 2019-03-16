const Node = require('../btree/Node.js');
const BinaryTree = require('../btree/BinaryTree.js');
const Stack = require('../stack/Stack.js');

class AVLTree extends BinaryTree {
  insert(value) {
    let result = super.insert(value);

    this.balanceTree(this.root);
    return result;
  }

  /**
   * Checks to see if the tree is balanced at the current node
   * @param {Node} root - the current root 
   */
  isBalanced(root) {
    if (!root) {
      return;
    }

    let delta = root.getLeftHeight() - root.getRightHeight();
    if (delta >= 2 || delta <= -2) {
      return false;
    } else {
      return true;
    }
  }

  balanceTree(root) {
    if (!root) {
      return;
    }

    if (!this.isBalanced(root)) {
      if (root.getLeftHeight() < root.getRightHeight()) {
        if (!root.left) {
          this.rightRightRotation(root);
        } else {
          this.rightLeftRotation(root);
        }
      } else {
        if(!root.right) {
          this.leftLeftRotation(root);
        } else {
          this.leftRightRotation(root);
        }
      }
    } else {
      this.balanceTree(root.left);
      this.balanceTree(root.right);
    }
  }

  rightRightRotation(root) {
    let a = root;
    let b = a.right;

    a.right = b.left;
    b.left = a;
  }
  
  rightLeftRotation(root) {
    let b = root.right;
    let c = b.left;

    c.left = b.right;
    b.right = c;
    this.rightRightRotation(root);
  }
  
  leftLeftRotation(root) {
    let a = root;
    let b = a.left;

    a.left = b.right;
    b.right = a;
  }

  leftRightRotation(root) {
    let b = root.left;
    let c = b.right;

    c.right = b.left;
    b.left = c;
    this.leftLeftRotation(root);
  }
}

module.exports = AVLTree;