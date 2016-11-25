<template>
	<div class="swiper-slide horizontal-pages">
    <img src="../../static/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../static/earth.png" class="earth" v-if="!hideTheEarth" transition="hide-earth">
    </div>
    <div class="car-position" :class="{ moveCar: hideTheEarth, carFinishedStyle: carMoveFinished }">
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
        hideTheEarth: false,
        carMoveFinished: false,
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
        onSlideChangeStart: () => {
          this.$broadcast('initAnimation');
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          this.$broadcast('startReportAnimation');
          if (swiper.activeIndex === 0) {
            this.$dispatch('lockSlideNext');
            this.$dispatch('unlockSlidePrev');
          }
          if (swiper.activeIndex === 1) {
            this.$dispatch('lockSlidePrev');
          }
          if (swiper.activeIndex === 4) {
            this.hideTheEarth = false;
            this.carMoveFinished = false;
          }
          if (swiper.activeIndex === 5) {
            this.$broadcast('setToBottom');
            this.$broadcast('reAnimateSlogan');
            this.hideTheEarth = true;
            const moveCarTime = setTimeout(() => {
              this.carMoveFinished = true;
              clearTimeout(moveCarTime);
            }, 3000);
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
      'changeEarth'() {
        console.log();
        this.hideTheEarth = true;
      },
      'showEarth'() {
        this.hideTheEarth = false;
      },
      'initAnimation'() {
        this.hideTheEarth = false;
        this.carMoveFinished = false;
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
  .hide-earth-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    overflow: hidden;
    opacity: 1;
  }
  .hide-earth-enter, .hide-earth-leave {
    opacity: 0;
  }
  @keyframes move-car {
    0% { bottom: 70px; transform: scale(1, 1); }
    100% { bottom: 82%; transform: scale(.5, .5); }
  }
  @-webkit-keyframes move-car {
    0% { bottom: 70px; -webkit-transform: scale(1, 1); }
    100% { bottom: 82%; -webkit-transform: scale(.5, .5); }
  }
  /*@keyframes recover-car {
    0% { bottom: 82%; transform: scale(.5,.5); }
    100% { bottom: 70px; transform: scale(1, 1); }
  }
  @-webkit-keyframes recover-car {
    0% { bottom: 82%; -webkit-transform: scale(.5, .5); }
    100% { bottom: 70px; -webkit-transform: scale(1, 1); }
  }*/

  .moveCar {
    animation: move-car 3.0s ease;
    -webkit-animation: move-car 3.0s ease;
  }
  /*.recoverCar {
    animation: recover 2.0s ease;
    -webkit-animation: recover 2.0s ease;
  }*/
  .carFinishedStyle {
    transform: scale(.5, .5);
    -webkit-transform: scale(.5, .5);
    bottom: 82%;
  }
</style>
