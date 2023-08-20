const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.0.48.11:803/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    })
  );
};
