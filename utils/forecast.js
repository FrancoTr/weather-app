const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1df8c2e8ceafb40ac2f820b3298afeb3&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.current.temperature
            const aparentTemperature = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            callback(undefined, `${weatherDescription}: It is currently ${temperature} degrees out. It feels like ${aparentTemperature} degrees out.`)
        }
    })
}
module.exports = forecast