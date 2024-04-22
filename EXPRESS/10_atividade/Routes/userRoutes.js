const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/addUser.html`);
});

router.post("/save", (req, res) => {
  const user = req.body.user;
  const email = req.body.email;

  if (!email || !user) {
    res.status(400).sendFile(`${basePath}/400.html`);
    console.log("Dados inválidos");
    return;
  }

  console.log(`O usuário ${user} foi adicionado.`);
  res.sendFile(`${basePath}/addUser.html`);
});

module.exports = router;
