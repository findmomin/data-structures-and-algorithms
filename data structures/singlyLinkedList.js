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

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;

    this.head = oldHead.next;
    this.length--;

    if (!this.length) this.tail = null;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let currentNode = this.head;

    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
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

    const foundNode = this.get(idx - 1);
    const newNode = new Node(val);

    newNode.next = foundNode.next;
    foundNode.next = newNode;
    this.length++;

    return true;
  }
}

const list = new SinglyLinkedList();

// Push
list.push('Hello');
list.push('world');
list.push('Hi');

// Pop
// list.pop();

// Shift
// list.shift();
// list.shift();
// list.shift();

// Unshift
// list.unshift('First');

// Get
// console.log(list.get(2));

// Set
// console.log(list.set(2, 'surprize'));

// Insert
console.log(list.insert(3, 'guys!'));

// Remove

// Reverse

console.log(list);
