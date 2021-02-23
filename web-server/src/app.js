const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPatch = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) //Pointing Express into this cumtom path where dynamic templates are gathered

// Setup static directory to serve
app.use(express.static(publicDirectoryPatch))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Franco Traverso'
    }) //views folder ought to be inside the project's root
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Franco Traverso'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpMessage: 'This message will be redacted in the near future, I swear!'
    })
})

app.get('/weather', (req, res) => { // ../weather
    res.send({
        location: 'location TBD',
        weather: 'weather TBD'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})    