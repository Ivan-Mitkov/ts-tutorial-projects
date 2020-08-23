"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var matches = reader.data;
console.log(matches[0]);
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Total", manUnitedWins);
