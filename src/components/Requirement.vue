<template>
	<div class="swiper-slide requirement">
		<div class="requirement-container">
			<p>此外，我们还有以下几点要求：</p>
			<div class="detail">
				<ol>
					<li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">有理想有激情，认同我们的企业文化，愿意奔赴海外工作
					</li>
					<li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">专业基础扎实，逻辑、沟通和执行能力强</li>
					<li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">良好的英语听说读写能力</li>
					<li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">熟练操作各种办公软件</li>
				</ol>
			</div>
		</div>
		<div class="logo-container">
			<div class="icon-logo-small"></div>
		</div>
	</div>
</template>

<style scoped>
	.requirement {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.requirement-container {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		text-align: left;
	}

	p {
		margin: 60px 0 15px 0;
		padding: 0;
		color: #FFF;
		font-size: 14px;
		line-height: 24px;
		text-align: left;
		display: inline-block;
		font-weight: 200;
	}

	.detail {
		width: 100%;
		padding-top: 30px;
		padding-bottom: 25px;
		text-align: center;
		background-color: #EAECEF;
		border-radius: 5px;
	}

	ol {
		list-style-type: upper-alpha;
		margin: 0;
		width: 80%;
	}

	.detail li {
		text-align: left;
		color: #13387E;
		margin-bottom: 5px;
	}

	.logo-container {
		width: 100%;
		position: absolute;
		bottom: 50px;
	}

	.icon-logo-small {
		margin: 20px auto;
	}
</style>
