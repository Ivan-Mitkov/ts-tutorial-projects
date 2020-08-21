class Sorter {
  collection: number[];
  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort() {
    const length = this.collection.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const rightTemp = this.collection[j + 1];
          this.collection[j + 1] = this.collection[j];
          this.collection[j] = rightTemp;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0, 11]);
sorter.sort();
console.log(sorter.collection);
