<template>
	<div class="swiper-slide slogan">
    <div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
      <div class="angel-animation"><div class="up-angel"></div></div>
    </div>
    <img src="../../../static/slogan-title.png" class="slogan-title" v-if="fadeInSlogan" transition="zoom">
    <img src="../../../static/slogan-tip.png" class="slogan-tip" v-if="fadeInSlogan" transition="zoom">
    <div v-if="fadeInLogo" transition="zoom" class="logo-container">
      <img src="../../../static/logo.png" class="logo">
      <img src="../../../static/name.png" class="name">
    </div>
    <!--<img src="../../../static/slogan-title.png" class="slogan-title ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" :class="{ hide: fadeOutFinished, fadeOut: fadeOutSlogan }">
    <img src="../../../static/slogan-tip.png" class="slogan-tip ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s" :class="{ hide: fadeOutFinished, fadeOut: fadeOutSlogan }">
    <img src="../../../static/logo.png" class="logo ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2.0s" swiper-animate-delay="3.0s">
    <img src="../../../static/name.png" class="name ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="3.3s">-->
	</div>
</template>
<script>
  // import CarAnimation from '../CarAnimation';
  export default {
    // components: {
    //   CarAnimation,
    // },
    data() {
      return {
        fadeInSlogan: false,
        fadeInLogo: false,
      };
    },
    events: {
      'reAnimateSlogan'() {
        this.fadeInSlogan = true;
        const reAnimate = setTimeout(() => {
          this.fadeInLogo = true;
          this.fadeInSlogan = false;
          clearTimeout(reAnimate);
        }, 3000);
        // const finishedTimeout = setTimeout(() => {
        //   this.fadeOutFinished = true;
        //   clearTimeout(finishedTimeout);
        // }, 2500);
      },
      'initAnimation'() {
        // this.fadeOutSlogan = false;
        // this.fadeOutFinished = false;
        this.fadeInLogo = false;
        this.fadeInSlogan = false;
      },
    },
  };
</script>
<style scoped>
	.slogan {
		background-color: transparent;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .slogan-title {
    width: 77%;
    height: auto;
    margin: 86px auto 26px auto;
    position: relative;
    z-index: 1;
  }
  .slogan-tip {
    width: 44%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .logo-container {
    width: 100%;
    position: absolute;
    top: 15%;
    left: 0;
  }
  .angel-animation {
    position: absolute;
    bottom: 10px;
    width: 100%;
    animation: bounce-down 1s linear infinite;
  }

  .up-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-width: 2px 2px 0 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin: 0 auto;
  }
  .fadeOut {
    animation: fade-out 1s ease;
    -webkit-animation: fade-out 1s ease;
  }
  .hide {
    display: none;
  }
  .logo {
    width: 66%;
    height: auto;
    margin: 0 auto 25px auto;
    position: relative;
    /*top: 15%;*/
    z-index: 1;
  }
  .name {
    width: 64%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    /*top: 18%;*/
  }
  .zoom-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    overflow: hidden;
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
  }
  .zoom-enter, .zoom-leave {
    opacity: 0;
    transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
  }
</style>
