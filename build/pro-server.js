const express = require('express');
const app = express();
const config = require('../config')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = config.prod.proxyTable
const wechat = require('wechat');
const WechatApi = require('wechat-api');



const [token, appid, EncodingAESKey, appsecret] = ['xjbtoken2333', 'wx818254b4c2b5bb7e', '49a35f5b9483e8f0011cf568b69c0d66', '49a35f5b9483e8f0011cf568b69c0d66'];
const api = new WechatApi(token, appsecret);

const wechatConfig = {
  token,
  appid,
  EncodingAESKey,
}

app.use(express.static('dist/'));
app.use(express.query());

app.use('/wechat', wechat(wechatConfig, (req, res, next) => {

}));

app.use((req, res, next) => {
  //使用wechat-api获取JSconfig  
  var param = {
    debug: false,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: req.body.url
  };
  /*api.getTicket(function(err,result){ 
          console.log(err); 
          console.log(result); 
  });*/
  api.getJsConfig(param, function (err, result) {
    res.send(result);
  });
})

app.use('/wechat_api', (req, res, next) => {
  console.log(api);
  res.send({ api, wechat, protypes:api.proptypes });
  next();
});

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

const port = 5001;
app.listen(port, (err) => { console.log("http oppened on " + port) });
