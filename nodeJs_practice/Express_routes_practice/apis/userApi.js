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

//end point to get the nextId
route.get("/nextId", (req, res) => {
  res.send({
    nextId: userService.nextId()
  });
});

//endpoint to delete the user
route.get("/delete/:id", (req, res) => {
  // for ex. /delete/12
  const id = req.params.id;
  res.send({
    users: userService.deleteUser(id)
  });
});

//creating the endpoint for creating the users
route.post("/add", (req, res) => {
  res.send({
    users: userService.addUser(req.body)
  });
});

route.post("/save/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  console.log(id + " " + req.body.Ename + " " + req.body.Eemail);
  res.send({
    users: userService.editAndSave(id, req.body.Ename, req.body.Eemail)
  });
});

module.exports.userRoutes = route;
