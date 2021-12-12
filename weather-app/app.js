const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=329a1ddb0754f7c3946d67cbf56197ee&query=37.8267,-122.4233'

request({ url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})
