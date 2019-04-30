require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require('./controllers/authCtrl')
const accCtrl = require('./controllers/accCtrl')
const bookCtrl = require('./controllers/bookCtrl')
const articlesCtrl = require('./controllers/articlesCtrl')
const newsLetterCtrl = require('./controllers/newsLetterCtrl')
const eventsCtrl = require('./controllers/eventsCtrl')

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
  req.session.destroy()
  res.redirect('http://localhost:3000/#/')
})

//user edit
app.put('/api/update/:id', accCtrl.update)

//book endpoints
app.post('/api/addbook',bookCtrl.add)
app.get('/api/books', bookCtrl.getBooks)
app.delete('/api/books/:id', bookCtrl.deleteBook)

//admin endpoints

//articles control
app.post('/api/addArticles', articlesCtrl.addArticle)
app.get('/api/articles', articlesCtrl.getArticles)

//newsletter control
app.post("/api/newsletter", newsLetterCtrl.subscribe)

//event endpoints
app.get('/api/events', eventsCtrl.getEvents)
app.post('/api/events', eventsCtrl.addEvent)
app.delete('/api/events/:id', eventsCtrl.deleteEvent)