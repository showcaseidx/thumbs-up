const thumb = require('./thumb')

const sendImage = (res, type) => (image) => {
  res.writeHead(200, { 'Content-Type': type, 'Content-Length': image.length })
  res.end(image)
}

const { send500 } = require('./errors')

module.exports = (res, dimensions) => ({image, type}) => {
  thumb(image, dimensions)
    .then(sendImage(res, type))
    .catch(error => send500(res, error))
}
