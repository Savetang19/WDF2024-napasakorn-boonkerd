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
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    model = {
        'title': 'Home Page',
        isAdmin: req.session.isAdmin,
        isLoggedIn: req.session.isLoggedIn,
        username: req.session.username
    }
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

app.get('/login', (req, res) => {
    res.render('login', {'title': 'Login Page'})
})

app.post('/login', (req, res) => {
    // Get the username and password from the request
    const username = req.body.username
    const password = req.body.password

    // Check if the username and password are correct
    if (username == adminUsername) {
        bcrypt.compare(password, adminPassword, (err, result) => {
            if (err) {
                console.log(`There was an error with login page: ${err}`)
            }
            if (result) {
                // Set the session variables
                req.session.isLoggedIn = true
                req.session.isAdmin = true
                req.session.username = username

                // Redirect to the home page
                res.redirect('/')
            } else {
                model = {
                    'title': 'Login Page',
                    error: 'Password is incorrect!'
                }
                // Render the login page with an error message
                return res.status(400).render('login', model)
            }
        })
    } else {
        // Render the login page with an error message
        model = {
            'title': 'Login Page',
            error: 'Username is incorrect!'
        }
        return res.status(400).render('login', model)
    }
})

app.get('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy( (err) => {
        if (err) {
            console.log('ERROR: ', err)
        }
        res.redirect('/')
    })
})

app.listen(port, function () {
    console.log(`Server up and running, listening on port ${port} -> http://localhost:${port}/`)
})