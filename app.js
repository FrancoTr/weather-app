const request = require("request")
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=1df8c2e8ceafb40ac2f820b3298afeb3&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const temperature = response.body.current.temperature
        const aparentTemperature = response.body.current.feelslike
        const weatherDescription = response.body.current.weather_descriptions[0]
    
        console.log(`${weatherDescription}: It is currently ${temperature} degrees out. It feels like ${aparentTemperature} degrees out.`)
    }
})


geocode('Chicago', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})