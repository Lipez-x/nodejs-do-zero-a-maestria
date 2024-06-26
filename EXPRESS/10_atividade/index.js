const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./Routes/userRoutes");

const port = 5000;

const basePath = path.join(__dirname, "templates");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/user", userRoutes);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
