"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
//create object that satisfies the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something
//satisfying the DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Total", manUnitedWins);
