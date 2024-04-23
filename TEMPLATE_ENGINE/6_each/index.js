const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Felipe",
    idade: 18,
  };

  const auth = true;
  res.render("home", { user: user, auth });
});

app.get("/dashboard", (req, res) => {
  const itens = ["a", "b", "c"];
  res.render("dashboard", { itens });
});

app.listen(3000, () => {
  console.log("App funcionando");
});
