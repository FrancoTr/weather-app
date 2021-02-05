const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1df8c2e8ceafb40ac2f820b3298afeb3&query=37.8267,-122.4233'

request({ url: url, json: true}, (error, response) => {
    console.log(response.body.current)
})