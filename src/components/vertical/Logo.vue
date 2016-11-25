<template>
	<div class="swiper-slide logo-page">
    <div class="angel-animation"><div class="up-angel"></div></div>
    <div class="carContainer" :class="{ carFadeIn: isActive }" v-show="carShowed">
      <img src="../../../static/car-big.png" class="car">
      <div class="wheels">
        <img src="../../../static/wheel-big.png" class="wheel left-wheel">
        <img src="../../../static/wheel-big.png" class="wheel right-wheel">
      </div>
    </div>
    <img src="../../../static/logo.png" class="logo" :class="{ logoFadeIn: isActive }" v-show="logoShowed">
    <img src="../../../static/name.png" class="name" :class="{ titleFadeIn: isActive }" v-show="nameShowed">
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
        isActive: false,
        logoShowed: false,
        nameShowed: false,
        carShowed: false,
      };
    },
    events: {
      'fadeInLogo'() {
        this.isActive = true;
        const logoAni = setTimeout(() => {
          this.logoShowed = true;
          clearTimeout(logoAni);
        }, 500);
        const nameAni = setTimeout(() => {
          this.nameShowed = true;
          clearTimeout(nameAni);
        }, 800);
        const carAni = setTimeout(() => {
          this.carShowed = true;
          clearTimeout(carAni);
        }, 500);
      },
      'initAnimation'() {
        this.isActive = false;
        this.logoShowed = false;
        this.nameShowed = false;
        this.carShowed = false;
      },
    },
  };
</script>
<style scoped>
	.logo-page {
		background-color: transparent;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  @keyframes logo-scale {
    0% { opacity: 0; transform: scale(.5, .5)}
    100% { opacity: 1; transform: scale(1, 1)}
  }
  @-webkit-keyframes logo-scale {
    0% { opacity: 0; -webkit-transform: scale(.5, .5)}
    100% { opacity: 1; -webkit-transform: scale(1, 1)}
  }
  .logoFadeIn {
    animation: logo-scale  0.5s ease;
    -webkit-animation: logo-scale  0.5s ease;
  }
  .titleFadeIn {
    animation: opacity-fade 0.5s ease;
    -webkit-animation: opacity-fade 0.5s ease;
  }
  .carFadeIn {
    animation: opacity-fade 1.5s ease;
    -webkit-animation: opacity-fade 1.5s ease;
  }
  .logoShowed {
    opacity: 1;
  }
  .nameShowed {
    opacity: 1;
  }
  .carShowed {
    opacity: 1;
  }
  .logo {
    width: 66%;
    height: auto;
    margin: 0 auto 25px auto;
    position: relative;
    top: -10px;
    z-index: 1;
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
    -webkit-animation: bounce-down 1s linear infinite;
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
    -webkit-animation: infinite-fade 2.0s linear infinite;
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
    /*opacity: 0;*/
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
