"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/");
    var dateNumbers = dateParts.map(function (x) { return parseInt(x); });
    return new Date(dateNumbers[2], dateNumbers[1] - 1, dateNumbers[0]);
};
