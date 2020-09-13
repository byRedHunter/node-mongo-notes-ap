const express = require('express')
const path = require('path')

// Initializations
const app = express()

// SETTINGS
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

// GLOBAL VARIABLES
app.use(express.urlencoded({ extended: false }))

// MIDDLEWARES

// ROUTES
app.get('/', (req, res) => {
	res.send('Hi byRedHunter')
})

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
