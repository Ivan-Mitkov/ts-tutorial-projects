import fs from "fs";

export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}

  abstract convertRow(row: string[]): T;
  data: T[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((x): string[] => x.split(","))
      .map(this.convertRow);
  }
}
