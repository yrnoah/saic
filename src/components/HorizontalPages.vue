<template>
	<div class="swiper-slide horizontal-pages">
    <img src="../../static/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../static/earth.png" class="earth">
    </div>
    <div class="car-position">
      <car-animation></car-animation>
    </div>
		<div class="swiper-wrapper">
      <report-cover></report-cover>
			<report1></report1>
      <report2></report2>
      <report3></report3>
      <report4></report4>
      <vertical-pages></vertical-pages>
		</div>
	</div>
</template>

<script>
  import Swiper from '../../static/swiper.js';
  import CarAnimation from './CarAnimation';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  import VerticalPages from './VerticalPages';
  import ReportCover from './report/Cover';
  import Report1 from './report/Report1';
  import Report2 from './report/Report2';
  import Report3 from './report/Report3';
  import Report4 from './report/Report4';
  let horizontalPagesSwiper;

  export default {
    data() {
      return {
        moveStartY: 0,
      };
    },
    components: {
      ReportCover,
      Report1,
      Report2,
      Report3,
      Report4,
      VerticalPages,
      CarAnimation,
    },
    ready() {
      horizontalPagesSwiper = new Swiper('.horizontal-pages', {
        direction: 'horizontal',
        loop: false,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        // onTouchStart: () => {
        //   this.$broadcast('stopCarRotation');
        // },
        // onTouchEnd: (swiper) => {
        //   this.$broadcast(`startCarRotation${swiper.activeIndex}`);
        // },
        // onSlideChangeStart: () => {
        //   this.$broadcast('stopCarRotation');
        // },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          // this.$broadcast(`startCarRotation${swiper.activeIndex}`);
          if (swiper.activeIndex === 0) {
            this.$dispatch('lockSlideNext');
            this.$dispatch('unlockSlidePrev');
          }
          if (swiper.activeIndex === 1) {
            this.$dispatch('lockSlidePrev');
          }
          // if (swiper.activeIndex === 5) {
          //   // this.$dispatch('unlockSlideNext');
          // }
          // if (swiper.activeIndex === 4) {
          //   this.$broadcast('startPageAnimation');
          //   // this.$dispatch('lockSlideNext');
          // }
        },
      });
    },
    events: {
      'startAnimation'() {
        swiperAnimate(horizontalPagesSwiper);
      },
      'verticalToHorizen'() {
        // appSwiper.unlockSwipes();
        horizontalPagesSwiper.slideTo(4);
      },
    },
  };
</script>

<style scoped>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../assets/animate.min.css';
	.horizontal-pages {
		height: 100%;
		width: 100%;
    background-color: #4EDEFD;
    overflow: hidden;
	}

  .horizontal-pages .swiper-wrapper {
    height: 100%;
		width: 100%;
    position: relative;
    z-index: 1;
  }

	.horizontal-pages .swiper-slide {
		overflow: hidden;
    height: 100%;
    width: 100%;
    text-align: center;
	}

  .earth {
    display: block;
    vertical-align: top;
    width: 1270.5px;
    height: 1270.5px;
    position: relative;
    left: -440px;
    margin: 0;
    animation: rotate-left 40.0s infinite linear;
  }
  .car-position {
    position: absolute;
    bottom: 70px;
    width: 100%;
  }

  .bottom {
    position: absolute;
    bottom: -990px;
  }

   .bg-cloud {
    position: absolute;
    width: 100%;
    height: auto;
    top: 139px;
    left: 0;
    animation: cloud-float-horizen 2.0s linear infinite;
  }
</style>
