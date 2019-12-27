const users = require("../database/users").users;
console.log(users);

class UserServices {
  constructor() {
    this.user = users;
  }

  viewAll() {
    return this.user;
  }

  addUser(user) {
    this.user.push(user);
    return this.user;
  }
}

module.exports.userService = UserServices;
