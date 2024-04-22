const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Digite seu nome: ",
    },
    {
      name: "idade",
      message: "Digite sua idade: ",
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      throw new Error("Nome e/ou idade inválidos.");
    }
    console.log(
      chalk.bgYellow.black(`Nome: ${answers.nome}; Idade: ${answers.idade}`)
    );
  })
  .catch((err) => {
    console.log(chalk.bgRed.black(err));
  });
