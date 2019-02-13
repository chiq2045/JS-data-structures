const Node = require('./Node.js');
let privateProperties = new WeakMap(); //

/**
 * Class representing a linked list
 */
class LinkedList {
  /**
   * @class
	 * @param {boolean} doublyLinked - True if this is a doubly linked list
   * @property {Node} head - The first node in the list. null if empty
   * @property {int} length - The length of the node
   */
  constructor(doublyLinked = false) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		privateProperties.set(this, {doublyLinked: doublyLinked});
  }

	/**
	 * @description Creates a new node with given value
	 * @param {int} value - The value of the new node 
	 */
  append(value) {
    let node = new Node(value);
		
    if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;
    } else {
			let currentNode = this.head;
      while(currentNode.next) {
				currentNode = currentNode.next;
      }
			currentNode.next = node;
			if (privateProperties.get(this).doublyLinked) {
				node.prev = this.tail;
			}
			this.tail = node;
    }
		
		this.length++;
  }

	/**
	 * @description Creates a new node at the beginning of the linked list
	 * @param {int} value - The value of the created node
	 */
  prepend(value) {
		let node = new Node(value);
		
		node.next = this.head;
		this.head = node;
		if (!this.tail) {
			this.tail = node;
		} else{
			if (privateProperties.get(this).doublyLinked) {
				node.next.prev = node;
			}
		}
		
		this.length++;
  }

	/**
	 * @description Removes the first node in the linked list.
	 * @return {int} - Returns the value of the node that was removed
	 */
	removeFirst() {
		let removedNode = this.head;
		
		if (removedNode === null) {
			return null;
		}

		if (removedNode.next === null) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedNode.next;
			if (privateProperties.get(this).doublyLinked) {
				removedNode.next.prev = null;
			}
			removedNode.next = null;
		}
		this.length--;

		return removedNode.value;
	}

	/**
	 * @description Removes the last element in the linked list
	 * @return {int} - The value of the removed node. null when empty
	 */
	removeLast() {
		if (this.head === null) {
			return null;
		}

		if (privateProperties.get(this).head) {
			let removedNode = this.tail;
			
			if (this.head === this.tail) {
				this.tail = null;
				this.head = null;
			} else {
				this.tail = removedNode.prev;
				this.tail.next = null;
			}
			removedNode.prev = null;

			this.length--;

			return removedNode.value;
		} else {
			let currentNode = this.head;
			let removedNode = currentNode;
		
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				removedNode.next = null;

				this.length--;

				return removedNode.value;
			}

			for (let i = 0; i < this.length; i++) {
				if (currentNode.next) {
					removedNode = currentNode.next;
					if (!removedNode.next) {
						this.tail = currentNode;
						currentNode.next = null;
						this.length--;
						return removedNode.value;
					}
				}

				currentNode = currentNode.next;
			}
		}
	}

	/**
	 * @description Inserts a node of given value at given index
	 * @param {int} value - The value of the node to insert
	 * @param {int} index - The index that the node should be inserted at
	 */
	insertAt(value, index) {
		if (index < 0 || index > this.length ) {
			throw Error('index is out of range');
		}

		if (!this.head || index === 0) {
			this.prepend(value);
			return;
		}

		if (index === this.length) {
			this.append(value);
			return;
		}

		let currentNode = this.head;

		for (let i = 0; i < this.length; i++) {
			if (currentNode && i === index) {
				let node = new Node(value);
				
				node.next = currentNode.next;
				if (privateProperties.get(this).doublyLinked) {
					node.prev = currentNode;
					currentNode.next.prev = node;
				}
				currentNode.next = node;
				
				this.length++;
			}
		}
	}

	/**
	 * @description Removes a node at given index value
	 * @param {int} index - The index of the node that should be removed
	 * @returns {int} The value of the removed node
	 */
	removeAt(index) {
		if (index < 0 || index >= this.length) {
			throw Error;
		}

		if (index === 0) {
			return this.removeFirst();
		}

		if (index === this.length-1) {
			return this.removeLast();
		}

		let currentNode = this.head;

		for (let i = 0; i < this.length; i++) {
			if (currentNode && i === index) {
				let removedNode = currentNode.next;
				if (privateProperties.get(this).doublyLinked) {
					removedNode.next.prev = currentNode;
					removedNode.prev = null;
				}
				currentNode.next = removedNode.next;
				removedNode.next = null;

				this.length--;

				return removedNode.value;
			}
		}
	}

	/**
	 * @description Prints out the linked list in full
	 */
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

	/**
	 * @description Throws an error if the index given is outside the range of the list
	 * @param {int} index - The referenced index value
	 */
  errorCheck(index = 0) {
		if (index < 0 || index >= this.length) {
			throw Error;
		}
	}

  /**
	 * @description Returns the value at index
	 * @param {int} index - The index to search for
	 * @return {int} - Value at index 
	 */
	get(index) {
		this.errorCheck(index);

		let currentNode = this.head;

		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}

		return currentNode.value;
	}

	/**
	 * @description Return the first index with given value
	 * @param {int} value - The value to search for
	 * @param {Object} node - A node that is being searched for
	 * @return {int} - The index of the node
	 * 
	 */
	find(value, node = this.head) {
		let currentNode = node;

		if (currentNode === null) {
			return -1;
		}

		for (let i = 0; i < this.length; i++) {
			if (currentNode.value === value) {
				return i;
			}
			node = currentNode;
			currentNode = currentNode.next;
		}

		return -1;
	}

}

module.exports = LinkedList;