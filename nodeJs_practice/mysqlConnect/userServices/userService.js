const connection = require("../connectionFactory/connection").connection;

class userService {
  /* ************************ CRUD Operations ************************ */

  //fetching all users
  fetch_Users(callback) {
    connection.query("select * from users_image", (err, result) => {
      callback(err, result);
    });
    connection.end();
  }

  //deleting the user
  deleteUserById(id, callback) {
    connection.query(
      "delete from users_image where id = ?",
      [id],
      (err, result) => {
        callback(err, result);
      }
    );
    connection.end();
  }

  //update the user details
  updateUser(id, fname, lname, mob_no, callback) {
    connection.query(
      "update users_image set first_name =?,last_name=?,mob_no=? where id =? ",
      [fname, lname, mob_no, id],
      (err, result) => {
        callback(err, result);
      }
    );
  }

  //create users
  addUser(fname, lname, mob_no, user_name, pwd, callback) {
    connection.query(
      "insert into users_image(first_name,last_name,mob_no,user_name,password)values(?,?,?,?,?)",
      [fname, lname, mob_no, user_name, pwd],
      (err, result) => {
        callback(err, result);
      }
    );
    connection.end();
  }
}

module.exports.userService = userService;
