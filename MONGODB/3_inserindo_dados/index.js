const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./db/connection");
const app = express();

const productRoutes = require("./routes/products.routes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", productRoutes);

app.listen(3000);
