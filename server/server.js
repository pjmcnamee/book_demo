require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require('./controllers/userCtrl')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB set");
  app.listen(SERVER_PORT, () =>
    console.log("🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠", SERVER_PORT)
  );
});

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000* 60 * 60 * 24 * 365
  }
}))


//user Auth
app.get('/auth/user-data', authCtrl.userData)
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', (req,res) => {
  console.log('server side logout hit')
  req.session.destroy()
  res.redirect('http://localhost:3000/#/')
})