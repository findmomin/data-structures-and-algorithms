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

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.size) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
}

const queue = new Queue();

// Enqueue
console.log(queue.enqueue('Hello'));
console.log(queue.enqueue('world'));

// Dequeue
// console.log(queue.dequeue());

console.log(queue);
