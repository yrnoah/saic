/*eslint-disable */
import WechatOauth from 'wechat-oauth';
import express from 'express';
import WechatApi from 'wechat-api';
import WechatOauth from 'wechat-oauth';

import {
  token,
  appid,
  EncodingAESKey,
  app,
} from '../pro-server';


const Router = express.Router();
const [token, appid, EncodingAESKey, appsecret] =
      ['xjbtoken2333', 'wx818254b4c2b5bb7e', '49a35f5b9483e8f0011cf568b69c0d66', '49a35f5b9483e8f0011cf568b69c0d66'];
const api = new WechatApi(token, appsecret);

Router.get('/wechat_oauth', (req, res) => {
  
});

Router.get('/wechat_api', (req, res) => {
  
})

const Client = new WechatOauth(appid, appsecret);


