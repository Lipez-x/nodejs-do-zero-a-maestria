const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const produtos = [
  {
    id: 1,
    name: "Mochila",
    description:
      "Uma mochila é um tipo de bolsa projetada para ser carregada nas costas, geralmente com duas alças que passam sobre os ombros. Ela é usada para transportar uma variedade de itens, desde materiais escolares e equipamentos esportivos até suprimentos de viagem e equipamentos de camping",
    price: 99.99,
  },
  {
    id: 2,
    name: "Caneta Vermelha",
    description:
      "Uma caneta vermelha é um instrumento de escrita comum que utiliza tinta vermelha para escrever ou desenhar em superfícies como papel, cartão ou outras superfícies compatíveis.",
    price: 99.99,
  },
  {
    id: 3,
    name: "Caderno",
    description:
      "Um caderno é um tipo comum de material de escrita e papelaria, frequentemente utilizado para tomar notas, escrever, desenhar ou realizar outras atividades que envolvam registrar informações de forma manual.",
    price: 99.99,
  },
  {
    id: 4,
    name: "Borracha",
    description:
      "Uma borracha, também conhecida como apagador, é uma ferramenta comumente usada para remover marcações feitas com lápis ou grafite em papel. Aqui estão algumas características típicas das borrachas:",
    price: 99.99,
  },
  {
    id: 5,
    name: "Lápis",
    description:
      "Um lápis é um instrumento de escrita comum usado para marcar ou escrever em superfícies como papel ou papelão. ",
    price: 99.99,
  },
];

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const productsById = produtos[parseInt(id) - 1];

  res.render("products", { productsById });
});

app.get("/", (req, res) => {
  res.render("home", { produtos });
});

app.listen(3000);
