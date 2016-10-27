<template>
	<div class="swiper-slide yearAnimation">
		<div class="floater"></div>
		<div class="years">
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2015</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2016</p>
			<p class="staticStyle" :class="{
        focusNum: !forwardFinished,
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2017</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2018</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2019</p>
			<p class="staticStyle" :class="{
        afterUp1: forwardFinished,
        finished2020: forwardFinished,
        up2020: startForward }">2020</p>
			<p class="staticStyle" :class="{
        afterUp2: forwardFinished,
        up2021: startForward }">2021</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        focusNum: forwardFinished,
        up2022: startForward }">2022</p>
			<p class="staticStyle" :class="{
        afterUp2: forwardFinished,
        up2023: startForward }">2023</p>
			<p class="staticStyle" :class="{
        afterUp1: forwardFinished,
        up2024: startForward }">2024</p>
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
        startForward: false,
        forwardFinished: false,
      };
    },
    events: {
      'startYearAnimation'() {
        this.startForward = true;
        const animationForward = setTimeout(() => {
          this.forwardFinished = true;
          clearTimeout(animationForward);
        }, 1900);
      },
      'initYearAnimation'() {
        this.startForward = false;
        this.forwardFinished = false;
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
		top: -38px;
	}

	.finishedPosition {
		top: -524px;
	}

	.focusNum {
		color: #7897C4;
		padding: 20px 0;
		letter-spacing: 6px;
		left: 4px;
	}

	.afterUp1 {
		transform: scale(0.7, 0.7);
		opacity: 0.3;
		top: -544px;
	}

	.afterUp2 {
		transform: scale(0.9, 0.9);
		opacity: 0.5;
		top: -524px;
	}

	.finished2020 {
		top: -494px;
	}

	.floater {
		height: 50%;
		float: left;
	}

	@keyframes slideUp {
		0 {
			top: -70px;
			transform: scale(0.8, 0.8);
		}
		100% {
			top: -494px;
			opacity: 0.3;
			transform: scale(0.7, 0.7);
			color: #FFF;
		}
	}

	@keyframes slideUp22 {
		0 {
			top: -38px;
			color: #FFF;
			padding: 0;
			letter-spacing: 2px;
			left: 0;
		}
		100% {
			top: -524px;
			color: #7897C4;
			padding: 20px 0;
			letter-spacing: 6px;
			left: 4px;
		}
	}

	@keyframes slideUp24 {
		0 {
			transform: scale(0.1, 0.1);
			top: -10px;
			opacity: 0;
		}
		100% {
			top: -544px;
			opacity: 0.3;
			transform: scale(0.7, 0.7);
		}
	}

	@keyframes slideUp23 {
		0 {
			opacity: 0;
			top: -38px;
			transform: scale(0.3, 0.3);
		}
		100% {
			top: -524px;
			opacity: 0.5;
			transform: scale(0.9, 0.9);
		}
	}

	@keyframes slideUp20 {
		0 {
			opacity: 0;
			top: -70px;
			transform: scale(0.3, 0.3);
		}
		100% {
			top: -494px;
			opacity: 0.3;
			transform: scale(0.7, 0.7);
		}
	}

	@keyframes slideUp21 {
		0 {
			opacity: 0;
			top: -38px;
			transform: scale(0.3, 0.3);
		}
		100% {
			top: -524px;
			opacity: 0.5;
			transform: scale(0.9, 0.9);
		}
	}

	.AnimateUp {
		animation: slideUp 2s ease;
	}

	.up2022 {
		animation: slideUp22 2s ease;
	}

	.up2024 {
		animation: slideUp24 2s ease;
	}

	.up2023 {
		animation: slideUp23 2s ease;
	}

	.up2020 {
		animation: slideUp20 2s ease;
	}

	.up2021 {
		animation: slideUp21 2s ease;
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

<!--<p class="staticStyle" :class="{
        beforeBack1: forwardFinished,
        AnimateUp: startForward }">2015</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        beforeBack2: forwardFinished,
        AnimateUp: startForward }">2016</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        focusNum: forwardFinished,
        AnimateUp: startForward }">2017</p>
			<p class="staticStyle" :class="{
        beforeBack2: forwardFinished,
        finishedPosition: forwardFinished,
        AnimateUp: startForward }">2018</p>
			<p class="staticStyle" :class="{
        beforeBack1: forwardFinished,
        finished2019: forwardFinished,
        AnimateUp: startForward }">2019</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        Down2019: startForward }">2020</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        Down2016: startForward }">2021</p>
			<p class="staticStyle" :class="{
        focusNum: !forwardFinished,
        finishedPosition: forwardFinished,
        Down2017: startForward }">2022</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        Down2016: startForward }">2023</p>
			<p class="staticStyle" :class="{
        finishedPosition: forwardFinished,
        Down2015: startForward }">2024</p>-->
