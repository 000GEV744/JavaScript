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
  nextId() {
    console.log(this.user.length);
    return this.user.length + 1;
  }

  deleteUser(id) {
    this.user.forEach((item, index) => {
      if (item.id == id) {
        this.user.splice(index, 1);
      }
    });
    return this.user;
  }

  editAndSave(id, name, email) {
    console.log("inside editAndSave()");
    this.user.forEach(u => {
      if (u.id == id) {
        console.log("user matched !");
        u.email = email;
        u.name = name;
      }
    });
    console.log(this.user);
    return this.user;
  }
}

module.exports.userService = UserServices;
