import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

//create object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something
//satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Total", manUnitedWins);
