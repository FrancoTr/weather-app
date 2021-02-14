const express = require('express')

const app = express()

app.get('', (req, res) => {         // root
    res.send('Hello express!')
})

app.get('/help', (req, res) => {    // ../help
    res.send('Help page')
})

app.get('/about', (req, res) => {   // ../about
    res.send('About page')
})

app.get('/weather', (req, res) => { // ../weather
    res.send('Current weather')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})    