# Thumbs Up [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/thumbs-up.svg?style=flat-square
[npm]: https://www.npmjs.org/package/thumbs-up

A thumbnail server.

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
- Width, Height - The dimensions of the resulting image. Height is optional. E.g., "250x250" or "300". Can also be "original" to get an untouched image.
- Server - The domain name for your image.
- Path - The pathname for your image.

For example:
- `http://localhost:8080/500x500/idx.showcaseidx.com/images/noimages_large.png`
- `http://localhost:8080/640/idx.showcaseidx.com/images/noimages_large.png`

## Configuration
Thumbs Up reads some options from the environment. You can either set these with the `export` command, or prefix them in front of the `thumbs-up` command. If you're new to them, you can [read more about how they work](https://help.ubuntu.com/community/EnvironmentVariables).
```
PORT - (Default: 8080) The port number the server should listen to.
```
