const minimist = require("minimist");
const calculadora = require("./calculadora");

const args = minimist(process.argv.slice(2));
const operation = args["operation"];
const n1 = parseInt(args["n1"]);
const n2 = parseInt(args["n2"]);

switch (operation) {
  case "+":
    calculadora.soma(n1, n2);
    break;
  case "-":
    calculadora.sub(n1, n2);
    break;
  case "*":
    calculadora.mult(n1, n2);
    break;
  case "/":
    calculadora.div(n1, n2);
    break;
  default:
    console.log("Inválido.");
    break;
}
