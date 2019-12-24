const http = require("http");
//create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world form nodejs");
  } else {
    res.write("using some other domain ");
  }
  res.end(); // this function is used to send the response back to the client from the server
});

server.listen("3000");
