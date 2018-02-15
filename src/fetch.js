const got = require('got')

module.exports = (res, server, path, query) =>
  got(`http://${server}/${path}${query ? `?${query}` : ''}`, { encoding: null })
    .then(response => response.body)
