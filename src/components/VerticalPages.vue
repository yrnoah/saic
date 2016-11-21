<template>
	<div class="swiper-slide vertical-pages">
		<div class="swiper-wrapper">
			<space></space>
      <runway></runway>
      <logo></logo>
      <slogan></slogan>
		</div>
	</div>
</template>

<script>
  import Swiper from '../../static/swiper.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  import Slogan from './vertical/Slogan';
  import Logo from './vertical/Logo';
  import Runway from './vertical/Runway';
  import Space from './vertical/Space';
  let verticalTopSwiper;

  export default {
    data() {
      return {
        moveStartY: 0,
        moveStartX: 0,
      };
    },
    components: {
      Slogan,
      Logo,
      Runway,
      Space,
    },
    ready() {
      verticalTopSwiper = new Swiper('.vertical-pages', {
        initialSlide: 4,
        direction: 'vertical',
        loop: false,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          // this.$broadcast('startAnimation');
        },
        onSlideChangeStart: () => {
          this.$broadcast('initAnimation');
        },
        onSlideChangeEnd: (swiper) => {
          if (swiper.activeIndex === 0) {
            this.$broadcast('startCarAnimation');
          }
          if (swiper.activeIndex === 2) {
            this.$broadcast('setToBottom');
          }
        },
        onTouchStart: (swiper, event) => {
          if (swiper.activeIndex === 0) {
            this.moveStartY = event.changedTouches[0].pageY;
          }
          if (swiper.activeIndex === 3) {
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
          if (swiper.activeIndex === 3) {
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
