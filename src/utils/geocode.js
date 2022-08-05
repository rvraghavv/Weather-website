const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=7e361ef68951e86d43482557991a035f&query=' + address

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.data.length === 0){
            callback('Unable to find the location, try another search', undefined)
        } else {
callback(undefined, {
    latitude: body.data[0].latitude,
    longitude: body.data[0].longitude,
    location: body.data[0].name
})
        }
    })
}


module.exports = geocode