<template>
	<div class="swiper-container">
		<div class="sound">
			<audio id="music" loop="loop">
				<source src="../../static/valentin-loop.mp3" type="audio/mpeg">
			</audio>
		</div>
		<div class="musicBtn" @click="toggleMusic">
			<div v-if="!isPlayingMusic" class="icon-stop-music"></div>
			<div v-else class="icon-start-music"></div>
		</div>
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
  import { $ } from '../utils/utils.js';

  export default {
    data() {
      return {
        hasTo2016: false,
        isPlayingMusic: false,
      };
    },
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
      this.startMusic();
      this.hasTo2016 = false;
      recruitSwiper = new Swiper('.swiper-container', {
        noSwiping: true,
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeStart: (swiper) => {
          if (swiper.activeIndex === 0) {
            recruitSwiper.unlockSwipeToNext();
            recruitSwiper.unlockSwipeToPrev();
          }
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
          if (swiper.activeIndex === 0) {
            recruitSwiper.unlockSwipeToNext();
            recruitSwiper.unlockSwipeToPrev();
          }
          if (swiper.activeIndex === 5) {
            this.$broadcast('startMoveMan');
          }
          if (swiper.activeIndex !== 5) {
            this.$broadcast('hideMan');
          }
          if (swiper.activeIndex === 2 && !this.hasTo2016) {
            this.hasTo2016 = true;
            recruitSwiper.slideTo(0, 1000);
            this.$broadcast('return2016');
          }
        },
        onTouchEnd: (swiper) => {
          if (swiper.activeIndex === 1) {
            recruitSwiper.unlockSwipeToPrev();
          }
        },
        direction: 'vertical',
        loop: false,
      });
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
    events: {
      'slideNext'() {
        if (recruitSwiper.activeIndex === 0) {
          recruitSwiper.unlockSwipeToNext();
          recruitSwiper.slideNext();
        }
      },
      'lockSlideNext'() {
        if (!this.hasTo2016) {
          recruitSwiper.lockSwipeToNext();
        }
      },
      'slidePrev'() {
        recruitSwiper.unlockSwipeToPrev();
        if (!this.hasTo2016) {
          this.hasTo2016 = true;
          recruitSwiper.slideTo(0, 1000);
          this.$broadcast('return2016');
        }
      },
      'slideTo2'() {
        if (recruitSwiper.activeIndex === 0) {
          // recruitSwiper.unlockSwipeToNext();
          recruitSwiper.slideTo(2, 500);
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

	.musicBtn {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 2;
		padding: 10px;
	}

	@keyframes rotate {
		25% {
			transform: rotate(90deg);
		}
		50% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(270deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.icon-start-music {
		animation: rotate 8.0s infinite linear;
	}
</style>
