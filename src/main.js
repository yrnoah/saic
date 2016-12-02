import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Index from './pages/Index';

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
window.onload = () => {
  const loadTimeout = setTimeout(() => {
    const loadingItem = document.querySelector('.default-loading');
    loadingItem.setAttribute('style', 'display: none');
    router.start(App, '#app');
    clearTimeout(loadTimeout);
  }, 1500);
};
