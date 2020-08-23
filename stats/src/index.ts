import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;
// console.log(matches);

let manUnitedWins = 0;
enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Total", manUnitedWins);
