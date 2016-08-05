const request = require('request')

module.exports = (res, server, path) => new Promise((resolve, reject) => {
  request({
    url: `http://${server}/${path}`,
    encoding: null
  }, (error, response, body) => {
    if (error) return reject({ code: response.statusCode, message: error.message })
    resolve({ image: body, type: response.headers['content-type'] })
  })
})
