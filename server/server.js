const path = require('path')
const express = require('express')

const playerRoutes = require('./routes/playerRoutes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/players', playerRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
