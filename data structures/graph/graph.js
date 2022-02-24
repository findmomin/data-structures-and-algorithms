class Graph {
  adjacencyList = {};

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const graph = new Graph();

// Add vertex
console.log(graph.addVertex('BR'));
console.log(graph.addVertex('PUBG'));
console.log(graph.addVertex('Fortnite'));

// Add edge
console.log(graph.addEdge('BR', 'PUBG'));
console.log(graph.addEdge('BR', 'Fortnite'));
console.log(graph.addEdge('BRs', 'Fortnite'));

console.log(graph);
