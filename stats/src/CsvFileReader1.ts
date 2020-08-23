import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResults } from "./MatchResult";

//define tuple
type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  constructor(public fileName: string) {}

  data: MatchData[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((x): string[] => x.split(","))
      .map(
        (y: string[]): MatchData => [
          dateStringToDate(y[0]),
          y[1],
          y[2],
          parseInt(y[3]),
          parseInt(y[4]),
          y[5] as MatchResults,
          y[6],
        ]
      );
  }

  
}
