// export interface Sortable {
//   swap(leftIndex: number, rightIndex: number): void;
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  sort() {
    const length = this.length;
    // console.log(length);
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //using type guard in TS

        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
