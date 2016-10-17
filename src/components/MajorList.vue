<template>
	<div>
		<div class="major-detail">
			<div class="icon-label-market"></div>
			<div>
				<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">市场营销类：</p>
				<p class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s">市场营销、品牌宣传、销售管理</p>
			</div>
		</div>
		<div class="major-detail">
			<div class="icon-label-product"></div>
			<div>
				<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s">产品研究类：</p>
				<p class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">产品规划、售后市场调研</p>
			</div>
		</div>
		<div class="major-detail">
			<div class="icon-label-dollar"></div>
			<div>
				<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.7s">金融财务类：</p>
				<p class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="2s">财务管理、金融分析、商务投资</p>
			</div>
		</div>
		<div class="major-detail">
			<div class="icon-label-law"></div>
			<div>
				<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">政法类：法务</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.major-detail {
		height: 72px;
		border-radius: 5px;
		background-color: #4AC3E2;
		margin-bottom: 25px;
		text-align: left;
    padding-left: 8px;
	}

	.major-detail:nth-child(2) {
		background-color: #4A90E2;
	}

	.major-detail:nth-child(3) {
		background-color: #D8BC57;
	}

	.major-detail:nth-child(4) {
		background-color: #A764DF;
	}

	.major-detail div {
		display: inline-block;
		vertical-align: middle;
		text-align: left;
		margin: 20px 0 0 6px;
	}

	.major-detail div p {
		color: #FFF;
		font-size: 12px;
		font-weight: 200;
		margin: 0;
	}
</style>
