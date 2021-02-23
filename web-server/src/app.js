const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPatch = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        message: 'This message will be redacted in the near future, I swear!'
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