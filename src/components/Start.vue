<template>
	<div class="swiper-slide start">
		<current-year></current-year>
		<p class="start-content ani" swiper-animate-effect="fadeOut" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s">千里之行&nbsp;始于足下</p>
    <p class="decision-content ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.1s">今天的一个决定<br>将帮助你成就五年后的自己</p>
	</div>
</template>

<script>
  import CurrentYear from '../components/CurrentYear';
  export default {
    components: {
      CurrentYear,
    },
  };
</script>

<style scoped>
	.start {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.start-content,
  .decision-content {
		color: #FFF;
		font-size: 24px;
		font-weight: normal;
		margin-top: 82px;
	}

  .decision-content {
    margin-top: -62px;
  }
</style>
