const Node = require('./Node.js');

/**
 * Class representing a linked list
 */
class LinkedList {
  /**
   * @class
   * @property {Node} head - The first node in the list. null if empty.
   * @property {int} length - The length of the node
   */
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
	/**
	 * @description Creates a new node with given value
	 * @param {int} value - The value of the new node 
	 */
  append(value) {
    let node = new Node(value);
    this.length++;
  
    if (!this.head) {
      this.head = node;

    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

	/**
	 * @description Creates a new node at the beginning of the linked list
	 * @param {int} value - The value of the created node
	 */
  prepend(value) {
		let node = new Node(value);
		this.length++;
  
    node.next = this.head;
		this.head = node;
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
		} else {
			this.head = removedNode.next;
		}
		this.length--;

		return removedNode.value;
	}

	/**
	 * @description Removes the last element in the linked list
	 * @return {int} - The value of the removed node. null when empty
	 */
	removeLast() {
		let currentNode = this.head;
		let removedNode = currentNode;

    if (currentNode === null) {
			return null;
		}
		
		if (currentNode.next === null) {
			removedNode = currentNode;
			this.head = currentNode.next
			this.length--;
			return removedNode.value;
		}

		for (let i = 0; i < this.length; i++) {
			if (currentNode.next) {
				removedNode = currentNode.next;
				if (!removedNode.next) {
					currentNode.next = null;
					this.length--;
					return removedNode.value;
				}
			}

			currentNode = currentNode.next;
		}
	}

	/**
	 * @description Inserts a node of given value at given index
	 * @param {int} value - The value of the node to insert
	 * @param {int} index - The index that the node should be inserted at
	 */
	insertAt(value, index) {
		if (index < 0 || index > this.length ) {
			throw Error;
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
				this.length++;

				node.next = currentNode.next;
				currentNode.next = node;
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
				currentNode.next = removedNode.next;
				this.length--;

				return removedNode.value;
			}
		}
	}


}

module.exports = LinkedList;