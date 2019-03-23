class Edge {
  /**
   * Creates a new edge
   * @class
   * @param {Node} destination - The node that this edge connects to
   * @param {number} cost - The cost of travel
   */
  constructor(destination, cost = null) {
    this.destination = destination;
    this.cost = cost;
  }

  /**
   * @returns {Node} - returns the node at the end of the edge
   */
  getDestination() {
    return this.destination;
  }

  /**
   * @returns {number} - returns the cost of traversing the edge
   */
  getCost() {
    return this.cost;
  }

}

module.exports = Edge;