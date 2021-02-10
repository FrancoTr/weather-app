const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1df8c2e8ceafb40ac2f820b3298afeb3&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = response.body.current.temperature
            const aparentTemperature = response.body.current.feelslike
            const weatherDescription = response.body.current.weather_descriptions[0]
            callback(undefined, `${weatherDescription}: It is currently ${temperature} degrees out. It feels like ${aparentTemperature} degrees out.`)
        }
    })
}
module.exports = forecast