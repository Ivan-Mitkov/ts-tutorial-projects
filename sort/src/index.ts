import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const arrNumbers = new NumbersCollection([10, 3, -5, 0, 11]);
arrNumbers.sort();
console.log(arrNumbers.data);
// const sorter = new Sorter(arrNumbers);
// sorter.sort();
// console.log(arrNumbers.data);

const str = new CharactersCollection("aaaaXAxx");
str.sort();

// const stringSorter = new Sorter(str);
// stringSorter.sort();
console.log(str.data);

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(-100);
linkedList.add(42);
linkedList.add(1290);
linkedList.add(-342);
// // linkedList.print()
// const linkListSorter=new Sorter(linkedList);
// linkListSorter.sort()
linkedList.sort();
linkedList.print();

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
