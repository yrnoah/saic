<template>
	<div class="swiper-slide home">
		<!--<div class="angel">
			<div class="animate-bounce-down"></div>
		</div>-->
    <div class="bottom">
      <img src="../images/home-bottom.png">
    </div>
	</div>
</template>

<style scoped>
	.home {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
	}

  .angel {
		position: absolute;
		bottom: 30px;
		left: 0;
		right: 0;
	}

	.animate-bounce-down {
		animation: bounce-down 1s linear infinite;
	}

  .bottom {
    position: absolute;
    bottom: 0;
  }
  .bottom img {
    display: block;
    vertical-align: top;
    width: 100%;
    height: auto;
  }
</style>
