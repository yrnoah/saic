<template>
	<div class="swiper-slide majorBtns">
		<h3 class="demoTit">就职方向</h3>
    <div class="majorBtn" @click="goWechat(1)"><p>市场</p></div>
    <div class="majorBtn" @click="goWechat(2)"><p>产品</p></div>
    <div class="majorBtn" @click="goWechat(3)"><p>金融</p></div>
    <div class="majorBtn" @click="goWechat(4)"><p>政法</p></div>
		<p class="demoText">向下滑</p><img src="../images/bg-navy.png" class="demoBg">
	</div>
</template>

<script>
  export default {
    methods: {
      goWechat(index) {
        this.$dispatch('goWechatMajor', index);
      },
    },
  };
</script>

<style scoped>
	.majorBtns {
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

	h3 {
		margin: 9% 0 34px 0;
		padding: 0;
		color: #FFF;
		font-size: 24px;
		text-align: left;
		display: inline-block;
		font-weight: normal;
	}

  .majorBtn {
    padding: 20px;
    margin: 10px auto;
    border: 1px solid red;
    width: 100px;
  }
</style>
