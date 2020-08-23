import fs from "fs";

const maches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((x): string[] => x.split(","));
// console.log(maches);
