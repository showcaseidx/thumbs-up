const thumb = require('./thumb')

const canWebP = req => typeof req.headers['accept'] == 'string' && req.headers['accept'].includes('image/webp')

const sendResponse = (res, webP) => image => {
  res.writeHead(200, { 'Content-Type': webP ? 'image/webp' : 'image/jpeg', 'Content-Length': image.length })
  res.end(image)
}

const { send500 } = require('./errors')

module.exports = (req, res, dimensions) => image => {
  thumb(image, dimensions, canWebP(req))
    .then(sendResponse(res, canWebP(req)))
    .catch(error => send500(res, error))
}
