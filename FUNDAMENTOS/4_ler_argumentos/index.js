// nome
// idade
// email

const args = process.argv.slice(2);
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];
const email = args[2].split("=")[1];

console.log(process.argv);

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Email: ", email);
