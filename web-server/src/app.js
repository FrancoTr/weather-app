const express = require('express')

const app = express()

app.get('', (req, res) => {         // root
    res.send('<h1>Weather App: Under construction</h1>')
})

app.get('/help', (req, res) => {    // ../help
    res.send({
        name: 'Franco',
        age: 31
    })
})

app.get('/about', (req, res) => {   // ../about
    res.send('<h1>About page: Under construction</h1>')
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