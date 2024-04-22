const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const basePath = path.join(__dirname, "templates");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/user/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/user/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

  res.sendFile(`${basePath}/userform.html`);
});

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
