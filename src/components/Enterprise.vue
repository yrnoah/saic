<template>
	<div class="swiper-slide enterprise">
		<div class="container">
			<div class="enterprise-top-container">
				<div class="container-68">
					<div class="icon-68 ani" swiper-animate-effect="flipInX" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
					<div class="icon-68-pie ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s"></div>
				</div>
				<img src="../images/bg-enterprise.png" alt="enterprise" class="bg-enterprise ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
			</div>
			<div class="text-container">
				<div>
					<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">68%的大学生希望进入世界500强等大型企业</p>
					<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">·中安在线网站新闻《500强企业最受大学生欢迎》</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import '../assets/report-common-style.css';
	.enterprise {
		background-color: #D3E6EB;
		position: relative;
	}

	.enterprise-top-container {
		position: relative;
    text-align: center;
	}

	.bg-enterprise {
		display: inline-block;
		vertical-align: top;
		position: relative;
		bottom: -1px;
	}

	.icon-68,
	.icon-68-pie {
		display: inline-block;
	}

	.container-68 {
    display: inline-block;
		position: relative;
		margin: 0 auto;
	}

	.navy-line {
		height: 40px;
		background-color: #206CC3;
	}
</style>
