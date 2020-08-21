"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var stringArray = this.data.split("");
        var rightTemp = this.data[rightIndex];
        stringArray[rightIndex] = stringArray[leftIndex];
        stringArray[leftIndex] = rightTemp;
        this.data = stringArray.join("");
        // console.log('swap',this.data)
    };
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        //for not calling length() we can use only length
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
