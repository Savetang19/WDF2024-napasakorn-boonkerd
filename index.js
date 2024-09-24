const express = require('express')
const sqlite3 = require('sqlite3')
const { engine } = require('express-handlebars')

const port = 8080

// create the server
const app = express()

// create the database
dbName = 'music_reviews.db'
const db = new sqlite3.Database(dbName);

// HANDLEBARS
app.engine('handlebars', engine()) // initialize the engine to be handlebars
app.set('view engine', 'handlebars') // set handlebars as the view engine
app.set('views', __dirname + '/views') // define the views directory to be ./views

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {'title': 'Home Page'})
})

app.get('/songs', (req, res) => {
    res.render('songs', {'title': 'Songs Page'})
})

app.listen(port, function () {
    console.log(`Server up and running, listening on port ${port} -> http://localhost:${port}/`)
})