const LinkedList = require('../src/linked-list/LinkedList.js');

let list = new LinkedList(true);

list.prepend(2);
list.append(3);
// list.append(10);

console.log(list.removeLast());
console.log(list.head);
// list.insertAt(4, 2);
// console.log(list.head);
// list.removeAt();
// console.log(list.head);
