const got = require('got')

module.exports = (res, server, path, query) => {
  if (server == 'http://api-prod.corelogic.com' || server == 'http://matrixrets.ntreis.net' || server == 'http://sabor-media.cdn-connectmls.com') {
    server = server.replace('http://', 'https://');
  }
 console.log(`trying to fetch: ${server}/${path}${query ? `?${query}` : ''}`)
  return got(`${server}/${path}${query ? `?${query}` : ''}`, { encoding: null, rejectUnauthorized: false })
    .then(response => response.body)
}
