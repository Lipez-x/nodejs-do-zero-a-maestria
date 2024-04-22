const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("Arquivo removido!");
  }
});
