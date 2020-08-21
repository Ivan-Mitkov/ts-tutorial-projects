"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var rightTemp = this.data[rightIndex];
        this.data[rightIndex] = this.data[leftIndex];
        this.data[leftIndex] = rightTemp;
    };
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        //for not calling length() we can use only length
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
