const morgan = require('morgan')
const isDomain = require('is-fqdn')
const parseURL = require('./parseURL')

const fetch = require('./fetch')

const sendImage = require('./sendImage')
const { send404, sendError } = require('./errors')

const logger = morgan('combined')

module.exports = (req, res) => {
  logger(req, res, () => {})

  const url = parseURL(req.url)

  if (!url) return send404(res)

  const { dimensions, server, path, query } = url

  const [_proto, domain] = server.split('://')

  if (isDomain(domain)) {
    return fetch(res, server, path, query)
      .then(sendImage(req, res, dimensions))
      .catch(sendError(res))
  } else {
    return send404(res)
  }
}
