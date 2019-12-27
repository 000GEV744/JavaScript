const express = require("express");
const route = express.Router();
const uService = require("../services/userService").userService;

const userService = new uService();

//creating the endpoint for getting all the users
route.get("/", (req, res) => {
  res.send({
    users: userService.viewAll()
  });
});

//creating the endpoint for creating the users
route.post("/add", (req, res) => {
  res.send({
    users: userService.addUser(req.body)
  });
});

module.exports.userRoutes = route;
