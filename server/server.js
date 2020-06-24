const path = require('path')
const express = require('express')

const server = express()

const routes = require('./routes') // Added: has to match routes folder being hit

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/spacex', routes) // added: Must match the end of the path defined in api.js

module.exports = server
