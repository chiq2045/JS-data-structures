const AVLTree = require('../src/avl/AVLTree.js');

let tree = new AVLTree();

console.log(tree.insert(50));
console.log(tree.insert(25));
console.log(tree.insert(10));
// console.log(tree.insert(75));
// console.log(tree.insert(75));
// console.log(tree.insert(100));
// console.log(tree.insert(65));
// console.log(tree.insert(30));
// console.log(tree.insert(1));
console.log(tree);