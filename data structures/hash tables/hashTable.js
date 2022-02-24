class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key = '') {
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++)
      total = (total * 31 + (key.charCodeAt(i) - 96)) % this.keyMap.length;

    return total;
  }

  set(key, val) {
    const idx = this._hash(key);

    if (this.keyMap[idx]) return this.keyMap[idx].push([key, val]);

    this.keyMap[idx] = [[key, val]];
  }

  get(key) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) return undefined;

    for (let i = 0; i < this.keyMap[idx].length; i++)
      if (key === this.keyMap[idx][i][0]) return this.keyMap[idx][i][1];
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;

      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keys.includes(this.keyMap[i][j][0]))
          keys.push(this.keyMap[i][j][0]);
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;

      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!values.includes(this.keyMap[i][j][1]))
          values.push(this.keyMap[i][j][1]);
      }
    }

    return values;
  }
}

const hashTable = new HashTable();

// Set
hashTable.set('cyan', 13);
hashTable.set('pink', 20);
hashTable.set('red', 30);
hashTable.set('magenta', 35);
hashTable.set('magenta', 35);
hashTable.set('orangered', 35);

// Get
// console.log(hashTable.get('cyan'));
// console.log(hashTable.get('pink'));
// console.log(hashTable.get('red'));
// console.log(hashTable.get('magenta'));

// Keys
// console.log(hashTable.keys());

// Values
// console.log(hashTable.values());

console.log(hashTable);
