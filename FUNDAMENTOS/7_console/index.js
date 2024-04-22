const nome = "Felipe";
const idade = 18;
const notas = [10, 9, 10, 10];

//Imprime varias variáveis
console.log(nome, idade, notas);

//Para contagem de impressões

for (let i = 0; i < 10; i++) {
  console.count(`${nome}, contagem: `);
}

//Variável entre strings
console.log("O meu nome é: %s", nome);

//Limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
