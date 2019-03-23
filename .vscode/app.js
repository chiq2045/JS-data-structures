const Graph = require('../src/graph/Graph.js');

let graph = new Graph();

graph.addNode('B');
graph.addNode('A');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.connectNodes('A', 'B', 3);
graph.connectNodes('A', 'D', 2);
graph.connectNodes('B', 'A', 3);
graph.connectNodes('B', 'C', 2);
graph.connectNodes('B', 'E', 1);
graph.connectNodes('C', 'B', 2);
graph.connectNodes('C', 'E', 3);
graph.connectNodes('D', 'A', 2);
graph.connectNodes('D', 'E', 3);
graph.connectNodes('D', 'F', 1);
graph.connectNodes('E', 'B', 1);
graph.connectNodes('E', 'C', 3);
graph.connectNodes('E', 'D', 3);
graph.connectNodes('E', 'F', 1);
graph.connectNodes('F', 'D', 1);
graph.connectNodes('F', 'E', 1);

console.log(graph.nodes);
console.log(graph.nodes.A);

