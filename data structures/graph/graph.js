class Graph {
  adjacencyList = {};

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const graph = new Graph();

// Add vertex
console.log(graph.addVertex('Ryan'));

console.log(graph);
