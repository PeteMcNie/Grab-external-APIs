const express = require('express')
const request = require('superagent')

const router = express.Router()

const spacexurl = 'https://api.spacexdata.com/v4/launches/latest'

router.get('/', (req, res) => {
  request.get(spacexurl)
    .then(response => {
      // console.log('server-side: ', response.body)
      const { links, success, details, flight_number } = response.body
      // console.log('server-side: ', links, success, details, flight_number)
      res.json({ links, success, details, flight_number })
    })
})

module.exports = router
