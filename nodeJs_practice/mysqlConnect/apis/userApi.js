const express = require("express");
const route = express.Router(); //used to create the routes
const uServices = require("../userServices/userService").userService;
const connection = require("../connectionFactory/connection").connection;
const userService = new uServices();
route.get("/", (req, res) => {
  res.send({
    users: userService.viewAll()
  });
});

module.exports.userRoutes = route;
