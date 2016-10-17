<template>
	<div class="swiper-slide slogan">
		<img src="../images/bg-slogan.png" alt="slogan">
		<div>
			<p class="ani" swiper-animate-effect="rubberBand" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">平台决定你的未来 眼界决定你的世界!</p>
		</div>
	</div>
</template>

<style scoped>
	.slogan {
		position: relative;
    background-color: #102455;
	}

	img {
		width: 100%;
		height: 100%;
		display: block;
		vertical-align: top;
	}

	.slogan div {
		position: absolute;
		bottom: 30px;
		width: 100%;
    text-align: center;
	}

	p {
    color: #FFF;
    font-size: 16px;
    font-weight: 200;
  }
</style>
