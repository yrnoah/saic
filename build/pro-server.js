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
app.set('trust proxy', true);
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

app.use('/wechat', wechat('xjbtoken2333', (req, res, next) => {
  next();
}))

url = client.getAuthorizeURL('http://srkfytl.gofriend.me/internal', 'momo233', 'snsapi_base');
app.get('/oauth', (req, res, next) => {
  console.log('oauth');
  res.redirect(url);
});


let jsconfig, userInfo;
app.get('/internal', (req, res, next) => {
  // client.getAccessToken(req.query.code, (err, resault) => {
  //  if(err) {
  //    console.log(err);
  //    next();
  //  }
  //  const openid = resault.data.openid;
  //  client.getUser(openid, (err, resault) => {
  //    if (err) {
  //      console.log(err);
  //      next();
  //   }
  //    userInfo = resault;
  //  });
  //  res.redirect('http://srkfytl.gofriend.me/?openid='+openid);
  //})
  res.redirect('http://srkfytl.gofriend.me/')
  let param = {
    debug: false,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: 'https://srkfytl.gofriend.me/oauth'
  };
  api.getJsConfig(param, (err, resault)=> {
    if(err) {
      console.log(err);
      next();
    }
    jsconfig = resault;
  });
});

app.get('/api/jsconfig', (req, res, next) => {
  // res.send({jsconfig, userInfo});
  res.send({jsconfig});
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
