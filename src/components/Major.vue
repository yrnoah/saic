<template>
	<div class="swiper-slide major">
		<div class="major-container">
			<h3>我们提供以下<br> 四大类职业发展方向：</h3>
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
		width: 80%;
		height: 100%;
		margin: 0 auto;
		text-align: left;
	}

	h3 {
		margin: 40px 0 30px 0;
		padding: 0;
		color: #FFF;
		font-size: 20px;
		text-align: left;
		display: inline-block;
		font-weight: 200;
	}
</style>
