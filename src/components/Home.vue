<template>
	<div class="swiper-slide home">
		<div class="home-title"></div>
    <div class="home-slogan"></div>
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
    background: url(../images/elements/home-title.png) no-repeat;
    background-size: contain;
    width: 317px;
    height: 211px;
    margin: 43px auto 0 auto;
    position: relative;
    left: 20px;
    z-index: 3;
  }
  .home-slogan {
    background: url(../images/elements/home-slogan.png) no-repeat;
    background-size: contain;
    width: 196px;
    height: 122px;
    position: relative;
    top: -112px;
    left: 6px;
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
