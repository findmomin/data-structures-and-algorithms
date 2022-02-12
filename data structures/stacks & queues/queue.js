class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

const queue = new Queue();

// Enqueue
console.log(queue.enqueue('Hello'));
console.log(queue.enqueue('world'));

// Dequeue
// console.log(queue.dequeue());

console.log(queue);
