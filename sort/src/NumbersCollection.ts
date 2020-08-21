export class NumbersCollection {
  constructor(public data: number[]) {}
  swap(leftIndex: number, rightIndex: number): void {
    const rightTemp = this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex];
    this.data[leftIndex] = rightTemp;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  //for not calling length() we can use only length
  get length(): number {
    return this.data.length;
  }
}
