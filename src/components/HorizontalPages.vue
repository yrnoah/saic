<template>
	<div class="swiper-slide horizontal-pages">
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
    },
    ready() {
      horizontalPagesSwiper = new Swiper('.horizontal-pages', {
        direction: 'horizontal',
        loop: false,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
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
            // this.$dispatch('unlockSlideNext');
          }
          if (swiper.activeIndex === 4 && swiper.previousIndex === 5) {
            // this.$dispatch('lockSlideNext');
          }
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
	}

  .horizontal-pages .swiper-wrapper {
    height: 100%;
		width: 100%;
  }

	.horizontal-pages .swiper-slide {
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
