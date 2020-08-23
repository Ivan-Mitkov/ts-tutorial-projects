import fs from "fs";

export class CsvFileReader {
  constructor(public fileName: string) {
  }

  data: string[][] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((x): string[] => x.split(","));
  }
}
