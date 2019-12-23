/* it allows us to work with file System : create files and folders and delete them   */
const fs = require("fs");
//craete a file
fs.writeFile("example1.txt", "hello, Anuj you are the best !", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created successfully !");
    fs.readFile("example1.txt", "utf8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    });
  }
});

//rename the file
fs.rename("example1.txt", "example2.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully renamed the file");
  }
});
//append to the file
fs.appendFile("example2.txt", "some data is being appended", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("data is appended successfully ..!");
  }
});
//delete the file
fs.unlink("example2.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is deleted successfully ");
  }
});
