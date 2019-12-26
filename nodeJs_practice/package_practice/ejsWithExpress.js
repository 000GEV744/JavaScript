//EJS Templates With Express
//ejs is a tempplate language which allows us more dynamic languages
const Express = require("express");

const app = Express();
const port = 3000;

app.set("view engine", "ejs"); //1. once we set the view engine to ejs we have to create a "views" folder which store our ejs template
//2.express will automatically get to know that it has to look into the view folder as its the default one

app.get("/:userquery", (req, res) => {
  res.render("index", {
    data: {
      uerquery: req.params.userquery,
      searchResult: ["book1", "book2", "book3", "book4"],
      loggedIn: true,
      username: "Anuj Singh"
    }
  }); //we dont need to specify .ejs as we've already specify that we are using ejs as template
});

app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
