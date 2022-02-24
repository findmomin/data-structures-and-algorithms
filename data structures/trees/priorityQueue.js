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

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (!this.values.length) return min;

    this.values[0] = end;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }

    return min;
  }
}

const priorityQueue = new PriorityQueue();

// Enqueue
console.log(priorityQueue.enqueue(41, 1));
console.log(priorityQueue.enqueue(41, 5));
console.log(priorityQueue.enqueue(41, 2));
console.log(priorityQueue.enqueue(41, 3));
console.log(priorityQueue.enqueue(41, 4));

/* [1, 3, 2, 5, 4] */

// Dequeue
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());

console.log(priorityQueue.values);
