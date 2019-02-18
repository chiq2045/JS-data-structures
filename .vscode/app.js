const BinaryTree = require('../src/btree/BinaryTree.js');

let tree = new BinaryTree;

console.log(tree.insert(50));
console.log(tree.insert(25));
console.log(tree.insert(10));
console.log(tree.insert(75));
console.log(tree.contains(50));
console.log(tree.contains(25));
console.log(tree.contains(10));
console.log(tree.contains(75));

console.log(tree);