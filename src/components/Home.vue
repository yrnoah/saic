<template>
	<div class="swiper-slide home">
    <!--<img src="../../static/home-title.png" class="home-title ani" swiper-animate-effect="swing" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">
    <img src="../../static/home-slogan.png" class="home-slogan ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
    <div class="bottom">
      <img src="../../static/home-bgs.png" class="building-img" :class="{ buildingsfade: startAnimation }">
    </div>
    <div class="bottom buildings">
      <img src="../../static/buildings2.png" class="building-img" :class="{ buildingsrise: startAnimation }">
    </div>-->
    <img src="../../static/home-title.png" class="home-title ani" swiper-animate-effect="swing" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">
    <img src="../../static/home-slogan.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
    <img src="../../static/home-bottom.png" class="building-img" :class="{ buildingsfade: startAnimation }">
    <img src="../../static/home-buildings.png" class="building-img" :class="{ buildingsrise: startAnimation }">
    <img src="../../static/home-cloud.png" class="building-img home-cloud">
    <img src="../../static/home-logo.png" class="building-img home-logo">
    <img src="../../static/home-car.png" class="building-img">
    <img src="../../static/home-bike.png" class="building-img">
    <div class="windmill-container building-img">
      <img src="../../static/home-windmill-range.png" class="windmill-range">
      <img src="../../static/home-windmill-leaves.png" class="windmill-leave">
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        startAnimation: false,
      };
    },
    ready() {
      this.startAnimation = true;
    },
  };
</script>

<style scoped>
	.home {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
	}
  .home-top-item {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
  .home-title {
    width: 75%;
    height: auto;
    margin: 43px auto 0 auto;
    position: relative;
    left: 20px;
    z-index: 3;
  }
  /*.home-slogan {
    width: 46%;
    height: auto;
    position: relative;
    top: -14%;
    left: 15px;
    z-index: 3;
  }*/
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
  }
  .buildings {
    z-index: 2;
    bottom: 13%;
  }
  .building-img {
    display: block;
    vertical-align: top;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .windmill-range {
    width: 100%;
    height: auto;
  }
  .windmill-leave {
    width: 22%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .animation-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 13%;
    overflow: hidden;
  }
  @keyframes rise {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes rise {
    0% {
      opacity: 0;
      -webkit-transform: translateY(100px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
  }
  .buildingsrise {
    animation: opacity-fade 0.5s linear;
    -webkit-animation: opacity-fade 0.5s linear;
    /*animation-delay: 1.0s;*/
  }
  .buildingsfade {
    animation: opacity-fade 0.5s linear;
    -webkit-animation: opacity-fade 0.5s linear;
  }
  .home-cloud {
    animation: infinite-fade 2.0s linear infinite;
    -webkit-animation: infinite-fade 2.0s linear infinite;
  }
  @keyframes logo-fade {
    0%, 100% { opacity: 0.5 }
    50% { opacity: 1 }
  }
  @-webkit-keyframes logo-fade {
    0%, 100% { opacity: 0.5 }
    50% { opacity: 1 }
  }
  .home-logo {
    animation: logo-fade 3.0s linear infinite;
    -webkit-animation: logo-fade 3.0s linear infinite;
  }
</style>
