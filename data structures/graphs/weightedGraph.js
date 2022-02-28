import { PriorityQueue } from '../trees/priorityQueue.js';

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

  shortestPath(start, end) {
    if (!this.adjacencyList[start] || !this.adjacencyList[end]) return null;

    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let currentNode;

    // Building the initial distances and previous
    for (let vertex in this.adjacencyList) {
      if (vertex === start) (distances[vertex] = 0), queue.enqueue(vertex, 0);
      else (distances[vertex] = Infinity), queue.enqueue(vertex, Infinity);

      previous[vertex] = null;
    }

    while (queue.values.length) {
      currentNode = queue.dequeue().val;

      // If we find the end, return the path from start to end
      if (currentNode === end) {
        const result = [];
        let pointer = previous[end];

        while (pointer) result.push(pointer), (pointer = previous[pointer]);

        return result.reverse().concat(end);
      }

      // Build distances and previous
      for (let neighbor of this.adjacencyList[currentNode]) {
        const distance = distances[currentNode] + neighbor.weight;

        // Enqueue in queue with new priority
        if (distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
          previous[neighbor.node] = currentNode;
          queue.enqueue(neighbor.node, distance);
        }
      }
    }
  }
}

const graph = new WeightedGraph();

// Add vertex
console.log(graph.addVertex('A'));
console.log(graph.addVertex('B'));
console.log(graph.addVertex('C'));
console.log(graph.addVertex('D'));
console.log(graph.addVertex('E'));
console.log(graph.addVertex('F'));

// Add edge
console.log(graph.addEdge('A', 'B', 4));
console.log(graph.addEdge('A', 'C', 2));
console.log(graph.addEdge('B', 'E', 3));
console.log(graph.addEdge('C', 'D', 2));
console.log(graph.addEdge('C', 'F', 4));
console.log(graph.addEdge('D', 'E', 3));
console.log(graph.addEdge('D', 'F', 1));
console.log(graph.addEdge('E', 'F', 1));

// Dijkstra's shortest path algorithm
console.log(graph.shortestPath('A', 'E'));

// console.log(graph.adjacencyList);
