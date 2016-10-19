<template>
	<div class="swiper-slide major">
		<div class="major-container">
			<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">上汽国际面向2017届<br> 本科及以上应届毕业生进行招聘，<br> 我们需要以下四类专业的你：</p>
			<list></list>
		</div>
	</div>
</template>

<script>
  import List from './MajorList';

  export default {
    components: {
      List,
    },
  };
</script>

<style scoped>
	.major {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.major-container {
		width: 90%;
		height: 100%;
		margin: 0 auto;
		text-align: left;
	}

	p {
		margin: 46px 0 30px 0;
		padding: 0;
		color: #FFF;
		font-size: 20px;
    line-height: 24px;
		text-align: left;
		display: inline-block;
		font-weight: normal;
	}
</style>
