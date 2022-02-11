class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.length) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = poppedNode.prev;
      this.tail.next = poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = oldHead.next;
      this.head.prev = oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }
}

const list = new DoublyLinkedList();

// Push
list.push('Hello,');
list.push('World!');

// Pop
// console.log(list.pop());

// Shift
console.log(list.shift());

console.log(list);
