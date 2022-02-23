class MaxBinaryHeap {
  values = [41, 39, 33, 18, 27, 12];

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
}

const heap = new MaxBinaryHeap();

// Insert
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(200));

console.log(heap);
