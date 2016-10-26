<template>
	<div class="swiper-slide yearAnimation">
		<div class="floater"></div>
		<div class="years">
			<p class="staticStyle" :class="{
        beforeBack1: backFinished,
        Down2015: startBack  }">2015</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        beforeBack2: backFinished,
        Down2016: startBack }">2016</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        focusNum: backFinished,
        Down2017: startBack }">2017</p>
			<p class="staticStyle" :class="{
        beforeBack2: backFinished,
        finishedPosition: backFinished,
        Down2016: startBack }">2018</p>
			<p class="staticStyle" :class="{
        beforeBack1: backFinished,
        finished2019: backFinished,
        Down2019: startBack }">2019</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        AnimateDown: startBack }">2020</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        AnimateDown: startBack }">2021</p>
			<p class="staticStyle" :class="{
        focusNum: !backFinished,
        finishedPosition: backFinished,
        AnimateDown: startBack }">2022</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        AnimateDown: startBack }">2023</p>
			<p class="staticStyle" :class="{
        finishedPosition: backFinished,
        AnimateDown: startBack }">2024</p>
		</div>
		<div class="icon-container">
			<div class="floater"></div>
			<div class="icon-clock"></div>
		</div>
		<div class="icon-container border-container">
			<div class="floater"></div>
			<img src="../images/clock-border.png">
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        startBack: false,
        backFinished: false,
      };
    },
    events: {
      'startYearAnimation2'() {
        this.startBack = true;
        const animationReturn = setTimeout(() => {
          this.backFinished = true;
          clearTimeout(animationReturn);
        }, 1900);
      },
      'initYearAnimation2'() {
        this.startBack = false;
        this.backFinished = false;
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
		overflow: hidden;
	}

	.years {
		height: 468px;
		position: relative;
		top: -234px;
		text-align: center;
		overflow: hidden;
		z-index: 1;
		clear: both;
	}

	.staticStyle {
		color: #FFF;
		opacity: 0.8;
		font-size: 68px;
		letter-spacing: 5px;
		height: 97px;
		line-height: 97px;
		vertical-align: middle;
		position: relative;
		top: -544px;
	}

	.finishedPosition {
		top: -38px;
	}

	.focusNum {
		color: #7897C4;
		padding: 20px 0;
		letter-spacing: 11px;
		left: 4px;
	}

	.beforeBack1 {
		transform: scale(0.7, 0.7);
		opacity: 0.3;
		top: -10px;
	}

	.beforeBack2 {
		transform: scale(0.9, 0.9);
		opacity: 0.5;
	}

	.finished2019 {
		top: -70px;
	}

	.floater {
		height: 50%;
		float: left;
	}

	@keyframes slideDown {
		0 {
			top: -544px;
			opacity: 0.8;
			transform: scale(0.8, 0.8);
		}
		100% {
			top: -70px;
			opacity: 0.3;
			transform: scale(0.7, 0.7);
		}
	}

	@keyframes slideDown17 {
		0 {
			top: -544px;
			color: #FFF;
			padding: 0;
			letter-spacing: 5px;
			left: 0;
		}
		100% {
			top: -38px;
			color: #7897C4;
			padding: 20px 0;
			letter-spacing: 11px;
			left: 4px;
		}
	}

	@keyframes slideDown15 {
		0 {
			top: -544px;
			opacity: 0;
			transform: scale(0.1, 0.1);
		}
		100% {
			transform: scale(0.7, 0.7);
			opacity: 0.3;
			top: -10px;
		}
	}

	@keyframes slideDown16 {
		0 {
			top: -544px;
			opacity: 0;
			transform: scale(0.3, 0.3);
		}
		100% {
			transform: scale(0.9, 0.9);
			opacity: 0.5;
			top: -38px;
		}
	}

	@keyframes slideDown19 {
		0 {
			top: -544px;
			opacity: 0.8;
			transform: scale(0.8, 0.8);
		}
		100% {
			transform: scale(0.7, 0.7);
			opacity: 0.3;
			top: -70px;
		}
	}

	.AnimateDown {
		animation: slideDown 2s ease;
	}

	.Down2017 {
		animation: slideDown17 2s ease;
	}

	.Down2015 {
		animation: slideDown15 2s ease;
	}

	.Down2016 {
		animation: slideDown16 2s ease;
	}

	.Down2019 {
		animation: slideDown19 2s ease;
	}

	.icon-container {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	.icon-clock {
		clear: both;
		margin: 0 auto;
		position: relative;
		top: -66px;
	}

	.border-container {
		z-index: 2;
	}

	.border-container img {
		clear: both;
		display: block;
		margin: 0 auto;
		position: relative;
		top: -66px;
	}
</style>
