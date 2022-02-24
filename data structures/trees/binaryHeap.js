class MaxBinaryHeap {
  values = [];

  insert(val) {
    this.values.push(val);

    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (val <= this.values[parentIdx]) break;

      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];

      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (!this.values.length) return max;

    this.values[0] = end;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if ((!swap && rightChild > element) || (swap && rightChild > leftChild))
          swap = rightChildIdx;
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();

// Insert
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));

/*  [55, 39, 41, 18, 27, 12, 33] */

// Remove
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap);
