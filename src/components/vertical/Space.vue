<template>
	<div class="swiper-slide space">
    <img src="../../../static/future-topbg.png" class="future-topbg">
    <img src="../../../static/future-polygan2.png" class="spcae-item spcae-item2">
    <img src="../../../static/future-polygan3.png" class="spcae-item spcae-item3">
    <img src="../../../static/future-polygan4.png" class="spcae-item spcae-item4">
    <img src="../../../static/future-polygan5.png" class="spcae-item spcae-item5">
    <img src="../../../static/future-polygan7.png" class="spcae-item spcae-item7">
    <div class="years-container">
      <img src="../../../static/years-2021.png" class="years year-2021 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
      <img src="../../../static/years-2020.png" class="years year-2020 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
      <img src="../../../static/years-2019.png" class="years year-2019 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    </div>
    <div class="car-container">
      <div class="car-position" :class="{ carAnimation: startAnimation, hide: animationFinished }">
        <img src="../../../static/future-car.png" class="space-car">
        <div class="wing-container" :class="{ wingfade: startAnimation }">
          <img src="../../../static/future-carwing.png" class="space-carwing">
          <img src="../../../static/future-cartail.png" class="space-cartail">
        </div>
      </div>
    </div>
	</div>
</template>
<script>
  // import CarAnimation from '../CarAnimation';
  let hideCarTimeout;
  export default {
    // components: {
    //   CarAnimation,
    // },
    data() {
      return {
        startAnimation: false,
        animationFinished: false,
      };
    },
    events: {
      'initAnimation'() {
        this.startAnimation = false;
        this.animationFinished = false;
        clearTimeout(hideCarTimeout);
      },
      'startCarAnimation'(index) {
        this.startAnimation = true;
        hideCarTimeout = setTimeout(() => {
          this.animationFinished = true;
          this.startAnimation = false;
          const majorIndex = index || 1;
          this.$dispatch('goWechatMajor', majorIndex);
          clearTimeout(hideCarTimeout);
        }, 3000);
      },
    },
  };
</script>
<style scoped>
	.space {
		background-color: #021844;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .future-topbg {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    vertical-align: top;
    margin: 0;
    padding: 0;
  }
  .car-container {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 10%;
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
  .space-carwing {
    width: 22%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .space-cartail {
    position: relative;
    z-index: 2;
    width: 6%;
    height: auto;
    margin: 0 auto;
    animation: opacity-fade 1s linear infinite;
  }
  @keyframes fly-out {
    0% { transform: translateY(-40px); }
    100% { transform: translateY(-1500px); }
  }
  @-webkit-keyframes fly-out {
    0% { -webkit-transform: translateY(-40px); }
    100% { -webkit-transform: translateY(-1500px); }
  }
  .car-position {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -40px;
  }
  .carAnimation {
    animation: fly-out 4.0s ease-in;
  }
  .hide {
    display: none;
  }
  .wing-container {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -38px;
  }
  .wingfade {
    animation: opacity-fade 1.0s linear;
  }
  .spcae-item {
    position: absolute;
    z-index: 1;
  }
  .spcae-item2 {
    width: 25%;
    height: auto;
    right: 11%;
    top: 29%;
    animation: rotate-left 10.0s infinite linear;
  }
  .spcae-item3 {
    width: 18%;
    height: auto;
    left: 19%;
    top: 24%;
    animation: rotate 14.0s infinite linear;
  }
  .spcae-item4 {
    width: 16%;
    height: auto;
    right: 12%;
    top: 57%;
    animation: rotate 8.0s infinite linear;
  }
  .spcae-item5 {
    width: 14%;
    height: auto;
    left: 9%;
    top: 62%;
    animation: rotate-left 18.0s infinite linear;
  }
  .spcae-item7 {
    width: 14%;
    height: auto;
    left: 20%;
    top: 88%;
    animation: rotate-left 5.0s infinite linear;
  }
  .years-container {
    position: absolute;
    width: 100%;
    left: 0;
    top: 56%;
    z-index: 1;
  }
  .years {
    margin: 0 auto 20px auto;
  }
  .year-2019 {
    width: 21%;
    height: auto;
  }
  .year-2020 {
    width: 23%;
    height: auto;
  }
  .year-2021 {
    width: 23%;
    height: auto;
  }
</style>
