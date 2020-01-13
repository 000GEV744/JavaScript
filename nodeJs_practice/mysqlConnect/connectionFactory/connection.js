const mysql = require("mysql");

var mysqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9436030916@anuj",
  database: "testimage"
});

mysqlconnection.connect(function(err) {
  if (err) {
    console.log("error :" + err.message);
  } else {
    console.log("connected as id " + mysqlconnection.threadId);
  }
});

module.exports.connection = mysqlconnection;

/*if it is showing error continously while connectiing to the database then try this solution:

Execute the following query in MYSQL Workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
Where root as your user localhost as your URL and password as your password
Then run this query to refresh privileges:
flush privileges;
Try connecting using node after you do so.
If that doesn't work, try it without @'localhost' part.
*/
