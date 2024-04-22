const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInf = url.parse(req.url, true);
  const name = urlInf.query.name;

  if (!name) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    const nameNewLine = name + "\r\n";
    fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
      res.writeHead(302, {
        location: "/",
      });
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
