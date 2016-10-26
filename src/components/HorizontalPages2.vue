<template>
	<div class="horizontal-pages2">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><h3 class="demoTit">报告1</h3><p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">报告2</h3><p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">报告3</h3><p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">报告4</h3><p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">报告5</h3><p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <choice></choice>
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  import Choice from './Choice';
  let horizontal2Swiper;

  export default {
    data() {
      return {
        moveStartY: 0,
      };
    },
    components: {
      Choice,
    },
    ready() {
      horizontal2Swiper = new Swiper('.horizontal-pages2', {
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          // console.log(horizontalPagesSwiper);
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          if (swiper.activeIndex === 0) {
            this.$dispatch('lockSlideNext');
            this.$dispatch('unlockSlidePrev');
          }
          if (swiper.activeIndex === 1) {
            this.$dispatch('lockSlidePrev');
          }
          if (swiper.activeIndex === 5) {
            this.$dispatch('unlockSlideNext');
          }
          if (swiper.activeIndex === 4 && swiper.previousIndex === 5) {
            this.$dispatch('lockSlideNext');
          }
        },
        direction: 'horizontal',
        loop: false,
      });
    },
    events: {
      'startPageAnimation'() {
        swiperAnimate(horizontal2Swiper);
      },
    },
  };
</script>

<style scoped>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../assets/sprite-saic.css';
	@import '../assets/animate.min.css';
	.horizontal-pages2 {
		height: 100%;
		width: 100%;
	}

  .swiper-wrapper {
    height: 100%;
		width: 100%;
  }

	.swiper-slide {
		overflow: hidden;
    height: 100%;
    width: 100%;
    text-align: center;
	}

  .demoBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .demoText, .demoTit {
    font-size: 20px;
    color: #FFF;
  }

  .demoTit {
    margin-top: 50%;
  }

</style>
