<template>
	<div class="swiper-slide home">
    <img src="../images/elements/home-title.png" class="home-title">
    <img src="../images/elements/home-slogan.png" class="home-slogan">
    <div class="bottom">
      <img src="../images/elements/home-bgs.png">
    </div>
    <div class="bottom buildings">
      <img src="../images/elements/buildings.png">
    </div>
	</div>
</template>

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
    bottom: 0;
    z-index: 1;
  }
  .buildings {
    z-index: 2;
  }
  .bottom img {
    display: block;
    vertical-align: top;
    width: 100%;
    height: auto;
  }
</style>
