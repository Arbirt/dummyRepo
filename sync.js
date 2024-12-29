import { readFileSync, writeFileSync } from "fs";

const first = readFileSync("./context/first.txt", "utf8");
const second = readFileSync("./context/second.txt", "utf8");

writeFileSync(
  "./context/result-sync.txt",
  `Hello this is the combined messages from first : ${first} , second : ${second}`,
  { flag: "a" }
);
