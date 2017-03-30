const send404 = res => {
  const message = 'Not Found'
  res.writeHead(404, { 'Content-Type': 'text/plain', 'Content-Length': message.length })
  res.end(message)
}

const send500 = (res, error) => {
  const message = `Internal Server Error: ${error}`
  res.writeHead(500, { 'Content-Type': 'text/plain', 'Content-Length': message.length })
  res.end(message)
}

const sendError = res => ({statusCode, message}) => statusCode == 404 ? send404(res) : send500(res, message)

module.exports = {
  sendError,
  send404,
  send500
}
