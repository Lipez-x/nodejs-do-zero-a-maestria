const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivo.txt", "bom dia");
console.log("Arquivo criado!");

console.log("Fim");
