<template>
	<div class="swiper-slide cover">
		<img src="../images/text-report.png" alt="report" class="report ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
			swiper-animate-delay="0.3s">
		<img src="../images/folder.png" alt="folder" class="folder">
		<div class="angel">
			<div class="icon-angel-down-red animate-bounce-down"></div>
		</div>
	</div>
</template>

<style scoped>
	.cover {
		background-color: #FF6057;
		height: 100%;
	}

	.report {
		width: 272px;
		height: 178px;
		margin: 66px auto 30px auto;
		display: block;
		vertical-align: top;
	}

	.angel {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
	}

	.folder {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: block;
		vertical-align: top;
	}

	.icon-angel-down-red {
		margin: 0 auto;
	}

	@keyframes bounce-down {
		25% {
			transform: translateY(-5px);
		}
		50%,
		100% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(10px);
		}
	}

	.animate-bounce-down {
		animation: bounce-down 1s linear infinite;
	}
</style>
