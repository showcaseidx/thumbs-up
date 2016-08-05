const http = require('http')
const isDomain = require('is-fqdn')
const parseURL = require('./parseURL')

const s3 = require('./sources/s3')

const sendImage = require('./sendImage')
const { send404, sendError } = require('./errors')

module.exports = http.createServer((req, res) => {
  const url = parseURL(req.url)

  if (!url) return send404(res)

  const { dimensions, server, path } = url

  if (server === 's3') {
    return s3(res, path)
      .then(sendImage(res, dimensions))
      .catch(sendError(res))
  } else if (isDomain(server)) {


    res.end(server)
  } else {
    return send404(res)
  }
})
