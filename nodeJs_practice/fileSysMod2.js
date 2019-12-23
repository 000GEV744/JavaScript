/*we will create folders here */
const fs = require("fs");
fs.mkdir("tutorial", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder is created !");
    fs.rmdir("tutorial", err => {
      if (err) {
        console.log(err);
      } else {
        console.log("folder is deleted!");
      }
    });
  }
});

//create a directory and then create a file inside that directory
fs.mkdir("tutorials", err => {
  if (err) {
    console.log("");
  } else {
    fs.writeFile(
      "./tutorials/example1.txt",
      "hye Anuj, you are the best and you should know it",
      err => {
        if (err) {
          console.log(err);
        } else {
          console.log("file is created inside the directory tutorials");
        }
      }
    );
  }
});

//if there are multiple files inside a directory, then how to delete all of them :
fs.readdir("tutorials", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    //now iterate over each text file and delete them individually
    for (let file of files) {
      fs.unlink("./tutorials/" + file, er => {
        if (er) {
          console.log(er);
        } else {
          console.log(file + " deleted \n");
        }
      });
    }
  }
});
