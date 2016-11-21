<template>
	<div class="swiper-slide home">
    <img src="../images/elements/home-title.png" class="home-title">
    <img src="../images/elements/home-slogan.png" class="home-slogan">
    <div class="bottom">
      <img src="../images/elements/home-bgs.png" class="building-img">
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
    // events: {
    //   'initAnimation'() {
    //     this.startAnimation = false;
    //   },
    //   'startAnimation'() {
    //     console.log('start animation');
    //     this.startAnimation = true;
    //   },
    // },
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
      /*transform: translateY(30px);*/
      /*height: 0;*/
      opacity: 0;
    }
    100% {
      /*transform: translateY(0);*/
      /*height: 100%;*/
      opacity: 1;
    }
  }
  .buildingsrise {
    animation: rise 2.0s linear;
  }
</style>
