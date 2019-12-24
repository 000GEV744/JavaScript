const express = require("express");
const path = require("path");
const app = express();

/********serving static files using express******* */
//static files means html, css,  client side js, images, videos etc
/*whenever we use app.use() it means we'r using middleWare*/

app.use("/public", express.static(path.join(__dirname, "static"))); //giving the alias name to the folder "static"
/* here,
1.  first arg used as alias for our static folder as we don't want 
people outside of my server   to know anything about my folder.
2. second arg gonna be a middleware function.
3. __dirname is a string and stands for directory name and path.join(__dirname,"folder name") gonna give use where 
app.js currently is and 2nd arg is folder name in which our resources resides.*/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "1.html"));
});
// app.get("/", (req, res) => {
//   //basically it can be called as index route or home page
//   res.send("hello world");
// });
app.get("/example", (req, res) => {
  res.send("hitting example route");
});
//route Params
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params.name + " :: " + req.params.age);
});
//query params => /example/:name/:age?sort=false&tutorials=paramstutorials
//here we are giving two query params separated by "&".

app.listen(3002);