// load express project into variable
const express = require('express')
// load sqlite3 into variable
const sqlite3 = require('sqlite3')
// load handlebars into variable
const { engine } = require('express-handlebars')
// load bcrypt into variable
const bcrypt = require('bcrypt')
// load session into variable
const session = require('express-session')
// load connect-sqlite3 into variable
const connectSQLite3 = require('connect-sqlite3')

// set the port
const port = 8080

// set salt rounds
const saltRounds = 12

// create the server
const app = express()

/* ---HANDLEBARS--- */
app.engine('handlebars', engine()) // initialize the engine to be handlebars
app.set('view engine', 'handlebars') // set handlebars as the view engine
app.set('views', __dirname + '/views') // define the views directory to be ./views
/* ---------------- */

/* ---Admin User--- */
const adminUsername = 'admin'
const adminPassword = '$2b$12$aPTylgM76nWd2vie6w3yz.jvAjrmA.c3uY0hK6V/IEqqKjuDMgLc.' // password: admin
/* ---------------- */

/* ---Create the database--- */
dbName = 'music_reviews.db'
const db = new sqlite3.Database(dbName)
/* ------------------------- */

/* ---Session Management--- */
const SQLiteStore = connectSQLite3(session)

// Session configuration
app.use(session({
    store: new SQLiteStore({ db: "session-db.db" }),
    "saveUninitialized": false,
    "resave": false,
    "secret": "R4nd0mS3cr3t"
}))

// Store the session in the response locals
app.use(function (req, res, next) {
    res.locals.session = req.session
    next()
})
/* ------------------------- */

app.use(express.static('public'))

app.get('/', (req, res) => {
    model = {
        'title': 'Home Page',
        isAdmin: req.session.isAdmin,
        isLoggedIn: req.session.isLoggedIn,
        username: req.session.username
    }
    console.log(model)
    res.render('home', model)
})

app.get('/songs', (req, res) => {
    res.render('songs', {'title': 'Songs Page'})
})

app.get('/your-reviews', (req, res) => {
    res.render('yourReview', {'title': 'Your Reviews Page'})
})

app.get('/about', (req, res) => {
    res.render('about', {'title': 'About Page'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {'title': 'Contact Page'})
})

app.listen(port, function () {
    console.log(`Server up and running, listening on port ${port} -> http://localhost:${port}/`)
})