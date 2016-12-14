<template>
	<div class="swiper-container main-layout">
		<div class="sound">
			<audio id="music" loop="loop" preload="auto">
				<source src="../../static/valentin-loop.mp3" type="audio/mpeg">
			</audio>
		</div>
		<div class="musicBtn" @click="toggleMusic" v-if="showMusicIcon">
			<div v-if="!isPlayingMusic" class="music-icon-container">
        <img src="../../static/music.png" class="musicIcon">
      </div>
			<div v-else class="music-icon-container">
        <img src="../../static/music.png" class="musicIcon playing-music">
      </div>
		</div>
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
    <div class="bottom" v-if="showBottom" transition="bottom-animation">
      <img src="../../static/wechat-bottom2.png" class="provide-bg">
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
        showBottom: false,
        showMusicIcon: true,
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
    created() {
      this.$http.get('/api/jsconfig').then(resp => {
        console.log(resp);
      });
    },
    ready() {
      this.startMusic();
      appSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        slidesPerViewFit: true,
        calculateHeight: true,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeStart: () => {
          this.$broadcast('initAnimation');
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(appSwiper);
          if (!this.showMusicIcon) this.showMusicIcon = true;
          if (swiper.activeIndex !== 1 && swiper.activeIndex !== 3 && swiper.activeIndex !== 10) {
            appSwiper.unlockSwipes();
          }
          if (swiper.activeIndex === 1 && swiper.previousIndex === 0) {
            appSwiper.lockSwipeToNext();
            // this.$broadcast('startPageAnimation');
          }
          if (swiper.activeIndex === 1 && swiper.previousIndex === 2) {
            console.log('slideToMajor');
            this.$broadcast('goSelectMajorPage');
            appSwiper.lockSwipeToPrev();
            appSwiper.unlockSwipeToNext();
            // this.$broadcast('startPageAnimation');
          }
          if (swiper.activeIndex === 1) {
            this.$broadcast('startAnimation');
            this.$broadcast('startReportAnimation');
            this.$broadcast('initHasSlidePrev');
          }
          if (swiper.activeIndex === 2) {
            // appSwiper.lockSwipes();
            this.$broadcast('setMajorRelativePosition', this.relativeMajorIndex);
            // if (!this.preventWechatAutoplay) {
            //   this.$broadcast('startAutoPlay');
            // } else if (this.relativeMajorIndex && this.preventWechatAutoplay) {
            //   this.$broadcast('setMajorRelativePosition', this.relativeMajorIndex);
            // }
          }
          if (swiper.activeIndex === 3) {
            this.$broadcast('initHasSlideNext');
          }
          if (swiper.activeIndex === 7) {
            this.$broadcast('openLetter');
            this.showMusicIcon = false;
          }
          if (swiper.activeIndex === 5 || swiper.activeIndex === 6) {
            this.showBottom = true;
          } else {
            this.showBottom = false;
          }
        },
      });
    },
    events: {
      'slideNextMajor'() {
        appSwiper.unlockSwipes();
        appSwiper.slideTo(3);
        this.preventWechatAutoplay = false;
        this.$broadcast('initHasSlideNext');
        swiperAnimate(appSwiper);
      },
      'slidePrev'() {
        appSwiper.unlockSwipes();
        appSwiper.slidePrev();
        this.preventWechatAutoplay = false;
        this.$broadcast('initHasSlidePrev');
        // this.$broadcast('startCarAnimation');
      },
      'slideMajor'() {
        this.$broadcast('goSelectMajorPage');
        appSwiper.unlockSwipes();
        appSwiper.slidePrev();
        this.preventWechatAutoplay = false;
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
        appSwiper.unlockSwipes();
        this.preventWechatAutoplay = false;
        this.relativeMajorIndex = index;
        this.$broadcast('setMajorRelativePosition', index);
        appSwiper.slideTo(2);
        appSwiper.lockSwipes();
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
		z-index: 5;
		padding: 10px;
	}

  .musicIcon {
    width: 40px;
    height: 40px;
  }
	.playing-music {
		animation: rotate 8.0s infinite linear;
	}
  .main-layout {
    background-color: #56dffd;
  }
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
	.provide-bg {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: top;
  }
  .bottom-animation-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    overflow: hidden;
  }
  .bottom-animation-enter, .bottom-animation-leave {
    opacity: 0;
  }
</style>
