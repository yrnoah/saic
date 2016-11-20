<template>
	<div class="swiper-slide vertical-pages">
		<div class="swiper-wrapper">
      <div class="swiper-slide"><h3 class="demoTit">滑页1</h3><p class="demoText">向上滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
			<div class="swiper-slide"><h3 class="demoTit">滑页2</h3><p class="demoText">向上滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">滑页3</h3><p class="demoText">向上滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">滑页4</h3><p class="demoText">向上滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
      <div class="swiper-slide"><h3 class="demoTit">滑页5</h3><p class="demoText">向上滑</p><img src="../images/bg-navy.png" class="demoBg"></div>
		</div>
	</div>
</template>

<script>
  import Swiper from '../../static/swiper.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  // import Slogan from './Slogan';
  let verticalTopSwiper;

  export default {
    data() {
      return {
        moveStartY: 0,
        moveStartX: 0,
      };
    },
    components: {
      // Slogan,
    },
    ready() {
      verticalTopSwiper = new Swiper('.vertical-pages', {
        initialSlide: 4,
        direction: 'vertical',
        loop: false,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          // console.log(verticalTopSwiper);
        },
        onSlideChangeEnd: (swiper) => {
          // swiperAnimate(swiper);
          if (swiper.activeIndex === 0) {
            console.log(swiper.activeIndex);
            // this.$dispatch('unlockSlideNext');
            // this.$dispatch('lockSlidePrev');
          }
          // if (swiper.activeIndex === 1) {
          //   this.$dispatch('lockSlidePrev');
          // }
          // if (swiper.activeIndex === 5) {
          //   this.$dispatch('unlockSlideNext');
          // }
          // if (swiper.activeIndex === 4 && swiper.previousIndex === 5) {
          //   this.$dispatch('lockSlideNext');
          // }
        },
        onTouchStart: (swiper, event) => {
          if (swiper.activeIndex === 0) {
            this.moveStartY = event.changedTouches[0].pageY;
          }
          if (swiper.activeIndex === 4) {
            this.moveStartX = event.changedTouches[0].pageX;
            this.moveStartY = event.changedTouches[0].pageY;
          }
        },
        onTouchMove: (swiper, event) => {
          if (swiper.activeIndex === 0) {
            const moveDistance = event.changedTouches[0].pageY - this.moveStartY;
            if (moveDistance > 300) {
              this.$dispatch('goWechat');
              this.moveStartY = 0;
              return;
            }
          }
          if (swiper.activeIndex === 4) {
            const moveDistanceX = event.changedTouches[0].pageX - this.moveStartX;
            const moveDistanceY = event.changedTouches[0].pageY - this.moveStartY;
            if (moveDistanceX > 100 && moveDistanceY < 100) {
              this.$dispatch('verticalToHorizen');
              this.moveStartX = 0;
              this.moveStartY = 0;
              return;
            }
          }
        },
      });
    },
    events: {
      'startPageAnimation'() {
        swiperAnimate(verticalTopSwiper);
      },
    },
  };
</script>

<style scoped>
	@import '../assets/swiper-3.3.1.min.css';
	/*@import '../assets/sprite-saic.css';*/
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
