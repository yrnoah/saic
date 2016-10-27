<template>
	<div class="swiper-slide horizontal-pages3">
		<div class="swiper-wrapper">
			<provide></provide>
			<div class="swiper-slide flipPages">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<h3 class="demoTit">福利1</h3>
						<p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
					<div class="swiper-slide">
						<h3 class="demoTit">福利2</h3>
						<p class="demoText">向右滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
				</div>
			</div>
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
  import Provide from './Provide';
  import Email from './Email';
  let horizontal3Swiper;
  let flipSwiper;

  export default {
    data() {
      return {
        moveStartY: 0,
      };
    },
    components: {
      Email,
      Provide,
    },
    ready() {
      horizontal3Swiper = new Swiper('.horizontal-pages3', {
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          // console.log(horizontalPagesSwiper);
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          // console.log(swiper.activeIndex, 'page3');
          if (swiper.activeIndex === 0) {
            this.$dispatch('lockSlideNext');
            this.$dispatch('unlockSlidePrev');
          }
          if (swiper.activeIndex === 1) {
            // this.$dispatch('lockSlidePrev');
          }
          if (swiper.activeIndex === 2) {
            // this.$dispatch('unlockSlideNext');
          }
          if (swiper.activeIndex === 1 && swiper.previousIndex === 2) {
            // this.$dispatch('lockSlideNext');
          }
        },
        direction: 'horizontal',
        loop: false,
      });
      flipSwiper = new Swiper('.flipPages', {
        direction: 'horizontal',
        loop: false,
        effect: 'flip',
        nested: true,
        onSlideChangeEnd: () => {
          console.log(flipSwiper.activeIndex, 'flipSwiper');
        },
      });
    },
    events: {
      'startPageAnimation'() {
        swiperAnimate(horizontal3Swiper);
      },
    },
  };
</script>

<style scoped>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../assets/sprite-saic.css';
	@import '../assets/animate.min.css';
	.horizontal-pages3,
	.flipPages {
		height: 100%;
		width: 100%;
	}

	.horizontal-pages3 .swiper-wrapper,
	.flipPages .swiper-wrapper {
		height: 100%;
		width: 100%;
	}

	.horizontal-pages3 .swiper-slide,
	.flipPages .swiper-slide {
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

	.demoText,
	.demoTit {
		font-size: 20px;
		color: #FFF;
	}

	.demoTit {
		margin-top: 50%;
	}
</style>
