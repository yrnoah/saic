<template>
	<div class="swiper-slide slogan">
		<img src="../images/bg-page6.png" alt="slogan" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <div class="icon-text-choose ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
		<div class="bottom-slogan">
      <div class="icon-man-page6 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="1.3s"></div>
			<p class="ani" swiper-animate-effect="rubberBand" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">平台决定你的未来 眼界决定你的世界!</p>
		</div>
	</div>
</template>

<style scoped>
	.slogan {
		position: relative;
    background-color: #102455;
	}

	img {
    position: absolute;
    left: 0;
    top: 0;
		width: 100%;
		height: 100%;
		display: block;
		vertical-align: top;
	}

	.bottom-slogan {
		position: absolute;
		bottom: 60px;
		width: 100%;
    text-align: center;
    overflow: visible;
	}

  .icon-man-page6 {
    margin: 0 auto;
    position: relative;
    bottom: -60px;
  }

	p {
    color: #FFF;
    font-size: 16px;
    font-weight: normal;
    position: relative;
    z-index: 1;
  }

  .icon-text-choose {
    z-index: 1;
    position: relative;
    margin: 60px auto;
  }
</style>
