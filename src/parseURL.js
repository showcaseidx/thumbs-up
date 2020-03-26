const parseDimensions = dimensions => dimensions.split('x', 2).map(d => parseInt(d, 10) || null)

const splitter = new RegExp('^/([^/]+)/([^/]+)/(.+)$')

module.exports = str => {
  const [ url, query ] = str.split('?')
  const parts = url.match(splitter)

  if (parts)
    if (parts[0] && parts[0] == 's') {
      parts.shift()
      parts[2] = `https://${parts[2]}`
    }

    return {
      dimensions: parseDimensions(parts[1]),
      server: `http://${parts[2]}`,
      path: parts[3],
      query,
    }
}
