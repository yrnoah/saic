<template>
	<div class="swiper-container">
		<div class="sound">
			<audio id="music" loop="loop" preload="auto">
				<source src="../../static/valentin-loop.mp3" type="audio/mpeg">
			</audio>
		</div>
		<div class="musicBtn" @click="toggleMusic">
			<div v-if="!isPlayingMusic" class="icon-start-music"></div>
			<div v-else class="icon-stop-music"></div>
		</div>
		<div class="swiper-wrapper">
			<cover></cover>
			<elite></elite>
			<enterprise></enterprise>
			<international></international>
			<market></market>
			<slogan></slogan>
			<introduction></introduction>
			<major></major>
			<choice></choice>
			<login></login>
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  import {
    swiperAnimateCache,
    swiperAnimate,
  } from '../utils/swiper.animate.min.js';
  let appSwiper;
  import Cover from '../components/Cover';
  import Elite from '../components/Elite';
  import Enterprise from '../components/Enterprise';
  import International from '../components/International';
  import Market from '../components/Market';
  import Slogan from '../components/Slogan';
  import Introduction from '../components/Introduction';
  import Major from '../components/Major';
  import Choice from '../components/Choice';
  import Login from '../components/Login';
  import { $ } from '../utils/utils.js';

  export default {
    data() {
      return {
        isPlayingMusic: false,
      };
    },
    components: {
      Cover,
      Elite,
      Enterprise,
      International,
      Market,
      Slogan,
      Introduction,
      Major,
      Choice,
      Login,
    },
    ready() {
      this.startMusic();
      appSwiper = new Swiper('.swiper-container', {
        onInit: (swiper) => {
          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
        },
        onSlideChangeEnd: (swiper) => {
          swiperAnimate(swiper);
        },
        direction: 'vertical',
        loop: false,
      });
    },
    events: {
      'slideNext'() {
        appSwiper.unlockSwipeToNext();
        appSwiper.slideNext();
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

	.icon-stop-music {
		animation: rotate 8.0s infinite linear;
	}
</style>
