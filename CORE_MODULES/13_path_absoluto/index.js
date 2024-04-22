const path = require("path");

console.log(path.resolve("index.js"));

const midFolder = "ufc";
const fileName = "declaracao.txt";

const finalPath = path.join("/", "documentos", midFolder, fileName);
console.log(finalPath);
