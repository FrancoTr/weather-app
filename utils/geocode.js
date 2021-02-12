const request = require('request')

// Geocoding
// PUBLIC TOKEN: pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg&limit=1'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation features (mapbox.com)', undefined) //data = undefined
        } else if(response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode