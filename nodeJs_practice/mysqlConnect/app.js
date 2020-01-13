const express = require("express");
const parser = require("body-parser");
const userRoutes = require("./apis/userApi").userRoutes;
const app = express();

const port = 1276;

app.get("/", (req, res) => {
  res.send({
    message: "server is running"
  });
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
