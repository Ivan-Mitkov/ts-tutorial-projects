import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;
console.log(matches[0]);

let manUnitedWins = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Total", manUnitedWins);
