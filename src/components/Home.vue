<template>
	<div class="swiper-slide home">
    <img src="../images/elements/home-title.png" class="home-title ani" swiper-animate-effect="swing" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">
    <img src="../images/elements/home-slogan.png" class="home-slogan ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
    <div class="bottom">
      <img src="../images/elements/home-bgs.png" class="building-img" :class="{ buildingsfade: startAnimation }">
    </div>
    <div class="bottom buildings">
      <img src="../images/elements/buildings2.png" class="building-img" :class="{ buildingsrise: startAnimation }">
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
  .home-title {
    width: 75%;
    height: auto;
    margin: 43px auto 0 auto;
    position: relative;
    left: 20px;
    z-index: 3;
  }
  .home-slogan {
    width: 46%;
    height: auto;
    position: relative;
    top: -14%;
    left: 15px;
    z-index: 3;
  }
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
    animation: opacity-fade 3.0s linear;
    /*animation-delay: 1.0s;*/
  }
  .buildingsfade {
    animation: opacity-fade 2.0s linear;
  }
</style>
