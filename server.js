const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h1>HI, there</h1>`);
    res.statusCode = 200;
    res.end();
  } else {
    res.write("404 not found");
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
