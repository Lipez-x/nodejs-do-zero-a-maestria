const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual sua lingugagem preferida?", (language) => {
  if (language == "Html") {
    console.log("É brincadeira né?");
  } else {
    console.log(`Uau! Também gosto de ${language}`);
  }
  readline.close();
});
