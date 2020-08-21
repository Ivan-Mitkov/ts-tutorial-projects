export interface Sortable {
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const length = this.collection.length;
    // console.log(length);
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //using type guard in TS

        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
