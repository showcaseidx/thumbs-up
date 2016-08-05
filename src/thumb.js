const sharp = require('sharp')

module.exports = (image, [ width, height ]) => {
  const thumbnail = sharp(image)

  thumbnail.rotate()
  if (width || height)
    thumbnail.resize(width, height)

  return thumbnail.toBuffer()
}
