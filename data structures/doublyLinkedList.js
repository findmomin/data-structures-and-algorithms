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

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let count = idx <= this.length / 2 ? 0 : this.length - 1;
    let foundNode = idx <= this.length / 2 ? this.head : this.tail;

    while (count !== idx) {
      idx <= this.length / 2
        ? (foundNode = foundNode.next)
        : (foundNode = foundNode.prev);
      idx <= this.length / 2 ? count++ : count--;
    }

    return foundNode;
  }

  set(idx, val) {
    const foundNode = this.get(idx);

    foundNode ? (foundNode.val = val) : null;

    return !!foundNode;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return true;
  }
}

const list = new DoublyLinkedList();

// Push
list.push('Hello,');
list.push('World!');

// Pop
// console.log(list.pop());

// Shift
// console.log(list.shift());

// Unshift
// console.log(list.unshift('first'));

// Get
// console.log(list.get(1));

// Set
// console.log(list.set(0, 'Bye,'));

// Insert
// console.log(list.insert(1, 'real'));

// Remove

console.log(list);
