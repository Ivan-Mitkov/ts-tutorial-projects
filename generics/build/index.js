"use strict";
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var genericArr = new ArrayOfAnything(["ds", "dfgt", "dstg"]);
console.log(genericArr.get(1));
var genericArr2 = new ArrayOfAnything(["ds", "dfgt", "dstg"]);
console.log(genericArr2.get(1));
//Generics with functions
function printString(arr) {
    arr.map(function (x) { return console.log(x); });
}
function printNumbers(arr) {
    arr.map(function (x) { return console.log(x); });
}
function printAnything(arr) {
    arr.map(function (x) { return console.log(x); });
}
printString(["ds", "dfgt", "dstg"]);
printNumbers([1, 2, 3]);
printAnything(["ds", "dfgt", "dstg"]);
printAnything(["ds", "dfgt", "dstg"]);
// printAnything<string>([1, 2, 3]);
//Generic constraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("Car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("House");
    };
    return House;
}());
// function printHouseOrCar<T>(arr: T[]): void {
//   arr.map((arr) => arr.print());
// }
function printInterface(arr) {
    arr.map(function (arr) { return arr.print(); });
}
function printTextendsInterface(arr) {
    arr.map(function (arr) { return arr.print(); });
}
printInterface([new House(), new Car()]);
printTextendsInterface([new House(), new Car()]);
