const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello welcome to my Server");
      res.end();
    } else if (req.url === "/image") {
      const readStream = fs.createReadStream(
        "./practice_files/sampleImage.png"
      );
      res.writeHead(200, { "content-type": "image/png" });
      readStream.pipe(res);
    } else if (req.url === "/JsonFile") {
      const readStream = fs.createReadStream("./practice_files/example.json");
      res.writeHead(200, { "content-type": "`application/json" });
      readStream.pipe(res);
    } else if (req.url === "/htmlFile") {
      const readStream = fs.createReadStream("./practice_files/sample1.html");
      res.writeHead(200, { "content-type": "text/html" });
      readStream.pipe(res);
    }
  })
  .listen(3001);
