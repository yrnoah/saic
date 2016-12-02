import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Index from './pages/Index';
import Swiper from './pages/Swiper';

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({ history: true });
/* eslint-disable eol-last */
router.map({
  '/': {
    name: 'index',
    component: Index,
  },
  '/Swiper': {
    name: 'swiper',
    component: Swiper,
  },
});

router.start(App, '#app');

// const imgList = [
//   './static/car-big.png',
//   './static/wheel-big.png',
//   './static/home-slogan.png',
//   './static/home-bottom.png',
//   './static/home-buildings.png',
//   './static/home-text1.png',
//   './static/home-text2.png',
//   './static/home-text3.png',
//   './static/home-text4.png',
//   './static/earth.png',
//   './static/music.png',
//   './static/music-close.png',
//   './static/future-longbg.jpg',
//   './static/home-bgs.png',
//   './static/home-title.png',
//   './static/report-cloud.png',
//   './static/report-year.png',
//   './static/report-title.png',
//   './static/report-polygon.png',
//   './static/report1-title.png',
//   './static/report1-content.png',
//   './static/report2-title.png',
//   './static/report2-content.png',
//   './static/report3-title.png',
//   './static/report3-content.png',
//   './static/report4-title.png',
//   './static/report4-content.png',
//   './static/wechat-require.png',
//   './static/wechat-bgboard.png',
//   './static/wechat-man1.png',
//   './static/logo.png',
//   './static/name.png',
//   './static/slogan-title.png',
//   './static/slogan-tip.png',
//   './static/share-txt.png',
//   './static/email-title.png',
//   './static/wechat-gradient.png',
//   './static/wechat-title1.png',
//   './static/wechat-bgboard.png',
//   './static/major-icon1.png',
//   './static/wechat-major1.png',
//   './static/major-icon2.png',
//   './static/wechat-major2.png',
//   './static/major-icon3.png',
//   './static/wechat-major3.png',
//   './static/major-icon4.png',
//   './static/wechat-major4.png',
//   './static/wechat-man2.png',
//   './static/wechat-bgpolygan.png',
//   './static/wechat-provide1.png',
//   './static/wechat-right.png',
//   './static/wechat-provide2.png',
//   './static/wechat-bottom2.png',
//   './static/wechat-bgpolygan2.png',
//   './static/wechat-provide4.png',
//   './static/wechat-provide3.png',
//   './static/future-car.png',
//   './static/future-carwing.png',
//   './static/future-cartail.png',
//   './static/future-cloud.png',
//   './static/future-topbuilding.png',
//   './static/bg-cloud-1.png',
//   './static/banner1.png',
//   './static/banner2.png',
//   './static/banner3.png',
//   './static/banner4.png',
//   './static/banner5.png',
//   './static/banner6.png',
//   './static/future-major.png',
//   './static/future-major1.png',
//   './static/future-major2.png',
//   './static/future-major3.png',
//   './static/future-major4.png',
//   './static/future-topbg.png',
//   './static/future-polygan2.png',
//   './static/future-polygan3.png',
//   './static/future-polygan4.png',
//   './static/future-polygan5.png',
//   './static/future-polygan7.png',
//   './static/years-2021.png',
//   './static/years-2020.png',
//   './static/years-2019.png',
//   './static/wechat-top.png',
//   './static/avatar-user.png',
//   './static/avatar-1.png',
//   './static/pic-1.png',
//   './static/avatar-2.png',
//   './static/pic-2.png',
//   './static/avatar-3.png',
//   './static/pic-3.png',
//   './static/avatar-4.png',
//   './static/pic-4.png',
//   './static/avatar-5.png',
//   './static/pic-5.png',
//   './static/avatar-6.png',
//   './static/pic-6.png',
//   './static/sprite-saic.png',
//   './static/letter-bottom.png',
//   './static/letter-top.png',
//   './static/letter-inner.png',
//   './static/home-bike.png',
//   './static/home-car.png',
//   './static/home-cloud.png',
//   './static/home-logo.png',
//   './static/home-windmill-leaves.png',
//   './static/home-windmill-range.png',
//   './static/home-windmill1.png',
//   './static/provide-building.png',
//   './static/provide-car.png',
//   './static/provide.png',
// ];
// const imgItem = [];
// let loadCount = 0;
// /* eslint-disable no-loop-func */
// const preloader = () => {
//   for (let i = 0; i < imgList.length; i++) {
//     const img = new Image();
//     img.src = imgList[i];
//     imgItem.push(img);
//     img.onload = () => {
//       loadCount++;
//       // console.log(loadCount, 'preloader');
//       if (loadCount === imgList.length) {
//         const loadTimeout = setTimeout(() => {
//           const loadingItem = document.querySelector('.default-loading');
//           loadingItem.setAttribute('style', 'display: none');
//           router.start(App, '#app');
//           clearTimeout(loadTimeout);
//         }, 2000);
//       }
//     };
//   }
// };
// preloader();

// window.onload = () => {
//   console.log(loadCount, 'onload');
//   const loadTimeout = setTimeout(() => {
//     const loadingItem = document.querySelector('.default-loading');
//     loadingItem.setAttribute('style', 'display: none');
//     router.start(App, '#app');
//     clearTimeout(loadTimeout);
//   }, 1500);
// };
