"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var maches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf-8" })
    .split("\n")
    .map(function (x) { return x.split(","); });
// console.log(maches);