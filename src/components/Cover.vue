<template>
	<div class="swiper-slide cover">
		<div class="icon-text-report"></div>
    <img src="../images/folder.png" alt="folder" class="folder">
		<div class="folder-container">
      <div class="icon-angel-down-red animate-bounce-down"></div>
		</div>
	</div>
</template>

<style scoped>
	.cover {
		background-color: #FF6057;
		height: 100%;
	}

	.icon-text-report {
		margin: 132px auto 60px auto;
	}

	.folder-container {
		position: absolute;
		bottom: 60px;
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
			transform: translateY(-15px);
		}
		50%,
		100% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(20px);
		}
	}

	.animate-bounce-down {
		animation: bounce-down 1s linear infinite;
	}
</style>
