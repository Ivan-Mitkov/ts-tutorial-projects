import {Sorter} from './Sorter'
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }
  swap(leftIndex: number, rightIndex: number): void {
    const stringArray = this.data.split("");
    const rightTemp = this.data[rightIndex];
    stringArray[rightIndex] = stringArray[leftIndex];
    stringArray[leftIndex] = rightTemp;
    this.data = stringArray.join("");
    // console.log('swap',this.data)
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  //for not calling length() we can use only length
  get length(): number {
    return this.data.length;
  }
}
