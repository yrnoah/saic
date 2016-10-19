<template>
	<div class="swiper-slide yearAnimation">
		<div class="years">
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation, 'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2015</p>
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2016</p>
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2017</p>
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2018</p>
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2019</p>
			<p class="staticStyle" :class="{ 'before2022-1': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2020</p>
			<p class="staticStyle" :class="{ 'before2022-2': startAnimation,'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-2': finished }">2021</p>
			<p class="staticStyle" :class="{ 'animate-slideUpYear': startAnimation, 'slideYear': !finished, 'finishedStyle': finished, 'focus2022': finished }">2022</p>
			<p class="staticStyle" :class="{ 'after2022-2': startAnimation, 'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-2': finished }">2023</p>
			<p class="staticStyle" :class="{ 'after2022-1': startAnimation, 'slideYear': !finished, 'finishedStyle': finished, 'focusBefore2022-1': finished }">2024</p>
		</div>
		<div class="toNextPageBtn">
			<div class="icon-angel-down animate-bounce-down"></div>
		</div>
		<div class="icon-clock"></div>
	</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        isAnimationSwiper: true,
        startAnimation: false,
        finished: false,
      };
    },
    ready() {
      this.startAnimation = true;
      const animationTime = setTimeout(() => {
        this.$dispatch('slideNext');
        this.finished = true;
        clearTimeout(animationTime);
      }, 2200);
    },
  };
</script>

<style scoped>
	.yearAnimation {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.years {
		height: 80%;
		position: absolute;
		left: 4px;
		right: 0;
		top: 15px;
		text-align: center;
		overflow: hidden;
		z-index: 1;
	}

	@keyframes slideUpYear {
		0% {
			transform: translateY(0);
      color: #FFF;
		}
		100% {
			transform: translateY(-570px);
      color: #7897C4;
		}
	}

	.animate-slideUpYear {
		animation: slideUpYear 2s ease;
	}

	.slideYear {
		position: relative;
		top: 98px;
	}

	.finishedStyle {
		position: relative;
		top: -472px;
	}

	.staticStyle {
		color: #FFF;
		font-size: 68px;
		letter-spacing: 5px;
		opacity: 0.8;
	}

	@keyframes fadeOutYear {
		0% {
			opacity: 0.8;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
		100% {
			opacity: 0.4;
			transform: matrix(0.8, 0.00, 0.00, 0.8, 0, -570);
		}
	}

	@keyframes fadeOutYearS {
		0% {
			opacity: 0.8;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
		100% {
			opacity: 0.6;
			transform: matrix(0.6, 0.00, 0.00, 0.8, 0, -570);
		}
	}

	.before2022-1 {
		animation: fadeOutYearS 2s ease;
	}

	.before2022-2 {
		animation: fadeOutYear 2s ease;
	}

  .focusBefore2022-1 {
    opacity: 0.4;
    transform: matrix(0.6, 0.00, 0.00, 0.6, 0, 0);
  }

  .focusBefore2022-2 {
    opacity: 0.6;
    transform: matrix(0.8, 0.00, 0.00, 0.8, 0, 0);
  }

	@keyframes fadeInN {
		0% {
			opacity: 0.3;
			transform: matrix(0.5,0.00,0.00,0.5,0,0);
		}
		100% {
			opacity: 0.4;
			transform: matrix(0.6,0.00,0.00,0.6,0,-570);
		}
	}

	@keyframes fadeInLarge {
		0% {
			opacity: 0.5;
			transform: matrix(0.5,0.00,0.00,0.5,0,0);
		}
		100% {
			opacity: 0.6;
			transform: matrix(0.8,0.00,0.00,0.8,0,-570);
		}
	}

  .after2022-1 {
    animation: fadeInN 2s ease;
  }

  .after2022-2 {
    animation: fadeInLarge 2s ease;
  }

	.focus2022 {
		color: #7897C4;
		opacity: 1;
	}

	.icon-clock {
		margin: 200px auto 0 auto;
		position: relative;
	}

	.toNextPageBtn {
		position: absolute;
		bottom: 20px;
		width: 100%;
		text-align: center;
		padding: 10px 0 20px 0;
	}

	.icon-angel-down {
		display: inline-block;
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
