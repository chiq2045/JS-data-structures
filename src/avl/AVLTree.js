const Node = require('../btree/Node.js');
const BinaryTree = require('../btree/BinaryTree.js');
const Stack = require('../stack/Stack.js');

class AVLTree extends BinaryTree {
  insert(value) {
    let result = super.insert(value);

    this.root = this.balanceTree(this.root);
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
          root = this.rightRightRotation(root);
        } else {
          root = this.rightLeftRotation(root);
        }
      } else {
        if(!root.right) {
          root = this.leftLeftRotation(root);
        } else {
          root = this.leftRightRotation(root);
        }
      }
    } /*else {
      this.balanceTree(root.left);
      this.balanceTree(root.right);
    }*/

    return root;
  }

  rightRightRotation(root) {
    let stack = new Stack();

    stack.push(root);
    root = root.right;

    stack.peek().right = root.left;
    root.left = stack.pop();

    return root;
  }
  
  rightLeftRotation(root) {
    let stack = new Stack();

    stack.push(root);
    root = root.right;

    stack.push(root);
    root = root.left;

    stack.peek().left = root.right;
    root.right = stack.pop();

    stack.peek().right = root.left;
    root = stack.pop();

    root = this.rightRightRotation(root);
    return root;
  }
  
  leftLeftRotation(root) {
    let stack = new Stack();

    stack.push(root);
    root = root.left;
    
    stack.peek().left = root.right;
    root.right = stack.pop();

    return root;
  }


  leftRightRotation(root) {
    let stack = new Stack();

    stack.push(root);
    root = root.left;

    stack.push(root);
    root = root.right;

    stack.peek().right = root.left;
    root.left = stack.pop();

    stack.peek().left = root;
    root = stack.pop();

    root = this.leftLeftRotation(root);
    return root;
  }
}

module.exports = AVLTree;