"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.CharactersCollection = CharactersCollection;
