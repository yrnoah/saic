<template>
	<div class="swiper-slide slogan">
    <img src="../../../static/slogan-title.png" class="slogan-title" v-if="fadeInSlogan" transition="zoom">
    <img src="../../../static/slogan-tip.png" class="slogan-tip" v-if="fadeInSlogan" transition="zoom">
    <div v-if="fadeInLogo" transition="zoom" class="logo-container">
      <img src="../../../static/logo.png" class="logo">
      <img src="../../../static/name.png" class="name">
    </div>
    <div class="angel-animation" v-if="fadeInLogo" transition="fadeIn">
      <div class="gradientMask" v-if="!fadeOutMask" transition="fadeIn"></div>
      <div class="hand-up">
        <img src="../../../static/arrow.png" class="arrow">
        <img src="../../../static/hand.png" class="hand">
      </div>
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        fadeInSlogan: false,
        fadeInLogo: false,
        fadeOutMask: false,
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
        const fadeOutAnimation = setTimeout(() => {
          this.fadeOutMask = true;
          clearTimeout(fadeOutAnimation);
        }, 7000);
      },
      'initAnimation'() {
        this.fadeInLogo = false;
        this.fadeInSlogan = false;
        this.fadeOutMask = false;
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
  .angel-animation {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 4;
  }
  .gradientMask {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .hand-up {
    margin: 0 auto;
    display: inline-block;
    height: 60px;
    position: relative;
    /*transform: rotate3d(1, 0, 0, 180deg);
    -webkit-transform: rotate3d(1, 0, 0, 180deg);*/
  }
  .hand-up img {
    display: inline-block;
  }
  @keyframes rise-arrow {
    0% { transform: scaleY(0); opacity: 0; }
    100% { transform: scaleY(1); opacity: 1;}
  }
  @-webkit-keyframes rise-arrow {
    0% { -webkit-transform: scaleY(0); opacity: 0;}
    100% { -webkit-transform: scaleY(1); opacity: 1;}
  }
  .arrow {
    width: 18px;
    height: 56px;
    vertical-align: bottom;
    animation: rise-arrow 1.2s linear infinite;
    -webkit-animation: rise-arrow 1.2s linear infinite;
    /*position: absolute;
    bottom: 0;*/
    transform-origin: center bottom;
    -webkit-transform-origin: center bottom;
  }
  @keyframes rise {
    0% { transform: translateY(40px); }
    100% { transform: translateY(-10); }
  }
  @-webkit-keyframes rise {
    0% {-webkit-transform: translateY(40px);}
    100% {-webkit-transform: translateY(-10);}
  }
  .hand {
    width: 48px;
    height: 34px;
    animation: rise 1.2s linear infinite;
    -webkit-animation: rise 1.2s linear infinite;
  }
</style>
