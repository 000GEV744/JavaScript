const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

//using middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//creating endpoints
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "formvalidation.html"));
});

//creating port endpoint
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ success: true }); //it takes a js object and convert it into json and send it to the client
});

//assigning port for our sever
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
