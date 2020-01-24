const express = require("express");
const session = require("express-session");
const parser = require("body-parser");

const TWO_HOURS = 1000 * 60 * 60 * 2; //2 hours
const {
  PORT = 1269,
  NODE_ENV = "development",
  SESS_LIFETIME = TWO_HOURS,
  SESS_NAME = "sid",
  SESS_SECRET = "helloThisIsKey"
} = process.env;
let users = [
  {
    id: 1,
    name: "Anuj Singh",
    email: "anuj60360@gmail.com",
    password: "secret"
  },
  {
    id: 2,
    name: "Ram Murti",
    email: "rammurti638@gmail.com",
    password: "humman"
  },
  {
    id: 3,
    name: "Ambikesh Gupta",
    email: "aambikesh122@gmail.com",
    password: "israel"
  }
];
const IN_PROD = NODE_ENV === "production"; //if NODE_ENV is production then IN_PROD will be true and then secure variable will become true

const app = express();

app.use(
  parser.urlencoded({
    extended: true
  })
);
app.use(
  session({
    name: SESS_NAME, //will be the name of the sessonID of the cookie
    resave: false, //if not wise to save the session everytime a request is made to the server as it not being changed and bydefault it's false
    saveUninitialized: false,
    /*it means library will create a session for every request but it makes no sense
    to store that session i.e if the session is created as empty and it was never initialized*/
    secret: SESS_SECRET,
    /*this secret is actually going to be the symmetric key which is used to sign the cookie
    as the secret will be based on the content of the cookie, so if the contents of the cookie is modified then it wil no longer match the signature of the cookie
    */
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true, //the browser will only accept the cookies if it's coming from the same origin or domain
      secure: IN_PROD //this makes sense if we have https channel enabled
    }
  })
);

app.use((req, res, next) => {
  const userId = req.session.userId;
  const user = users.find(user => user.id === userId);
  res.locals.user = user;
  next();
});
///middleware function for redirection to login incase user try to go diretcly to the home page
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};
//incase user is already logged in then it shouldnot access the login page and if trying then should be redirected to home page
const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect("/home");
  } else {
    next();
  }
};

//********************MAIN PAGE********** */
app.get("/", (req, res) => {
  const { userId } = req.session; //checking for whether the session contains the userid or not!
  res.send(
    `<h1>Welcome</h1>
    ${
      userId
        ? `<a href = '/home'> Home</a>
        <form method = 'post' action ='/logout'>
        <button>Logout</button>
        </form> `
        : `<a href ='/login'>Login</a>
    <a href ='/register'>Register</a>`
    }`
  );
});

//******************HOME PAGE ****************** */
app.get("/home", redirectLogin, (req, res) => {
  const user = res.locals.user;
  console.log(user);
  res.send(
    `<h1>  Home </h1>
      <a href ="/"> Main<a> &nbsp
      <form method = "POST" action = "/logout">
      <button>Logout</button>
     </form>
      <ul>
      <li> name : ${user.name}</li>
      <li> email: ${user.email}</li>
      </ul>
      `
  );
});

//************LOGIN PAGE ******************* */
app.get("/login", redirectHome, (req, res) => {
  res.send(`
  <h2>Login</h2>
  <form method="POST" action = "/login"> 
    <label>EmailId :</label> 
    <input type = "text" placeholder="email" name ="email"><br>
    <label>Password :</label> 
    <input type = "password" placeholder="password" name ="password"><br>
    <input type="submit" value = "Enter">
    </form>
    <a href="/register">Register</a>
    <a href = "/">Main</a>
    `);
});

//***************REGISTER PAGE****************/
app.get("/register", (req, res) => {
  res.send(
    `<h2>Register</h2>
    <form method="POST" action ="/register">
    <lable>Name :</lable>
        <input type = "text" name ="name" placeholder="Full name"></input><br>
        <lable>Email :</lable>
        <input type = "email" name ="email" placeholder="email"></input><br>
        <lable>Password :</lable>
        <input type = "password" name ="pwd" placeholder="password"></input><br>
        <input type ="submit" value ="enter">
        </form>
        <a href = "/">Main</a>
        <a href = "/login">Login</a>
        `
  );
});

/***************LOGIN USER*****************/
app.post("/login", redirectHome, (req, res) => {
  console.log(req.session.userId + " " + req.body);
  const { email, password } = req.body;
  console.log(email + " " + password);
  if (email && password) {
    const user = users.find(u => {
      if (u.email == email && u.password == password) {
        return u;
      }
    });
    console.log(user);
    if (user) {
      req.session.userId = user.id;
      res.redirect("/home");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
});

/************REGISTER USER*****************/
app.post("/register", redirectHome, (req, res) => {
  const { name, email, pwd } = req.body;
  if (name && email && pwd) {
    const exists = users.some(user => user.email === email);
    if (!exists) {
      const user = {
        id: users.length + 1,
        name: name,
        email: email,
        password: pwd
      };
      users.push(user);
      req.session.userId = user.id;
      return res.redirect("/home");
    }
  }
  res.redirect("/register");
});

/*************LOGOUT THE USER***********************/
app.post("/logout", redirectLogin, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.redirect("/home");
    }
  });
  res.clearCookie(SESS_NAME);
  res.redirect("/");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
//command to  run the app.js :: npm run dev
