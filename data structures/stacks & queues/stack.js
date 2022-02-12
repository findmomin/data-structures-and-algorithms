class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.size) this.first = this.last = newNode;
    else {
      const oldNode = this.first;
      this.first = newNode;
      this.first.next = oldNode;
    }

    return ++this.size;
  }
}

const stack = new Stack();

// Push
console.log(stack.push('Hello'));
console.log(stack.push('world'));

console.log(stack);
