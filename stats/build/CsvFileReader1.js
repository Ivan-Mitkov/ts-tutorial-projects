"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n")
            .map(function (x) { return x.split(","); })
            .map(function (y) { return [
            utils_1.dateStringToDate(y[0]),
            y[1],
            y[2],
            parseInt(y[3]),
            parseInt(y[4]),
            y[5],
            y[6],
        ]; });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
