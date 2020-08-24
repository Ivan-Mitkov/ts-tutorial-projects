class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const genericArr = new ArrayOfAnything<string>(["ds", "dfgt", "dstg"]);
console.log(genericArr.get(1));
const genericArr2 = new ArrayOfAnything(["ds", "dfgt", "dstg"]);
console.log(genericArr2.get(1));

//Generics with functions

function printString(arr: string[]): void {
  arr.map((x) => console.log(x));
}
function printNumbers(arr: number[]) {
  arr.map((x) => console.log(x));
}
function printAnything<T>(arr: T[]) {
  arr.map((x) => console.log(x));
}

printString(["ds", "dfgt", "dstg"]);
printNumbers([1, 2, 3]);
printAnything(["ds", "dfgt", "dstg"]);
printAnything<string>(["ds", "dfgt", "dstg"]);
// printAnything<string>([1, 2, 3]);

//Generic constraints
class Car {
  print() {
    console.log("Car");
  }
}
class House {
  print() {
    console.log("House");
  }
}

interface Printable {
  print(): void;
}
// function printHouseOrCar<T>(arr: T[]): void {
//   arr.map((arr) => arr.print());
// }
function printInterface(arr: Printable[]): void {
  arr.map((arr) => arr.print());
}
function printTextendsInterface<T extends Printable>(arr: T[]): void {
  arr.map((arr) => arr.print());
}
printInterface([new House(), new Car()]);
printTextendsInterface([new House(), new Car()]);
