const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //basically it can be called as index route or home page
  res.send("hello world");
});
app.get("/example", (req, res) => {
  res.send("hitting example route");
});
app.listen(3000);
