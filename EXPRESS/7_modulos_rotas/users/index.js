const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

  res.sendFile(`${basePath}/userform.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.sendFile(`${basePath}/user.html`);

  console.log(`Estamos buscando o usuário: ${id}`);
});

module.exports = router;
