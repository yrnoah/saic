<template>
	<div class="swiper-slide market">
		<div class="container">
			<div class="market-top-container">
				<img src="../images/point-1.png" alt="" class="hot-point point-1">
				<img src="../images/point-2.png" alt="" class="hot-point point-2">
				<img src="../images/point-3.png" alt="" class="hot-point point-3">
				<img src="../images/map.png" alt="market" class="bg-market">
			</div>
			<div class="market-middle-container">
				<div class="icon-man-page4 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
				<div class="container-globe">
					<div class="icon-earth-small ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s"></div>
				</div>
				<div class="navy-line">
					<div class="icon-angel-up-3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"></div>
				</div>
			</div>
			<div class="text-container">
				<div>
					<p class="ani" swiper-animate-effect="pluse" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">到2025年，南非和中东等地将成为最有价值的新兴市场</p>
					<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.8s">·咨询机构BMI Research在最新发布的报告中列出了 “未来的十大新兴市场”
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import '../assets/report-common-style.css';
	.market {
		background-color: #F2F6FF;
		position: relative;
	}

	.market-top-container {
		position: relative;
		bottom: -105px;
		width: 100;
		z-index: 1;
	}

	.market-middle-container {
		width: 100;
		position: relative;
		background-color: #90B8EA;
	}

	.navy-line {
		height: 40px;
		background-color: #206CC3;
		position: relative;
		z-index: 1;
		bottom: -1px;
	}

	.container-globe {
		position: absolute;
		bottom: 0;
		width: 100%;
		z-index: 4;
	}

	.icon-earth-small {
		margin: 0 auto;
		position: relative;
		right: -90px;
		bottom: -1px;
	}

	.icon-man-page4 {
		margin: 0 auto;
		position: relative;
		z-index: 3;
		bottom: -1px;
	}

	.icon-angel-up-3 {
		margin: 0 auto;
		position: relative;
		z-index: 2;
		top: -184px;
		left: -30px;
	}

	@keyframes opacityChange {
		0% { opacity: 0 }
		25% { opacity: 0.2 }
    50% { opacity: 0.5 }
    75% { opacity: 0.7 }
    100% { opacity: 1 }
	}

	.hot-point {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

  .point-1 {
    animation: opacityChange 1.0s infinite ease-in-out;
  }
  .point-2 {
    animation: opacityChange 0.5s infinite ease-in-out;
  }
  .point-3 {
    animation: opacityChange 2s infinite ease-in-out;
  }
</style>
