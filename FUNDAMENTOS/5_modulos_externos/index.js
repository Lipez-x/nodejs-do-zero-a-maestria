const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const nome = args["nome"];
const idade = args["idade"];
const curso = args["curso"];
const semestre = args["semestre"];

console.log(
  `O ${nome}, de ${idade} anos, faz ${curso} e está no semestre ${semestre}.`
);
