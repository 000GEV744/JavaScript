const express = require("express");
const bodyparser = require("body-parser");
const projectroutes = require("./apis/projectApi").projectRoutes;
const port = 1269;
const app = express();
app.use(bodyparser.json());

app.use("/project", projectroutes);

app.get("/", (req, res) => {
  res.send({
    server: "running"
  });
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
