class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.length) this.head = this.tail = newNode;
    else this.tail = this.tail.next = newNode;

    this.length++;

    return this;
  }
}

const list = new SinglyLinkedList();

// Push
list.push('Hello');
list.push('world');
list.push('Hi');

// Pop

// Shift

// Unshift

console.log(list);
