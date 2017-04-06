const got = require('got')

module.exports = (res, server, path) =>
  got(`http://${server}/${path}`, { encoding: null })
    .then(response => response.body)
