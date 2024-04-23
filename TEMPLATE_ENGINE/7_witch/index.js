const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/post", (req, res) => {
  const post = {
    title: "JavaScript na véia",
    category: "JavaScript",
    body: "Este artigo é completamente a favor da javasscriptização do mundo.",
    comments: 4,
  };
  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Felipe",
    idade: 18,
  };

  const auth = true;
  res.render("home", { user: user, auth });
});

app.listen(3000, () => {
  console.log("App funcionando");
});
