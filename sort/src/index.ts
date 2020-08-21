import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const arrNumbers = new NumbersCollection([10, 3, -5, 0, 11]);
const sorter = new Sorter(arrNumbers);
sorter.sort();
console.log(arrNumbers.data);

const str = new CharactersCollection("aaaaXAxx");
const stringSorter = new Sorter(str);
stringSorter.sort();
console.log(str.data);
// class Sorter {
//   collection: number[] | string;
//   constructor(collection: number[] | string) {
//     this.collection = collection;
//   }

//   sort() {
//     const length = this.collection.length;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         //using type guard in TS
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const rightTemp = this.collection[j + 1];
//             this.collection[j + 1] = this.collection[j];
//             this.collection[j] = rightTemp;
//           }
//         }
//         //other type guard for primitive value in TS
//         if (typeof this.collection === "string") {
//         }
//       }
//     }
//   }
// }

// const sorter = new Sorter([10, 3, -5, 0, 11]);
// sorter.sort();
// console.log(sorter.collection);
