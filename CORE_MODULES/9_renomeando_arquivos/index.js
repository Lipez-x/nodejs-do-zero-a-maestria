const fs = require("fs");

const antigoNome = "arquivo.txt";
const novoNome = "arq.txt";

fs.rename(antigoNome, novoNome, function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(`O ${antigoNome} foi renomeado para ${novoNome}`);
  }
});
