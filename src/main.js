import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Index from './pages/Index';
import Years from './pages/YearAnimation';
import Circles from './pages/WechatCircles';
import Recruit from './pages/Recruit';

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({ history: true });
/* eslint-disable eol-last */
router.map({
  '/': {
    name: 'index',
    component: Index,
  },
  '/years': {
    name: 'years',
    component: Years,
  },
  '/circles': {
    name: 'circles',
    component: Circles,
  },
  '/recruit': {
    name: 'recruit',
    component: Recruit,
  },
});
router.start(App, '#app');
