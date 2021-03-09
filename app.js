const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Location address input
const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location} = {}) => {    //If we call geocode and an error occurs, the callback will be called with its default value
        if (error) {
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}


