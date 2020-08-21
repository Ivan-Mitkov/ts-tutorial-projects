"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var arrNumbers = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 11]);
var sorter = new Sorter_1.Sorter(arrNumbers);
sorter.sort();
console.log(arrNumbers.data);
var str = new CharactersCollection_1.CharactersCollection("aaaaXAxx");
var stringSorter = new Sorter_1.Sorter(str);
stringSorter.sort();
console.log(str.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(12);
linkedList.add(-100);
linkedList.add(42);
linkedList.add(1290);
linkedList.add(-342);
// linkedList.print()
var linkListSorter = new Sorter_1.Sorter(linkedList);
linkListSorter.sort();
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
