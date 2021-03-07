const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPatch = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) //Pointing Express into this custom path where dynamic templates are gathered
hbs.registerPartials(partialPath)

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
        helpMessage: 'This message will be redacted in the near future, I swear!',
        name: 'Franco Traverso'
    })
})

app.get('/weather', (req, res) => { // ../weather
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an Address'
        })
    }
    geocode(req.query.adress, (error, {latitude, longitude, location}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {    //Error "Cannot set headers after they are sent to the client" happens when there are multiple http responses
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Franco Traverso',
        errorMessage: 'Sorry!, Help article not found'
    })
})

//the 404 route handler should be last, because Express tries to match any former posibility
app.get('*', (req, res) => {    // "*" is a wildcard character, in this context, it means "match anything that hasn't been matched so far
    res.render('404', {
        title: '404',
        name: 'Franco Traverso',
        errorMessage: 'Sorry!, 404 Page not found :('
    })
})

app.listen(3000, () => {    //Web server set up in a local enviroment
    console.log('Server is up on port 3000.')
})    