<template>
	<div class="swiper-slide decision">
		<current-year></current-year>
		<p class="decision-content ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">今天的一个决定<br>将帮助你成就五年后的自己</p>
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
	.decision {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}
  .decision-content {
    color: #FFF;
    font-size: 20px;
    font-weight: 200;
    margin-top: 50px;
  }
</style>
