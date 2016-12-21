const express = require('express');
const app = express();
const config = require('../config')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = config.prod.proxyTable
const wechat = require('wechat');
const bodyParser = require('body-parser');
const path = require('path');
const WechatOauth = require('wechat-oauth');
const WechatApi = require('wechat-api');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const swig = require('swig');

const [token, appid, EncodingAESKey, appsecret] =
      ['xjbtoken2333',
       'wx303ebb45370d45cf',
       'aazZyX4LXwzRKB7WP46s2accfyb7RmL7L5b1J2oI0Jf',
       '8f8b82350cb970a53267daf899a868c4'];
const api = new WechatApi(appid, appsecret);
const client = new WechatOauth(appid, appsecret);

let url;
app.set('view engine', 'html');
app.set('view cache', false);
app.set('views', './dist')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.engine('html', swig.renderFile);
app.use(express.static('dist', {'extensions': ['html']}));
app.use(express.query());
const wechatConfig = {
  token,
  appid,
  EncodingAESKey,
}

// Error Handlers
if (app.get('env') === 'development') {
  // development error handler, will print stacktrace
  renderError(true);
} else {
  // production error handler, no stacktrace leaked to user
  renderError(false);
}
function renderError(sendErrorObj) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: sendErrorObj ? err : {}
    });
  });
}

let wechat_api;

//app.use('/wechat', wechat('xjbtoken2333', (req, res, next) => {
//  next();
//}))

app.use('/wechat', wechat({
  token: 'xjbtoken2333',
  appid: appid,
}, (req, res, next)=> {
  next();
}))

url = client.getAuthorizeURL('http://srkfytl.gofriend.me/internal', 'momo233', 'snsapi_userinfo');
app.get('/oauth', (req, res, next) => {
  res.redirect(url);
});


let jsconfig, userInfo;
app.get('/internal', (req, res, next) => {
	console.log(req);
  let param = {
    debug: false,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: 'http://srkfytl.gofriend.me/'
  };
  api.getJsConfig(param, (err, resault)=> {
    if(err) {
      console.log(err);
      next();
    }
    jsconfig = resault;
  });
  res.redirect('http://srkfytl.gofriend.me');
});

app.get('/api/jsconfig', (req, res, next) => {
  res.send(jsconfig);
  next();
})

// app.get('/user_info', (req, res, next) => {
//   const { openId } = req.body;
//   client.getUser(openId, () => {

//   })
// })

app.get('/', (req, res, next) => {
  res.render('index');
});

const port = 5003;
app.listen(port, (err) => { console.log("http oppened on " + port) });
