const Queue = require('../src/queue/Queue.js');

let queue = new Queue;

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.isEmpty(), ', ', queue.size(), ', ', queue.peek(), ', ', queue.dequeue());
console.log(queue.isEmpty(), ', ', queue.size(), ', ', queue.peek(), ', ', queue.dequeue());
console.log(queue.isEmpty(), ', ', queue.size(), ', ', queue.peek(), ', ', queue.dequeue());
console.log(queue.isEmpty(), ', ', queue.size(), ', ', queue.peek(), ', ', queue.dequeue());
