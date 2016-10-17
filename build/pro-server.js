const express = require('express');
const app = express();
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var proxyTable = config.dev.proxyTable

app.use(express.static('dist/'));

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

const port = 5002;
app.listen(port, (err) => { console.log("http oppened on " + port) });
