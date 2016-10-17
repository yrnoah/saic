<template>
	<div class="swiper-slide choice">
		<div>
			<p class="ani" swiper-animate-effect="swing" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
				假如我选择了上汽国际<br> 未来五年后的我会是<br> 什么样子？
			</p>
		</div>
	</div>
</template>

<style scoped>
	.choice {
		position: relative;
		background: url('../images/bg-home.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.choice div {
		position: absolute;
		bottom: 80px;
		width: 100%;
		text-align: center;
	}

	.choice p {
		color: #FFF;
		font-size: 24px;
		font-weight: 200;
	}
</style>
