const parseDimensions = dimensions => dimensions.split('x', 2).map(d => parseInt(d, 10) || null)

const unsecure = new RegExp('^/([^/]+)/([^/]+)/(.+)$')
const secure = new RegExp('^/s/([^/]+)/([^/]+)/(.+)$')
const secure_url = new RegExp('^/s/')

module.exports = str => {
  const [ url, query ] = str.split('?')
  let regex = unsecure
  let proto = 'http://'

  // www.resizer-domain.com/s/10x10/imagesourcefrommls.com
  if (url.match(secure_url)) {
    regex = secure
    proto = 'https://'
  }
  const parts = url.match(regex)

  return {
    dimensions: parseDimensions(parts[1]),
    server: `${proto}${parts[2]}`,
    path: parts[3],
    query,
  }
}
