const path = require("path");

console.log(path.sep);

const filePath = path.join("/context", "pathFolder", "text.txt");
console.log(filePath);

const absPath = path.resolve(__dirname, "context", "pathFolder", "text.txt");
console.log(absPath);
