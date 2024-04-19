const http = require("http");

const data = require("./data");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
</head>
<body>
    <h1>${data.title}</h1>
    <h2>${data.subtitle}</h2>
    <p>${data.description}</p>
</body>
</html>`);

  res.end();
});

server.listen(() => {
  const address = server.address();
  console.log(`Funcionando con el puerto aleatorio ${address.port}`);
});
//
