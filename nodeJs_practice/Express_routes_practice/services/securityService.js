const secUsers = require("../database/security").secureUsers;

const authentication = (req, res, next) => {
  const uname = req.headers.username;
  const pwd = req.headers.pwd;

  //check if user exists or not
  const userExists = secUsers.find(u => {
    return u.uname == uname && u.pass == pwd;
  });
  if (userExists) {
    next(); //incase userExists then proceed with the normal flow
  } else {
    res.redirect("/unauthorize"); //otherwise just redirect it
  }
};
module.exports.authenticate = authentication;
