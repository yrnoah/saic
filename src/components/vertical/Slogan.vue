<template>
	<div class="swiper-slide slogan">
    <img src="../../../static/slogan-title.png" class="slogan-title" v-if="fadeInSlogan" transition="zoom">
    <img src="../../../static/slogan-tip.png" class="slogan-tip" v-if="fadeInSlogan" transition="zoom">
    <div v-if="fadeInLogo" transition="zoom" class="logo-container">
      <img src="../../../static/logo.png" class="logo">
      <img src="../../../static/name.png" class="name">
    </div>
    <div class="angel-animation" v-if="fadeInLogo" transition="fadeIn">
      <img src="../../../static/hand-up.gif" class="hand-up">
    </div>
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
        }, 5000);
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
    bottom: 0;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    /*animation: bounce-down 1s linear infinite;*/
  }
  .hand-up {
    margin: 0 auto;
    width: 24%;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
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
  .fadeIn-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
  }
  .fadeIn-enter, .fadeIn-leave {
    opacity: 0;
  }
</style>
