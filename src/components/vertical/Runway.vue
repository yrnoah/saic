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
            <div class="maskTipContainer" v-if="showMajorTip" transition="opacity">
              <div class="maskTip">
                <p class="majorTip">请选择你的就职方向</p>
              </div>
            </div>
            <img class="cloud-top" src="../../../static/future-cloud.png">
          </div>
          <div class="runway-container">
            <img src="../../../static/future-longbg.jpg" class="runway-bg">
            <img src="../../../static/future-cloud2.png" class="cloud-bottom cloud-bottom1" v-if="!fadeOutCloud" transition="fadeouteLeft">
            <img src="../../../static/future-cloud.png" class="cloud-bottom cloud-bottom2" v-if="!fadeOutCloud" transition="fadeouteRight">
          </div>
				</div>
			</div>
      <div class="car-container" v-if="showCar" transition="opacity">
        <div class="car-position" :style="carTransform">
          <img src="../../../static/future-car.png" class="space-car">
        </div>
      </div>
		</div>
    <div class="bannerSwiper">
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
            <div class="maskTipContainer" v-if="showMajorTip" transition="opacity">
              <div class="maskTip">
                <p class="majorTip">请选择你的就职方向</p>
              </div>
            </div>
            <img class="cloud-top" src="../../../static/future-cloud.png">
          </div>
          <div class="bannerContainer">
            <img src="../../../static/future-topbuilding.png" class="future-topbuilding">
            <img src="../../../static/banners.png" class="banners">
            <img src="../../../static/banner1.png" class="banner" v-if="showBanner1" :class="{ bannerFadeIn: showBanner1 }">
            <img src="../../../static/banner2.png" class="banner" v-if="showBanner2" :class="{ bannerFadeIn: showBanner2 }">
            <img src="../../../static/banner3.png" class="banner" v-if="showBanner3" :class="{ bannerFadeIn: showBanner3 }">
            <img src="../../../static/banner4.png" class="banner" v-if="showBanner4" :class="{ bannerFadeIn: showBanner4 }">
            <img src="../../../static/banner5.png" class="banner" v-if="showBanner5" :class="{ bannerFadeIn: showBanner5 }">
            <img src="../../../static/banner6.png" class="banner" v-if="showBanner6" :class="{ bannerFadeIn: showBanner6 }">
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import Swiper from '../../../static/swiper.js';
  let runwaySwiper;
  let bannerSwiper;
  let viewTransition;
  let carMoveTimeout;
  console.log(window);
  export default {
    data() {
      return {
        moveStartY: 0,
        virtualSize: null,
        startAnimation: false,
        animationFinished: false,
        transSize: 0,
        carTransleteY: 0,
        carMoveTime: 0,
        showCar: false,
        showBanner1: false,
        showBanner2: false,
        showBanner3: false,
        showBanner4: false,
        showBanner5: false,
        showBanner6: false,
        fadeOutCloud: false,
        showMajorTip: false,
        carTransform: {
          transform: 'translateY(0px)',
          // -webkit-transform: 'translateY(0px)',
        },
      };
    },
    ready() {
      this.isWxCircles = true;
      runwaySwiper = new Swiper('.runwaySwiper', {
        direction: 'vertical',
        nested: true,
        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumVelocityRatio: 0.5,
        autoHeight: true,
        slidesPerView: 'auto',
        onSetTranslate: (s, t) => {
          if (runwaySwiper) {
            const pageSize = runwaySwiper.virtualSize - runwaySwiper.size;
            // const currentPosition = s.getWrapperTranslate('y');
            // const bottom = pageSize * -1;
            const p2 = Math.floor(pageSize * 0.87) * -1;
            const p3 = Math.floor(pageSize * 0.74) * -1;
            const p4 = Math.floor(pageSize * 0.60) * -1;
            const p5 = Math.floor(pageSize * 0.46) * -1;
            const p6 = Math.floor(pageSize * 0.34) * -1;
            const disMissCar = pageSize * -0.10;

            // if (t > bottom && this.showBanner1) this.showBanner1 = false;
            // if (t <= bottom && !this.showBanner1) this.showBanner1 = true;
            // if ((t <= (p2 - 200) || t >= (p2 + 200)) && this.showBanner2) this.showBanner2 = false;
            if (t > (p2 - 200) && !this.showBanner2) this.showBanner2 = true;
            // if ((t <= (p3 - 200) || t >= (p3 + 200)) && this.showBanner3) this.showBanner3 = false;
            if (t > (p3 - 200) && !this.showBanner3) this.showBanner3 = true;
            // if ((t <= (p4 - 200) || t >= (p4 + 200)) && this.showBanner4) this.showBanner4 = false;
            if (t > (p4 - 200) && !this.showBanner4) this.showBanner4 = true;
            // if ((t <= (p5 - 200) || t >= (p5 + 200)) && this.showBanner5) this.showBanner5 = false;
            if (t > (p5 - 200) && !this.showBanner5) this.showBanner5 = true;
            // if ((t <= (p6 - 200) || t >= (p6 + 200)) && this.showBanner6) this.showBanner6 = false;
            if (t > (p6 - 200) && !this.showBanner6) this.showBanner6 = true;
            if (t > disMissCar && this.showCar) this.showCar = false;
            if (t < disMissCar && !this.showCar && this.carTransleteY !== 0) this.showCar = true;
            if (t === 0 && !this.showMajorTip) this.showMajorTipFunc();
          }
        },
      });
      bannerSwiper = new Swiper('.bannerSwiper', {
        direction: 'vertical',
        nested: true,
        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumVelocityRatio: 0.5,
        autoHeight: true,
        slidesPerView: 'auto',
      });
      bannerSwiper.params.control = runwaySwiper;
    },
    methods: {
      selectMajor(index) {
        this.$dispatch('slideToSpace', index);
      },
      startPageAnimation() {
        if (runwaySwiper.getWrapperTranslate('y') >= 0) {
          runwaySwiper.enableTouchControl();
          bannerSwiper.enableTouchControl();
          this.$dispatch('unlockRunwayToPrev');
          clearInterval(viewTransition);
          return;
        }
        viewTransition = setInterval(() => {
          const reachMiddle = this.carTransleteY <= (runwaySwiper.size * -0.5 - 20);
          if (reachMiddle) {
            runwaySwiper.enableTouchControl();
            bannerSwiper.enableTouchControl();
            clearInterval(viewTransition);
            return;
          }
          // car animation
          this.carTransleteY -= 3;
          this.$set('carTransform.transform', `translateY(${this.carTransleteY}px)`);
        }, 1);
      },
      stopAnimation() {
        runwaySwiper.enableTouchControl();
        bannerSwiper.enableTouchControl();
        this.$dispatch('unlockRunwayToPrev');
        this.carTransleteY = 0;
        this.carMoveTime = 0;
        clearInterval(viewTransition);
        clearTimeout(carMoveTimeout);
      },
      showMajorTipFunc() {
        this.showMajorTip = true;
        const tipTimeout = setTimeout(() => {
          this.showMajorTip = false;
          clearTimeout(tipTimeout);
        }, 1500);
      },
    },
    events: {
      'setToBottom'() {
        this.virtualSize = runwaySwiper.virtualSize;
        this.virtualSize2 = bannerSwiper.virtualSize;
        runwaySwiper.setWrapperTranslate(-this.virtualSize + runwaySwiper.size);
        bannerSwiper.setWrapperTranslate(-this.virtualSize2 + bannerSwiper.size);
      },
      'initAnimation'() {
        this.startAnimation = false;
        this.animationFinished = false;
        this.showCar = false;
        this.showBanner1 = false;
        this.showBanner2 = false;
        this.showBanner3 = false;
        this.showBanner4 = false;
        this.showBanner5 = false;
        this.showBanner6 = false;
        this.fadeOutCloud = false;
        this.showMajorTip = false;
        this.transSize = 0;
        this.carTransleteY = 0;
        this.carMoveTime = 0;
        this.$set('carTransform.transform', 'translateY(0px)');
        clearInterval(viewTransition);
        runwaySwiper.enableTouchControl();
        bannerSwiper.enableTouchControl();
      },
      'startRunwayCarAnimation'() {
        runwaySwiper.disableTouchControl();
        bannerSwiper.disableTouchControl();
        this.fadeOutCloud = true;
        const showCarTImeout = setTimeout(() => {
          this.showCar = true;
          clearTimeout(showCarTImeout);
        }, 500);
        const showBanner1Timeout = setTimeout(() => {
          this.showBanner1 = true;
          clearTimeout(showBanner1Timeout);
        }, 800);
        carMoveTimeout = setTimeout(() => {
          this.startPageAnimation();
        }, 1500);
      },
    },
  };
