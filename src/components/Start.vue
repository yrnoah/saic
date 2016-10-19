<template>
	<div class="swiper-slide start">
		<current-year></current-year>
		<p class="start-content ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.9s">千里之行&nbsp;始于足下</p>
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

	.start-content {
		color: #FFF;
		font-size: 24px;
		font-weight: normal;
		margin-top: 82px;
	}
</style>
