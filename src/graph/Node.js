const Edge = require('./Edge.js');

class Node {
  /**
   * Creates a new node
   * @class
   * @param {string} value - The name of the node
   */
  constructor(value) {
    this.value = value;
    this.edges = {};
    this.visited = false;
  }

  /**
   * Adds a new edge
   * @param {Node} destination - The node being added
   * @param {number} cost - The cost of travel
   */
  addEdge(destination, cost) {
    let edge = new Edge(destination, cost);
    this.edges[destination] = edge;
  }

  /**
   * Searches the edges for a certain node
   * @param {Node} destination - the node being searched for
   * @returns {boolean} - true if the destination exists in edges
   */
  containsEdge(destination) {
    return this.edges.some(function(edge) {
      return edge.destination === destination;
    });
  }

  /**
   * 
   * @param {Node} destination - the nodes to be found
   * @returns {Array} - an array of all edges connected to destination
   */
  findEdge(destination) {
    return this.edges.filter(function(edge) {
      return edge.destination === destination;
    });
  }

  /**
   * Deletes an edge from the list of edges
   * @param {String} destination - the edge to be deleted
   */
  removeEdge(destination) {
    if (this.edges[destination]) {
      delete this.edges[destination];
    }
  }

  setVisited() {
    this.visited = true;
  }

  setNotVisited() {
    this.visited = false;
  }

  getVisited() {
    return this.visited;
  }

  /**
   * Retruns an array of the keys of the edges
   * @returns {Array} - keys of edges
   */
  getEdges() {
    let edges = Object.keys(this.edges);
    let result = [];

    edges.forEach(function(edge) {
      result[edge] = edge;
    });

    return result;
  }

  /**
   * Returns an edge
   * @param {String} edge - the edge being searched for
   * @returns {Edge} - the actual edge reference 
   */
  getEdge(edge) {
    return this.edges[edge];
  }
}

module.exports = Node;