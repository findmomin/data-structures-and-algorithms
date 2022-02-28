class WeightedGraph {
  adjacencyList = {};

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const graph = new WeightedGraph();

// Add vertex
console.log(graph.addVertex('BR'));
console.log(graph.addVertex('PUBG'));
console.log(graph.addVertex('Fortnite'));
console.log(graph.addVertex('Apex'));

console.log(graph);
