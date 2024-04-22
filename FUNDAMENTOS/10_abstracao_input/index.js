const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite a primeira nota: ",
    },
    {
      name: "p2",
      message: "Digite a segunda nota: ",
    },
  ])
  .then((answers) => {
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    if (media < 6) {
      inquirer
        .prompt([
          {
            name: "p3",
            message: "Qual a nota da final? ",
          },
        ])
        .then((answers) => {
          const mediaFinal = (media + parseInt(answers.p3)) / 2;
          if (mediaFinal < 5) {
            console.log(chalk.bgRed.white("Reprovado!!"));
          } else {
            console.log(chalk.bgGreen.white("Aprovado!"));
          }
        })
        .catch((err) => {
          console.error(chalk.red(err));
        });
    } else {
      console.log(chalk.bgGreen.white("Aprovado!"));
    }
  })
  .catch((err) => {
    console.error(chalk.red(err));
  });
