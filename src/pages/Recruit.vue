<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<start></start>
			<decision></decision>
			<recruit></recruit>
			<requirement></requirement>
			<provide></provide>
			<provide-detail></provide-detail>
			<email></email>
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  let recruitSwiper;
  import Start from '../components/Start';
  import Decision from '../components/Decision';
  import Recruit from '../components/Recruit';
  import Requirement from '../components/Requirement';
  import Provide from '../components/Provide';
  import ProvideDetail from '../components/ProvideDetail';
  import Email from '../components/Email';

  export default {
    components: {
      Start,
      Decision,
      Recruit,
      Requirement,
      Provide,
      Email,
      ProvideDetail,
    },
    ready() {
      recruitSwiper = new Swiper('.swiper-container', {
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
        },
        direction: 'vertical',
        loop: false,
      });
    },
    events: {
      'slideNext'() {
        recruitSwiper.unlockSwipeToNext();
        recruitSwiper.slideNext();
      },
    },
  };
</script>

<style>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../assets/sprite-saic.css';
	@import '../assets/animate.min.css';
	.swiper-container {
		height: 100%;
		width: 100%;
	}

	.swiper-slide {
		overflow: hidden;
	}
</style>
