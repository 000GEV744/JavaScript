const express = require("express");
const route = express.Router();
const pService = require("../services/projectService").ProjectService;

const projectService = new pService(); //create an instance of projectService class

//creating the api to view all projects
route.get("/", (req, res) => {
  res.send({
    projects: projectService.viewAll()
  });
});

//creating the api to add a project
route.post("/add", (req, res) => {
  res.send({
    projects: projectService.addproject(req.body)
  });
});

module.exports.projectRoutes = route;
