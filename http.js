const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(
    `<h1>Opps!</h1><p>You might wanted to go to this <a href='/'>HOME</a></p>`
  );
});

server.listen(5000);
