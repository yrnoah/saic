import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Index from './pages/Index';
// import Recruit from './pages/Recruit';

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({ history: true });
/* eslint-disable eol-last */
router.map({
  '/': {
    name: 'index',
    component: Index,
  },
});
router.start(App, '#app');
