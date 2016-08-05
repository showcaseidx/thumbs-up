# Thumbs Up [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/thumbs-up.svg?style=flat-square
[npm]: https://www.npmjs.org/package/thumbs-up

A thumbnail server that pulls from a variety of sources. Currently supported:
- Amazon S3
- Web URLs

## Installation
Install from [npm](https://www.npmjs.com):
```
npm install --global thumbs-up
```

## Usage

Thumbs Up pulls all configuration from the environment it's run in, so you can start it without any command line options:
```
thumbs-up
```
By default, the server will listen on port 8080. It takes in a URL in the format:
```
http://server:8080/WidthxHeight/Server/Path
```
- Width, Height - The dimensions of the resulting image. Height is optional. E.g., "250x250" or "300"
- Server - Either "s3" for images from S3, or a domain name to pull from the web.
- Path - Either the path to your S3 object, or the pathname for your web URL.

For example:
- `http://localhost:8080/500x500/s3/foo/bar.jpg`
- `http://localhost:8080/640/idx.showcaseidx.com/images/noimages_large.png`

## Configuration
Thumbs Up can read several options from the environment. You can either set these with the `export` command, or prefix them in front of the `thumbs-up` command. If you're new to them, you can [read more about how they work](https://help.ubuntu.com/community/EnvironmentVariables).
```
PORT - (Default: 8080) The port number the server should listen to.
S3_BUCKET - The S3 bucket name where your images reside.
S3_REGION - (Default: us-east-1 / US Standard) The region where your bucket lives.
S3_KEY - The AWS Access Key ID used to access the bucket. Set up a restricted, read-only access key!
S3_SECRET - The AWS Secret Access Key for the Access Key ID.
```
