const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const basePath = path.join(__dirname, "templates");

app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.sendFile(`${basePath}/user.html`);

  console.log(`Estamos buscando o usuário: ${id}`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
