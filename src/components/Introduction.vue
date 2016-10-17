<template>
	<div class="swiper-slide introduction">
		<div class="icon-logo"></div>
		<p class="title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">上汽集团海外战略平台</p>
		<div class="detail">
			<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
				《财富》杂志世界500强企业第46位，<br> 分布全球9大新兴市场，
				<br> 独具潜力的海外工作机会，
				<br> 不仅给新人以更为广阔的国际视野和格局，
				<br> 更提供完善的多维职业发展体系，
				<br> 助力你成为具有全球竞争力的国际化人才。
			</p>
		</div>
	</div>
</template>

<style scoped>
	.introduction {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.icon-logo {
		margin: 15% auto 22px auto;
	}

	.title {
		font-size: 24px;
		color: #FFF;
	}

	.detail {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: #EAECEF;
	}

	.detail p {
		color: #4A4A4A;
		font-size: 14px;
		text-align: left;
		padding: 10px 30px;
	}
</style>
