const Node = require('./Node.js');

class Graph {
  constructor() {
    this.nodes = {};
  }

  /**
   * Adds a node to the graph
   * @param {String} value - the node key (or value)
   * @returns {Boolean} - false if the node is not added
   */
  addNode(value) {
    let node = new Node(value);

    if (this.containsNode(value)) {
      return false;
    }

    this.nodes[value] = node;

    return true;
  }

  /**
   * Remove node and all references to node from graph
   * @param {String} value - the node to be removed
   * @returns {Boolean} - true if node removed
   */
  removeNode(value) {
    let self = this;
    let result = false;
    let nodes = Object.keys(self.nodes);

    nodes.forEach(function(node) {
      self.disconnectNodes(node, value);
      if (self.nodes[node].value === value) {
        delete self.nodes[node];
        result = true;
      }
    })

    return result;
  }

  /**
   * Connect two nodes together
   * @param {String} v1 - the value of the subject node
   * @param {String} v2 - the value of the connecting node
   * @param {number} cost - the cost of connecting nodes
   * @returns {Boolean} - true if the nodes are connected
   */
  connectNodes(v1, v2, cost) {
    if (!this.containsNode(v1) || !this.containsNode(v2)) {
      return false;
    }

    this.nodes[v1].addEdge(v2, cost);

    return true;
  }

  /**
   * Checks to see if the graph contains a node
   * @param {String} value - the value to look for
   * @returns {Boolean} - true if the node exists
   */
  containsNode(value) {
    let result = false;

    if (this.nodes[value]) {
      result = true;
    }

    return result;
  }

  /**
   * Disconnects both nodes from one another
   * @param {String} v1 - first node
   * @param {String} v2 - second node
   * @returns {Boolean} - true if they are disconnected
   */
  disconnectNodes(v1, v2) {
    let result = false;

    if (this.nodes[v1]) {
      this.nodes[v1].removeEdge(v2);
      result = true;
    }
    
    if (this.nodes[v2]) {
      this.nodes[v2].removeEdge(v1);
      result = true;
    }

    return result;
  }

  /**
   * Finds the shortest path between two nodes
   * @param {String} v1 - the starting node
   * @param {String} v2 - the ending node
   * @returns {Object} - the cost and the path taken
   */
  findShortestPath(v1, v2) {
    let self = this;
    let table =  new Table();
    
    table.rows[v1].setPath(null);
    table.rows[v1].setCost(0);
    table.rows[v1].setKnown(true);
    
    function shortestPath(node, endNode, cost) {
      let totalCost = cost;
      let nodes = Object.keys(this.nodes);
      let edges = self.nodes[node].getEdges();
      nodes.forEach(function(node) {
        table.addRow(node);
      });
      edges.forEach(function (edge) {
        let cost = shortestPath(edge, v2, cost + self.nodes[node].getEdge[edge].getCost());
      });
      
    }
  }

}

/** Creates a row for a table */
class Row {
  /**
   * @class
   * @param {String} node - the name of the node
   */
  constructor(node) {
    this.node = node;
    this.known = false;
    this.totalCost = Infinity;
    this.path = null;
  }

  /**
   * Sets the path to the previous node visited
   * @param {String} node - previous node
   */
  setPath(node) {
    this.path = node;
  }

  /**
   * Finds the last node that was visited to get this path
   * @returns {String} - the path
   */
  getPath() {
    return this.path;
  }

  /**
   * Gets the cost to get to node
   * @returns {number} - the cost to travel to node
   */
  getCost() {
    return this.cost
  }

  /**
   * Returns the total cost to get to node
   * @param {number} cost - the cost
   */
  setCost(cost) {
    this.totalCost = cost;
  }

  /**
   * Sets known to given state
   * @param {Boolean} state - the state to set known to
   */
  setKnown(state) {
    this.known = state;
  }
}

/** Creates a table of rows */
class Table {
  /**
   * @class
   */
  constructor() {
    this.rows = {}
  }

  /**
   * Adds a row to the table
   * @param {String} node - name of row to be added
   */
  addRow(node) {
    if (!this.rows[node]) {
      this.rows[node] = new Row(node);
    }
  }

}
module.exports = Graph;