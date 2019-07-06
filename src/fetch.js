const got = require('got')

module.exports = (res, server, path, query) => {
  if (server == 'api-prod.corelogic.com') {
    return got(`https://${server}/${path}${query ? `?${query}` : ''}`, { encoding: null })
      .then(response => response.body)
  } else {
    return got(`http://${server}/${path}${query ? `?${query}` : ''}`, { encoding: null })
      .then(response => response.body)
  }
}
