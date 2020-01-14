const express = require("express");
const route = express.Router(); //used to create the routes
const uServices = require("../userServices/userService").userService;
const userService = new uServices();

route.get("/", (req, rs) => {
  userService.fetch_Users((err, result) => {
    //in callbacks first argument is reserved for error objects whereas second arugment is for any successful response data
    if (err) {
      rs.status(400).json({
        message: "Unable to process the request"
      });
    } else {
      rs.status(200).json({
        message: "User fetched",
        result: result
      });
    }
  });
});

//delete a particular user with its id
route.get("/delete/:id", (req, res) => {
  userService.deleteUserById(req.params.id, (err, result) => {
    if (!err) {
      if (result.affectedRows > 0) {
        res.status(200).send({
          message: "user deleted",
          result: result
        });
      } else {
        res.status(400).send({
          message: "user doesn't exist"
        });
      }
    } else {
      res.status(400).send({
        message: "Unable to process the request"
      });
    }
  });
});

//creating users
route.post("/add", (req, res) => {
  userService.addUser(
    req.body.first_name,
    req.body.last_name,
    req.body.mob_no,
    req.body.user_name,
    req.body.password,
    (err, result) => {
      if (!err) {
        res.status(200).send({
          message: "user added !"
        });
      } else {
        res.status(400).send({
          message: "Unable to process the request"
        });
      }
    }
  );
});

//update users
route.post("/update/:id", (req, res) => {
  userService.updateUser(
    req.params.id,
    req.body.first_name,
    req.body.last_name,
    req.body.mob_no,
    (err, result) => {
      if (!err) {
        res.status(200).send({
          message: "user updated !"
        });
      } else {
        res.status(400).send({
          message: "Unable to process the request"
        });
      }
    }
  );
});

module.exports.userRoutes = route;
