const got = require('got')

module.exports = (res, server, path) =>
  got(`http://${server}/${path}`, { encoding: null })
    .then(response => ({ image: response.body, type: response.headers['content-type'] }))
