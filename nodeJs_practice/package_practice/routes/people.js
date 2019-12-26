const express = require("express");
const route = express.Router(); //gives the router instance

route.use((req, res, next) => {
  console.log("middleware being used !");
  next(); //now this middleware will only be used within the people routes
});
route.get("/", (req, res) => {
  res.send("/ being hit");
});

route.get("/example", (req, res) => {
  res.send("/example being hit");
});

//export the routes that are in this file to expose it to the express.js
module.exports = route;
