const server = require('./src/server')

// Start a server and listen to requests.
const port = process.env.PORT || 8080

server.on('error', e => console.error(e))
server.listen(port, () => console.log(`Listening on port ${port}`))
