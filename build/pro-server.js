const express = require('express');
const app = express();
const config = require('../config')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = config.dev.proxyTable
const wechat = require('wechat');

const [token, appid, EncodingAESKey] = ['xjbtoken2333', 'wx144dae9c46a5f240', 'Vggyp5zaDlGoBSW3PDY7QYRDW5MoUPS4lqeFRZlgUpS'];


const wechatConfig = {
  token,
  appid,
  EncodingAESKey,
}

app.use(express.static('dist/'));
app.use(express.query());

app.use('/wechat', wechat(wechatConfig, (req, res, next) => {
  console.log('wechatconfig');
}));

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

const port = 5001;
app.listen(port, (err) => { console.log("http oppened on " + port) });
