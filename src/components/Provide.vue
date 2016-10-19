<template>
	<div class="swiper-slide provide">
		<img src="../images/bg-page9.png" class="provide-bg-img ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s"
			swiper-animate-delay="0.3s">
		<img src="../images/people.png" class="people ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
		<img src="../images/man-page9.png" class="man" :class="{ 'moveMan': startMove, 'showMan': showMan }">
		<div class="container">
			<h3 class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2s">如果你最终成为我们的一员</h3>
			<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s">我们能提供给你的，<br>不仅是<span>具有市场竞争力的薪酬</span>，更有…</p>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        startMove: false,
        showMan: false,
      };
    },
    events: {
      'startMoveMan'() {
        this.startMove = true;
        const showM = setTimeout(() => {
          this.showMan = true;
          clearTimeout(showM);
        }, 800);
      },
      'hideMan'() {
        this.showMan = false;
        this.startMove = false;
      },
    },
  };
</script>

<style scoped>
	.provide {
		position: relative;
		text-align: center;
		background-color: #091F5D;
	}

	.provide-bg-img,
	.people {
		width: 100%;
		height: 100%;
		display: inline-block;
		vertical-align: top;
		position: absolute;
		top: 0;
		left: 0;
	}

	.people {
		z-index: 1;
	}

	.man {
		width: 100%;
		height: 100%;
		display: inline-block;
		vertical-align: top;
		position: absolute;
		top: -50px;
		left: 0;
		z-index: 2;
		opacity: 0;
	}

	.showMan {
		opacity: 1;
	}

	.moveMan {
		animation: myMove 1s linear;
		animation-delay: 0.8s;
	}

	@keyframes myMove {
		0% {
			top: 0;
		}
		100% {
			top: -50px;
		}
	}

	.provide .container {
		position: absolute;
		bottom: 15%;
		width: 100%;
	}

	h3,
	p {
		color: #FFF;
		font-weight: normal;
		margin: 0;
	}

	h3 {
		font-size: 24px;
		margin-bottom: 10px;
	}

	p {
		font-size: 16px;
		line-height: 24px;
	}

	span {
		font-size: 19px;
	}
</style>
