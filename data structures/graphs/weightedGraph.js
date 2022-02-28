class WeightedGraph {
  adjacencyList = {};

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const graph = new WeightedGraph();

// Add vertex
console.log(graph.addVertex('BR'));
console.log(graph.addVertex('PUBG'));
console.log(graph.addVertex('Fortnite'));
console.log(graph.addVertex('Apex'));

// Add edge
console.log(graph.addEdge('BR', 'PUBG', 2));
console.log(graph.addEdge('BR', 'Fortnite', 4));
console.log(graph.addEdge('BR', 'Apex', 6));

console.log(graph.adjacencyList);
