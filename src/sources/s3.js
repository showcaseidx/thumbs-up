const { S3 } = require('aws-sdk')

const s3 = new S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: process.env.S3_REGION || 'us-east-1'
})

module.exports = (res, path) => new Promise((resolve, reject) => {
  s3.getObject(
    { Bucket: process.env.S3_BUCKET, Key: path },
    (error, object) => {
      if (error) {
        if (error.code == 'NoSuchKey') reject({ code: 404, message: 'Not Found' })
        else reject({ code: 500, message: error.message })
      } else {
        resolve({ image: object.Body, type: object.ContentType })
      }
    }
  )
})
