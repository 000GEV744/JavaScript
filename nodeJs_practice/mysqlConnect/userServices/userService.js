const connection = require("../connectionFactory/connection").connection;
let users;
class userService {
  constructor() {
    getUsers(result => {
      // add a callback to get the result because execution of query is happening asynchronously
      if (result != undefined) {
        this.users = result;
      }
    });
  }

  viewAll() {
    console.log("inside vuewAll :: this.users : " + this.users);
    return this.users;
  }
}

function getUsers(callback) {
  connection.query("select * from users_image", (error, result) => {
    if (error) throw error;
    console.log(result);
    callback(result);
  });
}

module.exports.userService = userService;
