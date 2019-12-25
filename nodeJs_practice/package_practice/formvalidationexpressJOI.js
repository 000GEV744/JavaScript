//validation on the server side suing joi
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

//joi validation
const joi = require("joi");

//assigning value to const variables
const app = express();
const port = 3000;

//using middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//creating endpoints
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "formvalidation.html"));
});

//creating post endpoint
app.post("/", (req, res) => {
  //here, we're going to validate the response by creating the schema(a blueprint or set of rules that the data shoudld have)
  console.log(req.body);
  const schema = joi.object().keys({
    email: joi
      .string()
      .trim()
      .email()
      .required(), //if there is no value then it wil throw error
    password: joi
      .string()
      .min(5)
      .max(15)
      .required()
  });

  //now we validate
  joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("error occured!");
    } else {

      console.log(result); //just print the request body
      res.json({ success: true });
    }
  });
  //   res.json({ success: true }); //it takes a js object and convert it into json and send it to the client
});

//assigning port for our sever
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
