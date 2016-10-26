require("babel-register");
const express = require('express');
const app = express();
const config = require('../config')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = config.prod.proxyTable
const wechat = require('wechat');
const bodyParser = require('body-parser');

const WechatApi = require('wechat-api');
const WechatOauth = require('wechat-oauth');

const router = express.Router();

const [token, appid, EncodingAESKey, appsecret] =
      ['xjbtoken2333', 'wx818254b4c2b5bb7e', '49a35f5b9483e8f0011cf568b69c0d66', '49a35f5b9483e8f0011cf568b69c0d66'];
const api = new WechatApi(token, appsecret);
const client = new WechatOauth(appid, appsecret);

const url = client.getAuthorizeURL('/', '123', 'snsapi_userinfo');

const wechatConfig = {
  token,
  appid,
  EncodingAESKey,
}

app.use(express.static('dist/'));
app.use(express.query());

app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

app.use('/wechat', wechat(wechatConfig, (req, res, next) => {}));



let wechat_api;
app.use((req, res, next) => {
  //使用wechat-api获取JSconfig  
  var param = {
    debug: false,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: 'http://srkfytl.gofriend.me/',
  };
  /*api.getTicket(function(err,result){ 
          console.log(err); 
          console.log(result); 
  });*/
  api.getJsConfig(param, function (err, result) {
    if(err) {
      console.log(err);
    }
    // console.log(result);
    wechat_api = result;
  });
})


router.get('/wechat_api', (req, res) => {
  res.send({ wechat_api });
});

router.get('/wechat_oauth', (req, res) => {
  res.send(url);
});

// app.use('/wechat_api', (req, res, next) => {
//   console.log(api);
//   res.send({ api, wechat, protypes:api.proptypes });
//   next();
// });

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

const port = 5001;
app.listen(port, (err) => { console.log("http oppened on " + port) });
