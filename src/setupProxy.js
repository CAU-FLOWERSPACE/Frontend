const { createProxyMiddleWare } = require('http-proxy-middleware');

module.exports = function (app)
{
    app.use(
        '/',
        createProxyMiddleWare({
            target : 'http://localhost:8080',
            changeOrigin : true,
        })
    );
};