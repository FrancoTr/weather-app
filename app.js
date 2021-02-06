const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1df8c2e8ceafb40ac2f820b3298afeb3&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {

    const temperature = response.body.current.temperature
    const aparentTemperature = response.body.current.feelslike
    const weatherDescription = response.body.current.weather_descriptions[0]

    console.log(`${weatherDescription}: It is currently ${temperature} degrees out. It feels like ${aparentTemperature} degrees out.`)
})

// Geocoding
//PUBLIC TOKEN: pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {   

    const longitude = response.body.features[0].center[0]    //center[0] has the longitude coordinate
    const latitude = response.body.features[0].center[1]     //center[1] has the latitude coordinate

    console.log(`Latitude: ${latitude} ; Longitude: ${longitude}`)
})