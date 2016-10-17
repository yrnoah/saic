<template>
	<div class="swiper-slide international">
		<div class="container">
			<div class="international-container-top">
				<div class="top-icon-container">
					<div class="icon-calculator ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s"></div>
					<div class="icon-angel-up-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s"></div>
					<div class="icon-angel-up-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.8s"></div>
				</div>
				<div class="man-container">
					<div class="icon-man-page2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
						<div class="icon-dollar dollar-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
						<div class="icon-dollar dollar-right ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"></div>
						<div class="icon-dollar-big ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="3.3s"></div>
					</div>
				</div>
				<div class="earth-container">
					<div class="icon-earth"></div>
				</div>
				<div class="navy-line"></div>
			</div>
			<div class="text-container">
				<div>
					<p class="ani" swiper-animate-effect="pulse" swiper-animate-duration="0.5s" swiper-animate-delay="3.8s">报告显示，同等学历和工作年限下，具有海外工作经验的人薪酬高于本土毕业生。其中，外语优势和国际性视野成为雇主比较看重的核心竞争力。</p>
					<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="4.3s">·中国人才网-《2015年海归就业力调查报告》</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import '../assets/report-common-style.css';
	.international {
		background-color: #D3E6EB;
		position: relative;
	}

	.navy-line {
		height: 40px;
		background-color: #206CC3;
		position: relative;
		z-index: 1;
	}

	.international-container-top {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.man-container {
		position: relative;
		width: 100%;
		z-index: 2;
	}

	.icon-man-page2 {
		margin: 0 auto;
		position: relative;
		left: -80px;
		bottom: -20px;
	}

	.dollar-left {
		position: relative;
		top: 80px;
		left: 10px;
	}

	.dollar-right {
		position: absolute;
		right: -150px;
		top: 120px;
	}

	.icon-dollar-big {
		position: absolute;
		right: -70px;
		top: 180px;
	}

	.top-icon-container {
		width: 100%;
		position: relative;
		text-align: center;
		overflow: visible;
	}

	.icon-angel-up-1,
	.icon-angel-up-2,
	.icon-calculator {
		display: inline-block;
		position: relative;
	}

	.icon-calculator {
		top: 60px;
		left: -10px;
	}

	.icon-angel-up-1 {
		right: -70px;
		top: 50px;
	}

	.icon-angel-up-2 {
		right: 5px;
		top: 120px;
	}

	.earth-container {
		position: absolute;
		bottom: -110px;
		width: 100%;
	}

	@keyframes rotate {
		25% {
			transform: rotate(90deg);
		}
		50% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(270deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.icon-earth {
		margin: 0 auto;
		animation: rotate 8.0s infinite linear;
	}

	.text-container div {
		padding: 20px 15px;
	}

	.text-container p:first-child {
		font-size: 16px;
		margin-bottom: 20px;
	}
</style>
