class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values = [];

  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);

    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (newNode.priority >= this.values[parentIdx].priority) break;

      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];

      idx = parentIdx;
    }
  }
}

const priorityQueue = new PriorityQueue();

// Enqueue
console.log(priorityQueue.enqueue(41, 1));
console.log(priorityQueue.enqueue(41, 5));
console.log(priorityQueue.enqueue(41, 2));
console.log(priorityQueue.enqueue(41, 3));
console.log(priorityQueue.enqueue(41, 4));

/* [55, 39, 41, 18, 27, 12, 33] */

// Dequeue
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());

console.log(priorityQueue.values);
