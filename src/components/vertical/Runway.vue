<template>
	<div class="swiper-slide">
		<div class="runwaySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
          <div class="major">
            <div class="major-title"></div>
            <div class="future-major" @click="selectMajor(2)">
              <div class="major1"></div>
            </div>
            <div class="future-major" @click="selectMajor(4)">
              <div class="major2"></div>
            </div>
            <div class="future-major" @click="selectMajor(1)">
              <div class="major3"></div>
            </div>
            <div class="future-major" @click="selectMajor(3)">
              <div class="major4"></div>
            </div>
          </div>
          <div class="runway-container">
            <div class="car-container">
              <div class="car-position" :style="{ transform: `translateY(${carTransleteY}px)` }">
                <img src="../../../static/future-car.png" class="space-car">
              </div>
            </div>
            <img class="cloud-top" src="../../../static/future-cloud.png">
            <img src="../../../static/future-topbuilding.png" class="future-topbuilding">
            <img src="../../../static/future-longbg.jpg" class="runway-bg">
            <img class="cloud-bottom" src="../../../static/bg-cloud-1.png">
            <img src="../../../static/banner1.png" class="banner">
            <img src="../../../static/banner2.png" class="banner">
            <img src="../../../static/banner3.png" class="banner">
            <img src="../../../static/banner4.png" class="banner">
            <img src="../../../static/banner5.png" class="banner">
            <img src="../../../static/banner6.png" class="banner">
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
  let viewTransition;
  let carMoveInterval;
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
        transSize: 0,
        carTransleteY: 0,
        carMoveTime: 0,
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
        onTouchStart: () => {
          this.stopAnimation();
        },
        // onTouchEnd: () => {
        //   this.startPageAnimation();
        // },
      });
    },
    methods: {
      selectMajor(index) {
        this.$dispatch('slideToSpace', index);
      },
      startPageAnimation() {
        if (runwaySwiper.getWrapperTranslate('y') >= 0) {
          runwaySwiper.enableTouchControl();
          clearInterval(viewTransition);
          return;
        }
        // runwaySwiper.disableTouchControl();
        viewTransition = setInterval(() => {
          if (runwaySwiper.getWrapperTranslate('y') >= 0) {
            clearInterval(viewTransition);
            return;
          }
          const trans = (runwaySwiper.getWrapperTranslate('y') + 1);
          runwaySwiper.setWrapperTranslate(trans);
          this.transSize += 1;
        }, 1);
      },
      moveCar() {
        if (this.carTransleteY === (runwaySwiper.virtualSize - runwaySwiper.size)) {
          this.stopCarMove();
          return;
        }
        carMoveInterval = setInterval(() => {
          if (this.carTransleteY === (-runwaySwiper.virtualSize)) {
            this.stopCarMove();
            return;
          }
          if (this.carMoveTime < 400) {
            this.carTransleteY -= 2;
            this.carMoveTime += 1;
          } else {
            this.carTransleteY -= 1;
            this.carMoveTime += 1;
          }
        }, 1);
      },
      stopAnimation() {
        // runwaySwiper.enableTouchControl();
        clearInterval(viewTransition);
        clearTimeout(runwayCarTimeout);
      },
      stopCarMove() {
        this.carTransleteY = 0;
        this.carMoveTime = 0;
        clearInterval(carMoveInterval);
      },
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
        clearInterval(viewTransition);
        this.stopCarMove();
        // runwaySwiper.enableTouchControl();
      },
      'startRunwayCarAnimation'() {
        this.moveCar();
        this.startPageAnimation();
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
    background: url(../../../static/future-major.png) no-repeat;
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
    background: url(../../../static/future-major1.png) no-repeat;
    background-size: contain;
    width: 173px;
    height: 38px;
    margin: 0 auto;
  }
  .major2 {
    background: url(../../../static/future-major2.png) no-repeat;
    background-size: contain;
    width: 171px;
    height: 38px;
    margin: 0 auto;
  }
  .major3 {
    background: url(../../../static/future-major3.png) no-repeat;
    background-size: contain;
    width: 172px;
    height: 38px;
    margin: 0 auto;
  }
  .major4 {
    background: url(../../../static/future-major4.png) no-repeat;
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
    animation: drive 20.0s linear;
  }
  .hide {
    display: none;
  }
</style>
