<template>
	<div class="swiper-slide home">
    <img src="../../static/home-slogan.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
    <img src="../../static/home-text1.png" class="home-top-item ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <img src="../../static/home-text2.png" class="home-top-item ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
    <img src="../../static/home-text3.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
    <img src="../../static/home-text4.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
    <img src="../../static/home-bottom.png" class="building-img" :class="{ buildingsfade: startAnimation }">
    <img src="../../static/home-buildings.png" class="building-img buildings" :class="{ buildingsrise: startAnimation }">
    <img src="../../static/home-cloud.png" class="building-img home-cloud">
    <!--<img src="../../static/home-logo.png" class="building-img home-logo">-->
    <img src="../../static/home-car.png" class="building-img">
    <img src="../../static/home-bike.png" class="building-img bike">
    <div class="windmill-container building-img">
      <img src="../../static/home-windmill-range.png" class="windmill-range">
      <img src="../../static/home-windmill-leaves.png" class="windmill-leave">
    </div>
    <div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2s">
      <div class="angel-animation"><div class="up-angel"></div></div>
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
    z-index: 3;
  }
  .home-title {
    width: 75%;
    height: auto;
    margin: 43px auto 0 auto;
    position: relative;
    left: 20px;
    z-index: 3;
  }
  .bike {
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
  .buildings {
    z-index: 2;
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
    z-index: 3;
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
    z-index: 1;
    left: 150px;
    bottom: 80px;
    animation: cloud-float 2.0s linear infinite;
    -webkit-animation: cloud-float 2.0s linear infinite;
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
    z-index: 3;
  }
  .angel-animation {
    position: absolute;
    bottom: 20px;
    width: 100%;
    animation: bounce-down 1s linear infinite;
    z-index: 4;
  }

  .up-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #4EDEFD;
    border-width: 2px 2px 0 0;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin: 0 auto;
  }
</style>
