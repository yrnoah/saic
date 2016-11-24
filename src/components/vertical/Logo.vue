<template>
	<div class="swiper-slide logo-page">
    <img src="../../../static/report-cloud.png" class="bg-cloud">
    <div class="angel-animation">
      <div class="up-angel"></div>
    </div>
    <div class="carContainer ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
      <img src="../../../static/car-big.png" class="car">
      <div class="wheels">
        <img src="../../../static/wheel-big.png" class="wheel left-wheel">
        <img src="../../../static/wheel-big.png" class="wheel right-wheel">
      </div>
    </div>
    <img src="../../../static/logo.png" class="logo ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <img src="../../../static/name.png" class="name ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
	</div>
</template>
<script>
  import CarAnimation from '../CarAnimation';
  export default {
    components: {
      CarAnimation,
    },
  };
</script>
<style scoped>
	.logo-page {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .logo {
    width: 66%;
    height: auto;
    margin: 0 auto 25px auto;
    position: relative;
    top: -10px;
    z-index: 1;
    /*margin: 86px auto 26px auto;*/
  }
  .name {
    width: 64%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .angel-animation {
    position: absolute;
    bottom: 25px;
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
    top: 272px;
    left: 0;
    animation: infinite-fade 2.0s linear infinite;
  }

  .bottom {
    position: absolute;
    bottom: -900px;
  }
  .carContainer {
    margin: 15% auto 0 auto;
    width: 85px;
    position: relative;
    z-index: 2;

  }
  .car {
    width: 100%;
    height: auto;
    animation: little-bounce2 1s linear infinite;
    -webkit-animation: little-bounce2 1s linear infinite;
  }
  .wheels {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  .wheel {
    display: inline-block;
    width: 16%;
    height: auto;
    position: relative;
    animation: rotate 1.0s infinite linear;
    -webkit-animation: rotate 1.0s infinite linear;
  }
  .left-wheel {
    float: left;
    left: 10px;
  }
  .right-wheel {
    float: right;
    right: 10px;
  }
</style>
