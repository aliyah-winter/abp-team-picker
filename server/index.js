const server = require('./server')

const port = `PORT`

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
