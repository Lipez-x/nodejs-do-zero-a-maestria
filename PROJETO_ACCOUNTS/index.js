const inquirer = require("inquirer");
const chalk = require("chalk");

const fs = require("fs");
const { error } = require("console");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Selecione a operação que deseja realizar: ",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Deletar Conta",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Deletar Conta") {
        deleteAccount();
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Spark Bank!"));
        setTimeout(() => {
          console.clear();
          process.exit();
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function createAccount() {
  console.log(chalk.bgGreen.black("Bem Vindo ao Spark Bank!"));
  console.log(
    chalk.green(
      "Digite algumas informações para prosseguir com a criação da sua conta :)"
    )
  );

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual nome deseja para sua conta? ",
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Está conta já existe! Tente outro nome.")
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.error(err);
        }
      );

      console.log(chalk.green("Parabéns! Sua conta foi criada com sucesso."));
      operation();
    })
    .catch((err) => {
      console.error(err);
    });
}

function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!verifyAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite quanto deseja depositar na sua conta: ",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.error(err);
    });
}

function verifyAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Esta conta não existe, escolha outra."));
    return false;
  }

  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente"));
    return deposit();
  }

  accountData.balance += parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.bgGreen.black(`Depósito de R$${amount} realizado na sua conta.`)
  );
}

function getAccount(accountName) {
  const accountData = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountData);
}

function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!verifyAccount(accountName)) {
        return consultAmount();
      }

      const accountData = getAccount(accountName);
      const balance = accountData.balance;
      console.log(chalk.bgBlue.black(`O seu saldo em conta é R$${balance}`));

      operation();
    })
    .catch((err) => {
      console.error(err);
    });
}

function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!verifyAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite a quantidade que deseja sacar: ",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          removeAmount(accountName, amount);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente."));
    return withdraw();
  }

  if (amount > accountData.balance) {
    console.log(
      chalk.bgRed.black(
        "Você não tem esta quantidade disponível para saque. Verifique seu saldo."
      )
    );
    return withdraw();
  }

  accountData.balance -= parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.error(err);
    }
  );

  console.log(
    chalk.bgYellow.white(`Saque de R$${amount} realizado na sua conta.`)
  );
  operation();
}

function deleteAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da conta que deseja deletar? ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!verifyAccount(accountName)) {
        return deleteAccount();
      }

      inquirer
        .prompt([
          {
            type: "list",
            name: "confirmation",
            message: `Tem certeza que deseja deletar a conta de ${accountName}?`,
            choices: ["Sim", "Não"],
          },
        ])
        .then((answer) => {
          const confirmation = answer["confirmation"];

          if (confirmation === "Sim") {
            fs.unlink(`accounts/${accountName}.json`, function (err) {
              if (err) {
                console.log(err);
              }
            });
            console.log(
              chalk.bgBlue.black("A conta foi deletada com sucesso!")
            );
            return operation();
          }
          return operation();
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}
