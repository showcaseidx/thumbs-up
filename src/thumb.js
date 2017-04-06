const sharp = require('sharp')

module.exports = (image, [ width, height ], webP) => {
  const thumbnail = sharp(image)

  thumbnail.rotate()
  if (width || height)
    thumbnail.resize(width, height)

  webP ? thumbnail.webp() : thumbnail.jpeg()

  return thumbnail.toBuffer({ resolveWithObject: true })
}
