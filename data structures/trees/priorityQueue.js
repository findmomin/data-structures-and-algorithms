class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values = [];

  enqueue(val) {
    this.values.push(val);

    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (val <= this.values[parentIdx]) break;

      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];

      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (!this.values.length) return max;

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

        if (leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if ((!swap && rightChild > element) || (swap && rightChild > leftChild))
          swap = rightChildIdx;
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }

    return max;
  }
}

const priorityQueue = new PriorityQueue();

// Enqueue
// console.log(priorityQueue.enqueue(41));
// console.log(priorityQueue.enqueue(39));
// console.log(priorityQueue.enqueue(33));
// console.log(priorityQueue.enqueue(18));
// console.log(priorityQueue.enqueue(27));
// console.log(priorityQueue.enqueue(12));
// console.log(priorityQueue.enqueue(55));

/*  [55, 39, 41, 18, 27, 12, 33] */

// Dequeue
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());

console.log(priorityQueue);