</script>

<style scoped>
	.runwaySwiper {
		width: 100%;
		height: 100%;
    position: relative;
	}
	.runwaySwiper .swiper-wrapper {
		width: 100%;
	}

	.runwaySwiper .swiper-slide {
		width: 100%;
    transform: translate3d(0, 0, 0) / translateZ(0);
	}
  .bannerSwiper {
    width: 100%;
		height: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
  }
  .bannerSwiper .swiper-wrapper {
		width: 100%;
	}

	.bannerSwiper .swiper-slide {
		width: 100%;
    transform: translate3d(0, 0, 0) / translateZ(0);
	}
  .banners {
    width: 100%;
    height: auto;
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
    width: 300%;
    height: auto;
    position: absolute;
    bottom: -150px;
    z-index: 4;
  }
  .cloud-bottom1 {
    left: -200px;
  }
  .cloud-bottom2 {
    right: -200px;
  }
  .cloud-top {
    position: absolute;
    bottom: -150px;
    left: -5%;
    width: 120%;
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
    padding-top: 50px;
    position: relative;
  }
  .major-title {
    background: url(../../../static/future-major.png) no-repeat;
    background-size: contain;
    width: 221px;
    height: 42px;
    margin: 0 auto 26px auto;
    position: relative;
    z-index: 2;
  }
  .future-major {
    /*background-color: transparent;*/
    padding: 16.5px 0;
    width: 330px;
    margin: 0 auto 16.5px auto;
    display: block;
    border-radius: 36px;
    position: relative;
    background-color: #4f7fff;
    animation: bg-fade 2.0s linear infinite;
    -webkit-animation: bg-fade 2.0s linear infinite;
  }
  @keyframes bg-fade {
    0%, 100% { opacity: 0.6 }
    50% { opacity: 1 }
  }
  @-webkit-keyframes bg-fade {
    0%, 100% { opacity: 0.6 }
    50% { opacity: 1 }
  }
  .animate-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4f7fff;
    animation: bg-fade 5.0s linear infinite;
    -webkit-animation: bg-fade 5.0s linear infinite;
    border-radius: 36px;
  }
  .major1 {
    background: url(../../../static/future-major1.png) no-repeat;
    background-size: contain;
    width: 173px;
    height: 38px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .major2 {
    background: url(../../../static/future-major2.png) no-repeat;
    background-size: contain;
    width: 171px;
    height: 38px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .major3 {
    background: url(../../../static/future-major3.png) no-repeat;
    background-size: contain;
    width: 172px;
    height: 38px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .major4 {
    background: url(../../../static/future-major4.png) no-repeat;
    background-size: contain;
    width: 102px;
    height: 38px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .banner {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 4;
  }
  .bannerContainer {
    position: relative;
    width: 100%;
  }
  .banner2 {
    width: 100%;
    height: 100%;
    position: relative;
    /*top: 20%;*/
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
    bottom: 0;
  }
  .hide {
    display: none;
  }
  .bannerFadeIn {
    animation: opacity-fade 0.8s linear;
    -webkit-animation: opacity-fade 0.8s linear;
  }
  .fadeouteLeft-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    overflow: hidden;
  }
  .fadeouteLeft-enter, .fadeouteLeft-leave {
    opacity: 0;
    left: -1500px;
  }
  .fadeouteRight-transition {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    overflow: hidden;
  }
  .fadeouteRight-enter, .fadeouteRight-leave {
    opacity: 0;
    right: -1500px;
  }
  .maskTipContainer {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    /*top: 150px;*/
  }
  .majorTip {
    font-size: 30px;
    margin: 0;
    padding: 0;
    position: relative;
    top: 40%;
  }
  .maskTip {
    width: 90%;
    height: 80%;
    position: relative;
    margin: 10% auto;
    border-radius: 10px;
    background-color: rgba(0,0,0,.7);
    text-align: center;
    line-height: 80px;
    vertical-align: middle;
    color: #FFF;
    z-index: 2;
  }
  .opacity-transition {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    /*overflow: hidden;*/
  }
  .opacity-enter, .opacity-leave {
    opacity: 0;
  }
</style>
