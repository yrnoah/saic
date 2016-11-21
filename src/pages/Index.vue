<template>
	<div class="swiper-container">
		<!--<div class="sound">
			<audio id="music" loop="loop" preload="auto">
				<source src="../../static/valentin-loop.mp3" type="audio/mpeg">
			</audio>
		</div>
		<div class="musicBtn" @click="toggleMusic">
			<div v-if="!isPlayingMusic" class="icon-stop-music"></div>
			<div v-else class="icon-start-music"></div>
		</div>-->
		<div class="swiper-wrapper">
			<home></home>
			<horizontal-pages></horizontal-pages>
      <wechat></wechat>
      <major></major>
      <requirement></requirement>
      <provide1></provide1>
      <provide2></provide2>
      <email></email>
		</div>
	</div>
</template>

<script>
  import Swiper from '../../static/swiper.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  let appSwiper;
  import Home from '../components/Home';
  import HorizontalPages from '../components/HorizontalPages';
  import Wechat from '../components/Wechat';
  import Major from '../components/Major';
  import Requirement from '../components/Requirement';
  import Provide1 from '../components/Provide1';
  import Provide2 from '../components/Provide2';
  import Email from '../components/Email';

  import { $ } from '../utils/utils.js';

  export default {
    data() {
      return {
        isPlayingMusic: false,
        moveStartY: 0,
        preventWechatAutoplay: false,
        relativeMajorIndex: null,
      };
    },
    components: {
      Home,
      HorizontalPages,
      Wechat,
      Major,
      Requirement,
      Provide1,
      Provide2,
      Email,
    },
    ready() {
      // this.startMusic();
      appSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        slidesPerViewFit: true,
        calculateHeight: true,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          this.$broadcast('startAnimation');
        },
        onSlideChangeStart: () => {
          this.$broadcast('initAnimation');
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(appSwiper);
          if (swiper.activeIndex !== 1 && swiper.activeIndex !== 3 && swiper.activeIndex !== 10) {
            appSwiper.unlockSwipes();
          }
          if (swiper.activeIndex === 1 && swiper.previousIndex === 0) {
            appSwiper.lockSwipeToNext();
            // this.$broadcast('startPageAnimation');
          }
          if (swiper.activeIndex === 1 && swiper.previousIndex === 2) {
            appSwiper.lockSwipeToPrev();
            appSwiper.unlockSwipeToNext();
            // this.$broadcast('startPageAnimation');
          }
          // if (swiper.activeIndex === 4) {
          //   this.$broadcast('startYearAnimation');
          // }
          // if (swiper.activeIndex === 3 && swiper.previousIndex === 2) {
          //   appSwiper.lockSwipeToNext();
          //   // this.$broadcast('startPageAnimation');
          // }
          // if (swiper.activeIndex === 3 && swiper.previousIndex === 4) {
          //   appSwiper.lockSwipeToPrev();
          //   appSwiper.unlockSwipeToNext();
          //   // this.$broadcast('initYearAnimation');
          //   // this.$broadcast('startPageAnimation');
          // }
          // if (swiper.activeIndex === 10 && swiper.previousIndex === 9) {
          //   appSwiper.lockSwipeToNext();
          //   // this.$broadcast('startPageAnimation');
          // }
          // if (swiper.activeIndex === 10 && swiper.previousIndex === 11) {
          //   appSwiper.lockSwipeToPrev();
          //   appSwiper.unlockSwipeToNext();
          //   // this.$broadcast('initYearAnimation');
          //   // this.$broadcast('startPageAnimation');
          // }
          if (swiper.activeIndex === 1) {
            this.$broadcast('initHasSlidePrev');
          }
          if (swiper.activeIndex === 2) {
            // appSwiper.lockSwipes();
            if (!this.preventWechatAutoplay) {
              this.$broadcast('startAutoPlay');
            } else if (this.relativeMajorIndex && this.preventWechatAutoplay) {
              this.$broadcast('setMajorRelativePosition', this.relativeMajorIndex);
            }
            // this.$broadcast('initYearAnimation');
          }
          if (swiper.activeIndex === 3) {
            this.$broadcast('initHasSlideNext');
            // this.$broadcast('startYearAnimation2');
          }
        },
      });
    },
    events: {
      'slideNext'() {
        appSwiper.unlockSwipes();
        appSwiper.slideNext();
        this.preventWechatAutoplay = false;
        this.$broadcast('initHasSlideNext');
        this.$broadcast('startYearAnimation2');
      },
      'slidePrev'() {
        appSwiper.unlockSwipes();
        appSwiper.slidePrev();
        this.preventWechatAutoplay = false;
        this.$broadcast('initHasSlidePrev');
      },
      'lockSlidePrev'() {
        appSwiper.lockSwipeToPrev();
      },
      'unlockSlidePrev'() {
        appSwiper.unlockSwipeToPrev();
      },
      'lockSlideNext'() {
        appSwiper.lockSwipeToNext();
      },
      'unlockSlideNext'() {
        appSwiper.unlockSwipeToNext();
      },
      'goWechatMajor'(index) {
        this.preventWechatAutoplay = true;
        this.relativeMajorIndex = index;
        this.$broadcast('setMajorRelativePosition', index);
        appSwiper.slideTo(2);
      },
      'goWechat'() {
        appSwiper.unlockSwipes();
        appSwiper.slideTo(2);
        this.$broadcast('startAutoPlay');
      },
    },
    methods: {
      startMusic() {
        const audio = $('#music')[0];
        if (!this.isPlayingMusic) {
          audio.play();
          this.isPlayingMusic = true;
        }
      },
      stopMusic() {
        const audio = $('#music')[0];
        audio.pause();
        audio.currentTime = 0;
        this.isPlayingMusic = false;
      },
      toggleMusic() {
        if (this.isPlayingMusic) {
          this.stopMusic();
        } else {
          this.startMusic();
        }
      },
    },
  };
</script>

<style>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../../static/sprite-saic.css';
	@import '../assets/animate.min.css';
  @import '../assets/saic-animate.css';
	.swiper-container {
		height: 100%;
		width: 100%;
	}

	.swiper-slide {
		overflow: hidden;
	}

	.musicBtn {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 2;
		padding: 10px;
	}

	.icon-start-music {
		animation: rotate 8.0s infinite linear;
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
