<template>
	<div class="swiper-slide slogan">
    <img src="../../../static/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../../static/earth.png" class="earth" :class="{ rotateEarth: rotateEarth }">
    </div>
    <div class="car-position">
      <car-animation></car-animation>
    </div>
    <div class="angel-animation">
      <div class="up-angel"></div>
    </div>
    <img src="../../../static/slogan-title.png" class="slogan-title ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <img src="../../../static/slogan-tip.png" class="slogan-tip ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
	</div>
</template>
<script>
  import CarAnimation from '../CarAnimation';
  export default {
    components: {
      CarAnimation,
    },
    data() {
      return {
        rotateEarth: false,
      };
    },
    events: {
      'startCarRotation5'() {
        if (!this.rotateEarth) this.rotateEarth = true;
      },
    },
  };
</script>
<style scoped>
	.slogan {
		background-color: #4EDEFD;
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
  .bg-cloud {
    position: absolute;
    width: 100%;
    height: auto;
    top: 156px;
    left: 0;
    animation: infinite-fade 2.0s linear infinite;
  }

  .bottom {
    position: absolute;
    bottom: -990px;
  }
  .earth {
    display: block;
    vertical-align: top;
    width: 1270.5px;
    height: 1270.5px;
    position: relative;
    left: -440px;
    margin: 0;
  }
  .rotateEarth {
    animation: rotate-left 40.0s infinite linear;
  }
  .car-position {
    position: absolute;
    bottom: 70px;
    width: 100%;
  }
</style>
