const n = "20";

if (!Number.isInteger(n)) {
  throw new Error("O valor não é um inteiro.");
}

console.log("Continuando...");
