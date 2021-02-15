const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPatch = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPatch))

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