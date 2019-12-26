/*middleware is a code that gets executed in betweeb client request an server itself 
like app.use(bodyparser.json()) sp this function is a middleware function as when user makes a request then  it will take 
the user request and process it.*/

const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json()); //middleware function

//here we'r defining our own middleware function
app.use("/example", (req, res, next) => {
  req.banana = "banana"; //we can also add properties to the req object
  /*here the next parameter must invokes whenever we're creating the custom middleware
  as this next will let the express to know that the function has finished processing this request
  and if we're not mentioning then we re gonna timie out the server*/
  console.log(req.url, req.method);
  next();
}); /*now every request will get processed here through middleware and then will go to the endpoint but 
we want to implment it only for a certain route so, we will add "/example" as one of the param for middleware function*/

app.get("/", (req, res) => {
  res.send("middleware");
});
app.listen(3000, () => {
  console.log("server is started at 3000");
});
