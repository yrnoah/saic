<template>
	<div class="swiper-slide yearAnimation">
		<div class="years">
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'before2016-2': return2016,
        'focusBefore2016': returnFinished }">2015</p>
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'slideDownYear': return2016,
        'focus2022': returnFinished,
        'focus2016': returnFinished }">2016</p>
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'after2016-2': return2016,
        'focusBefore2016': returnFinished }">2017</p>
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'after2016-1': return2016,
        'focusBefore2016-2': returnFinished }">2018</p>
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'after2016-1': return2016 }">2019</p>
			<p class="staticStyle" :class="{
        'before2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'after2016-1': return2016 }">2020</p>
			<p class="staticStyle" :class="{
        'before2022-2': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-2': finished,
        'after2016-1': return2016 }">2021</p>
			<p class="staticStyle" :class="{
        'animate-slideUpYear': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focus2022': finished,
        'slideDown2022': return2016 }">2022</p>
			<p class="staticStyle" :class="{
        'after2022-2': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-2': finished,
        'after2016-1': return2016 }">2023</p>
			<p class="staticStyle" :class="{
        'after2022-1': startAnimation,
        'slideYear': !finished,
        'finishedStyle': finished,
        'focusBefore2022-1': finished,
        'after2016-1': return2016 }">2024</p>
		</div>
		<div class="toNextPageBtn">
			<div class="icon-angel-down animate-bounce-down"></div>
		</div>
		<div class="icon-clock"></div>
		<div class="clock-border">
			<img src="../images/clock-border.png">
		</div>
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
        return2016: false,
        returnFinished: false,
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
    events: {
      'return2016'() {
        this.return2016 = true;
        const animationReturn = setTimeout(() => {
          this.$dispatch('slideTo2');
          this.finished = false;
          this.returnFinished = true;
          this.startAnimation = false;
          clearTimeout(animationReturn);
        }, 1900);
      },
    },
  };
</script>

<style scoped>
	.yearAnimation {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
		font-family:
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

	.years p {
		height: 97px;
		line-height: 97px;
		vertical-align: middle;
	}

	.staticStyle {
		color: #FFF;
		font-size: 68px;
		letter-spacing: 5px;
		opacity: 0.8;
	}

	@keyframes slideUpYear {
		0% {
			transform: translateY(0);
			color: #FFF;
			margin-top: 0;
			margin-bottom: 0;
		}
		100% {
			transform: translateY(-574px);
			color: #7897C4;
			margin-top: 20px;
			margin-bottom: 20px;
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
		top: -486px;
	}

	@keyframes fadeOutYear {
		0% {
			opacity: 0.6;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
		100% {
			opacity: 0.3;
			transform: matrix(0.96, 0, 0, 0.96, 0, -574);
		}
	}

	@keyframes fadeOutYearS {
		0% {
			opacity: 0.6;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
		100% {
			opacity: 0.1;
			transform: matrix(0.7, 0, 0, 0.7, 0, -574);
		}
	}

	.before2022-1 {
		animation: fadeOutYearS 2s ease;
	}

	.before2022-2 {
		animation: fadeOutYear 2s ease;
	}

	.focusBefore2022-1 {
		opacity: 0.1;
		transform: matrix(0.7, 0, 0, 0.7, 0, 0);
	}

	.focusBefore2022-2 {
		opacity: 0.3;
		transform: matrix(0.96, 0, 0, 0.96, 0, 0);
	}

	@keyframes fadeInN {
		0% {
			opacity: 0;
			transform: matrix(0.2, 0, 0, 0.2, 0, 0);
		}
		100% {
			opacity: 0.1;
			transform: matrix(0.7, 0, 0, 0.7, 0, -574);
		}
	}

	@keyframes fadeInLarge {
		0% {
			opacity: 0.1;
			transform: matrix(0.7, 0, 0, 0.7, 0, 0);
		}
		100% {
			opacity: 0.3;
			transform: matrix(0.96, 0, 0, 0.96, 0, -574);
		}
	}

	.after2022-1 {
		animation: fadeInN 2s ease;
	}

	.after2022-2 {
		animation: fadeInLarge 2s ease;
	}

	@keyframes slideDownWhite {
		0% {
			transform: translateY(0);
			color: #FFF;
			opacity: 0.6;
		}
		100% {
			transform: translateY(590px);
			color: #7897C4;
			opacity: 1;
			letter-spacing: 2px;
		}
	}

	@keyframes slideDownBlue {
		0% {
			transform: matrix(0.96, 0, 0, 0.96, 0, 0);
			color: #7897C4;
		}
		100% {
			transform: matrix(0.7, 0, 0, 0.7, 0, 590);
			color: #FFF;
		}
	}

	.slideDownYear {
		animation: slideDownWhite 2s ease;
	}

	.slideDown2022 {
		animation: slideDownBlue 2s ease;
	}

	@keyframes returnFadeInN {
		0% {
			opacity: 0.5;
			transform: matrix(0.96, 0, 0, 0.96, 0, 0);
		}
		100% {
			opacity: 0.3;
			transform: matrix(0.96, 0, 0, 0.96, 0, 590);
		}
	}

	@keyframes returnFadeInL {
		0% {
			opacity: 0.3;
			transform: matrix(0.7, 0, 0, 0.7, 0, 0);
		}
		100% {
			opacity: 0.1;
			transform: matrix(0.7, 0, 0, 0.7, 0, 590);
		}
	}

	.after2016-2 {
		animation: returnFadeInN 2s ease;
	}

	.after2016-1 {
		animation: returnFadeInL 2s ease;
	}

	@keyframes returnFadeIn {
		0% {
			opacity: 0;
			transform: translateY(0);
			transform: matrix(0.5, 0, 0, 0.5, 0, 0);
		}
		100% {
			opacity: 0.3;
			transform: matrix(0.96, 0, 0, 0.96, 0, 590);
		}
	}

	.before2016-2 {
		animation: returnFadeIn 2s ease;
	}

	.focusBefore2016 {
		opacity: 0.3;
		transform: matrix(0.96, 0, 0, 0.96, 0, 0);
	}

	.focusBefore2016-2 {
		opacity: 0.1;
		transform: matrix(0.7, 0, 0, 0.7, 0, 0);
	}

	.focus2022 {
		color: #7897C4;
		opacity: 1;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.focus2016 {
		letter-spacing: 9px;
	}

	.icon-clock {
		margin: 218px auto 0 auto;
		position: relative;
	}

	.clock-border {
		position: absolute;
		top: 218px;
		width: 100%;
		z-index: 2;
	}

	.clock-border {
    margin: 0 auto;
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
