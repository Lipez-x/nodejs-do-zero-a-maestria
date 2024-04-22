const fs = require("fs"); // Importação do Fyle System

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
