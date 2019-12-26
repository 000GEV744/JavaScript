const express = require("express");
const app = express();

//now we need to tell the express that we want to use people routes
const people = require("./routes/people");
app.use("/people", people);

/*
1.  /people will call  the route '/' in people.js 
2. /people/example will call the route '/example' in people.js
*/

app.listen(3000);
