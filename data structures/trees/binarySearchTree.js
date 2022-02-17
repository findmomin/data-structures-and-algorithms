class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) return undefined;

      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
      else found = true;
    }

    return found ? current : found;
  }

  breadthFirstSearch() {
    const result = [],
      queue = [this.root];
    let node = this.root;

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  depthFirstSearch() {
    // 
  }
}

const tree = new BinarySearchTree();

/* 
          10
    5           20
  4   6      15 
*/

// Insert
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(15);

// Find
// console.log(tree.find(15));

// Breadth first search (BFS)
// console.log(tree.breadthFirstSearch());

// Depth first search (DFS)
console.log(tree.depthFirstSearch());

console.log(tree);
