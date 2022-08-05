const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fa2ba09d0e66cbeef7fa63686efa182b&query='  + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find the location, try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast