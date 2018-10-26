const app = require('./src/server');

function App(req,res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req,res);
}

const thumbsUp = App

module.exports = {
    thumbsUp
};
