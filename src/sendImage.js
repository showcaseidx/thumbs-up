const thumb = require('./thumb')
const etag = require('etag')

const canWebP = req => typeof req.headers['accept'] == 'string' && req.headers['accept'].includes('image/webp')

const sendResponse = res => ({ info: { format, size }, data:image }) => {
  res.writeHead(200, { 'Content-Type': `image/${format}`, 'Content-Length': size, 'Access-Control-Allow-Origin': '*', ETag: etag(image), 'Cache-Control': 'max-age=2592000, public' })
  res.end(image)
}

const { send500 } = require('./errors')

module.exports = (req, res, dimensions) => image => {
  thumb(image, dimensions, canWebP(req))
    .then(sendResponse(res))
    .catch(error => send500(res, error))
}
