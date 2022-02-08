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

  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) this.head = this.tail = null;

    return current;
  }
}

const list = new SinglyLinkedList();

// Push
list.push('Hello');
list.push('world');
list.push('Hi');

// Pop
list.pop();

// Shift

// Unshift

console.log(list);
