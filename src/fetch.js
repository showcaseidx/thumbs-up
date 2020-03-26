const got = require('got')

module.exports = (res, server, path, query) => {
  let remote_server = server
  if (server == 'http://api-prod.corelogic.com' || server == 'http://matrixrets.ntreis.net' || server == 'http://sabor-media.cdn-connectmls.com') {
    remote_server = server.replace('http://', 'https://');
  }
 console.log(`trying to fetch: ${remote_server}/${path}${query ? `?${query}` : ''}`)
  return got(`${remote_server}/${path}${query ? `?${query}` : ''}`, { encoding: null, rejectUnauthorized: false })
    .then(response => response.body)
}
