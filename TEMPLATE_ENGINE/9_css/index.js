const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aulas de JavaScritp",
      category: "JavaScript",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Sobre Node.js",
      category: "JavaScript",
      body: "Teste",
      comments: 18,
    },
    {
      title: "Aulão de PHP",
      category: "PHP",
      body: "Teste",
      comments: 2,
    },
    {
      title: "Java na prática",
      category: "Java",
      body: "Teste",
      comments: 12,
    },
  ];

  res.render("blog", { posts });
});

app.get("/post", (req, res) => {
  const post = {
    title: "JavaScript na véia",
    category: "JavaScript",
    body: "Este artigo é completamente a favor da javasscriptização do mundo.",
    comments: 4,
  };
  res.render("blogpost", { post });
});

app.get("/dashboard", (req, res) => {
  const itens = ["a", "b", "c"];
  res.render("dashboard", { itens });
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
