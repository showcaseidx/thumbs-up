const parseDimensions = dimensions => dimensions.split('x', 2).map(d => parseInt(d, 10) || null)

const splitter = new RegExp('^/([^/]+)/([^/]+)/(.+)$')

module.exports = url => {
  const parts = url.match(splitter)

  if (parts)
    return {
      dimensions: parseDimensions(parts[1]),
      server: parts[2],
      path: parts[3]
    }
}
