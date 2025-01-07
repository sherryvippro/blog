const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')

const route = require('./routes')
const database = require('./config/database')

// Connect to DB
database.connect()

const app = express()
const port = 3000

// Template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.json())
app.use(express.urlencoded())

route(app)

app.listen(port, () => {
    console.log(`Aapp listening at http://localhost:${port}`)
})
