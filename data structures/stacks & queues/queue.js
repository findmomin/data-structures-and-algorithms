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

  dequeue() {
    if (!this.size) return null;

    const temp = this.first;

    if (this.size === 1) this.last = null;

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const queue = new Queue();

// Enqueue
console.log(queue.enqueue('Hello'));
console.log(queue.enqueue('world'));

// Dequeue
// console.log(queue.dequeue());

console.log(queue);
