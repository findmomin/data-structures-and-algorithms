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

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      edge => edge !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      edge => edge !== vertex1
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let key of this.adjacencyList[vertex])
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        edge => edge !== vertex
      );

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = vertex => {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor =>
        !visited[neighbor] ? dfs(neighbor) : undefined
      );
    };

    dfs(start);

    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor =>
        !visited[neighbor]
          ? ((visited[neighbor] = true), queue.push(neighbor))
          : undefined
      );
    }

    return result;
  }
}

const graph = new Graph();

// Add vertex
console.log(graph.addVertex('BR'));
console.log(graph.addVertex('PUBG'));
console.log(graph.addVertex('Fortnite'));
console.log(graph.addVertex('Apex'));

// Add edge
console.log(graph.addEdge('BR', 'PUBG'));
console.log(graph.addEdge('BR', 'Fortnite'));
console.log(graph.addEdge('BR', 'Apex'));

// Remove edge
// console.log(graph.removeEdge('BR', 'PUBG'));

// Remove vertex
// console.log(graph.removeVertex('BR'));

// Depth first traverse (recursive)
// console.log(graph.depthFirstRecursive('BR'));

// Breadth first traverse
// console.log(graph.breadthFirstSearch('BR'));

console.log(graph.adjacencyList);
