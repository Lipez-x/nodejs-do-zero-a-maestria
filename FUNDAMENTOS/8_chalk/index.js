const chalk = require("chalk");

const semaforo = "Verde";

if (semaforo == "Verde") {
  console.log(chalk.green.bgBlackBright("Pode passar!"));
} else if (semaforo == "Vermelho") {
  console.log(chalk.red.bgBlackBright("Pare!"));
} else {
  console.log(chalk.yellow.bgBlackBright("Aguarde!"));
}
