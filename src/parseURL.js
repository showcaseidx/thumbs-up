const parseDimensions = dimensions => dimensions.split('x', 2).map(d => parseInt(d, 10) || null)

const splitter = new RegExp('^/([^/]+)/([^/]+)/(.+)$')

module.exports = str => {
  const [ url, query ] = str.split('?')
  const parts = url.match(splitter)

  // www.resizer-domain.com/s/10x10/imagesourcefrommls.com
  if (parts)
    if (parts[1] && parts[1] == 's') {
      return {
        dimensions: parseDimensions(parts[2]),
        server: `https://${parts[3]}`,
        path: parts[4],
        query,
      }
    } else {
      return {
        dimensions: parseDimensions(parts[1]),
        server: `http://${parts[2]}`,
        path: parts[3],
        query,
      }
    }
}
