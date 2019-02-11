const Node = require('./Node')

/**
 * Class representing a singly linked list
 */
class LinkedList {
  /**
   * Create a linked list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node to the tail of the linked list
   * @param {number} value - The value of the new node
   */
  append(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      /*let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }*/

      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  /**
   * Adds a new nod the the head of the linked list
   * @param {number} value The value of the new node
   */
  prepend(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  /**
   * Removes any node with the value given
   * @param {number} value - The value of the node to be removed
   */
  remove(value) {
    let currentNode = this.head;
    
    if (!currentNode) {
      throw Error('The list is empty');
    }

    if (currentNode.value === value) {
      this.head = currentNode.next;
      return;
    }

    while (currentNode.next) {
      if (currentNode.next === value) {
        currentNode.next = currentNode.next.next;
      }
    }

    return;
  }
  
  /**
   * Returns an error if the index is out of range
   * @param {number} index - The index of the node being searched for
   */
  rangeCheck(index) {
    if (index <= 0) {
      throw Error(`$(index) <=0.`);
    }
    if (index > this.length) {
      throw Error(`$(index) > size of list.`);
    }
  }

  insertAt(index, value) {
    rangeCheck(index);
    
    let node = new Node(value);


  }
}