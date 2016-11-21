<template>
	<div class="swiper-slide">
		<div class="runwaySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
          <div class="major">
            <div class="major-title"></div>
            <div class="future-major">
              <div class="major1"></div>
            </div>
            <div class="future-major">
              <div class="major2"></div>
            </div>
            <div class="future-major">
              <div class="major3"></div>
            </div>
            <div class="future-major">
              <div class="major4"></div>
            </div>
          </div>
          <div class="runway-container">
            <div class="car-container">
              <div class="car-position" :class="{ carAnimation: startAnimation, hide: animationFinished }">
                <img src="../../images/elements/future-car.png" class="space-car">
              </div>
            </div>
            <img class="cloud-top" src="../../images/future-cloud.png">
            <img src="../../images/elements/future-topbuilding.png" class="future-topbuilding">
            <img src="../../images/future-longbg.jpg" class="runway-bg">
            <img class="cloud-bottom" src="../../images/bg-cloud-1.png">
            <img src="../../images/elements/banner1.png" class="banner">
            <img src="../../images/elements/banner2.png" class="banner">
            <img src="../../images/elements/banner3.png" class="banner">
            <img src="../../images/elements/banner4.png" class="banner">
            <img src="../../images/elements/banner5.png" class="banner">
            <img src="../../images/elements/banner6.png" class="banner">
          </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Swiper from '../../../static/swiper.js';
  let runwaySwiper;
  let runwayCarTimeout;
  export default {
    data() {
      return {
        activeBtnId: null,
        hasReturned: false,
        moveStartY: 0,
        hasSlideNext: false,
        hasSlidePrev: false,
        virtualSize: null,
        startAnimation: false,
        animationFinished: false,
      };
    },
    ready() {
      this.isWxCircles = true;
      runwaySwiper = new Swiper('.runwaySwiper', {
        direction: 'vertical',
        nested: true,
        freeMode: true,
        autoHeight: true,
        slidesPerView: 'auto',
        loop: false,
        hashnav: true,
      });
    },
    events: {
      'setToBottom'() {
        this.virtualSize = runwaySwiper.virtualSize;
        runwaySwiper.setWrapperTranslate(-this.virtualSize + runwaySwiper.size);
      },
      'initAnimation'() {
        this.startAnimation = false;
        this.animationFinished = false;
        clearTimeout(runwayCarTimeout);
      },
      'startRunwayCarAnimation'() {
        this.startAnimation = true;
        runwayCarTimeout = setTimeout(() => {
          this.animationFinished = true;
          this.startAnimation = false;
          clearTimeout(runwayCarTimeout);
        }, 40000);
      },
    },
  };
</script>

<style scoped>
	.runwaySwiper {
		width: 100%;
		height: 100%;
	}

	.runwaySwiper .swiper-wrapper {
		width: 100%;
	}

	.runwaySwiper .swiper-slide {
		width: 100%;
	}
  .runway-bg {
    width: 100%;
    height: auto;
  }
  .runway-container {
    position: relative;
    overflow: hidden;
  }
  .cloud-bottom {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: -350px;
    left: 0;
    z-index: 4;
  }
  .cloud-top {
    position: absolute;
    top: -132px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 4;
  }
  .future-topbuilding {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 4;
  }
  .major {
    background-color: #FFF;
    padding-bottom: 100px;
  }
  .major-title {
    background: url(../../images/elements/future-major.png) no-repeat;
    background-size: contain;
    width: 221px;
    height: 42px;
    margin: 50px auto 26px auto;
    position: relative;
    z-index: 2;
  }
  .future-major {
    background-color: #4f7fff;
    padding: 16.5px 0;
    width: 330px;
    margin: 0 auto 16.5px auto;
    display: block;
    border-radius: 36px;
  }
  .major1 {
    background: url(../../images/elements/future-major1.png) no-repeat;
    background-size: contain;
    width: 173px;
    height: 38px;
    margin: 0 auto;
  }
  .major2 {
    background: url(../../images/elements/future-major2.png) no-repeat;
    background-size: contain;
    width: 171px;
    height: 38px;
    margin: 0 auto;
  }
  .major3 {
    background: url(../../images/elements/future-major3.png) no-repeat;
    background-size: contain;
    width: 172px;
    height: 38px;
    margin: 0 auto;
  }
  .major4 {
    background: url(../../images/elements/future-major4.png) no-repeat;
    background-size: contain;
    width: 102px;
    height: 38px;
    margin: 0 auto;
  }
  .banner {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 4;
  }
  .car-container {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
  }
  .space-car {
    width: 12%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 3;
  }
  @keyframes drive {
    0% { transform: translateY(-120px); }
    100% { transform: translateY(-5000px); }
  }
  @-webkit-keyframes drive {
    0% { -webkit-transform: translateY(-120px); }
    100% { -webkit-transform: translateY(-5000px); }
  }
  .car-position {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -120px;
  }
  .carAnimation {
    animation: drive 40.0s linear;
  }
  .hide {
    display: none;
  }
</style>
