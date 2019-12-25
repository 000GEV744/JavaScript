const express = require("express");
const path = require("path");
const parser = require("body-parser");
const app = express();
const port = 3003;

app.use(parser.json()); //will parse json and attach to our request.body
// app.use(parser.urlencoded({ extended: false })); //it parses the data and put it into the request body and we're
//putting extended because we're not using any complex object

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/loginformPost.html"));
});
app.post("/", (req, res) => {
  console.log(req.body);
  //some database work and after that i am sending data some message
  res.send("successfully submitted !");
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
