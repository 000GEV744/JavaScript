const express = require("express");
const bodyparser = require("body-parser");
const projectroutes = require("./apis/projectApi").projectRoutes;
const userroutes = require("./apis/userApi").userRoutes;
const authenticate = require("./services/securityService").authenticate;
const cors = require("cors");
const port = 1269;
const app = express();
app.use(bodyparser.json());

//apply cors
app.use(cors());

//********************************************CORS cross origin resource sharing  */
/*You can achieve the same, without requiring any external module if you are fine adding a few extra lines in your code. Add the following code to enable CORS functionality:
        ## app.js
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        }); */

app.use("/project", (req, res, next) => {
  authenticate(req, res, next);
});
app.use("/users", (req, res, next) => {
  authenticate(req, res, next);
});

app.get("/", (req, res) => {
  res.send({
    server: "running"
  });
});

//incase user is unauthorize then whatever endpoint there will be it will redirect it to this /unauthorize endpoint
app.get("/unauthorize", (req, res) => {
  res.send({
    message: "sorry you are not authorized !"
  });
});

app.use("/users", userroutes);
app.use("/project", projectroutes);

//port is listening at port no 1269
app.listen(port, () => {
  console.log(`server is running ${port}`);
});

// NOTE :: difference between res.end() and res.send() is:
/*
 1. res.send() will check the structure of your output and set header information accordingly.
 2. res.send() will set "ETag" attribute in the response header.
 res.end() will NOT set this header attribute
 */
