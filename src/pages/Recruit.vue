<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<year-animation></year-animation>
			<wechat></wechat>
			<start></start>
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
  import Recruit from '../components/Recruit';
  import Requirement from '../components/Requirement';
  import Provide from '../components/Provide';
  import ProvideDetail from '../components/ProvideDetail';
  import Email from '../components/Email';
  import YearAnimation from '../components/YearAnimation';
  import Wechat from '../components/Wechat';

  export default {
    components: {
      Start,
      Recruit,
      Requirement,
      Provide,
      Email,
      ProvideDetail,
      YearAnimation,
      Wechat,
    },
    ready() {
      recruitSwiper = new Swiper('.swiper-container', {
        noSwiping: true,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          if (swiper.activeIndex === 1) {
            recruitSwiper.lockSwipeToNext();
          } else {
            recruitSwiper.unlockSwipeToNext();
          }
          if (swiper.activeIndex === 2) {
            recruitSwiper.lockSwipeToPrev();
          } else {
            recruitSwiper.unlockSwipeToPrev();
          }
          if (swiper.activeIndex === 5) {
            this.$broadcast('startMoveMan');
          }
          if (swiper.activeIndex !== 5) {
            this.$broadcast('hideMan');
          }
        },
        onTouchEnd: (swiper) => {
          const shouldReturn = (swiper.height - swiper.touches.currentY) < 200;
          if (swiper.activeIndex === 1 && shouldReturn) {
            recruitSwiper.slidePrev();
            this.$broadcast('return2016');
          }
        },
        direction: 'vertical',
        loop: false,
      });
    },
    events: {
      'slideNext'() {
        if (recruitSwiper.activeIndex === 0) {
          recruitSwiper.unlockSwipeToNext();
          recruitSwiper.slideNext();
        }
      },
      'slideTo2'() {
        if (recruitSwiper.activeIndex === 0) {
          recruitSwiper.unlockSwipeToNext();
          recruitSwiper.slideTo(2, 0);
        }
      },
      'goBackYears'() {
        recruitSwiper.slidePrev();
        this.$broadcast('return2016');
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

<!--if (swiper.activeIndex === 0) {
            const goWxCircles = setTimeout(() => {
              recruitSwiper.slideNext();
              clearTimeout(goWxCircles);
            }, 3000);
          }-->
