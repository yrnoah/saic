<template>
	<div class="swiper-slide provide">
		<div class="container">
			<h3 class="ani" swiper-animate-effect="shake" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">如果你最终成为我们的一员</h3>
			<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我们能提供给你的，<br>不仅是<span>具有市场竞争力的薪酬</span>，更有…</p>
		</div>
	</div>
</template>

<style scoped>
	.provide {
		position: relative;
		background: url('../images/bg-provide.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

  .provide .container {
    position: absolute;
    bottom: 60px;
    width: 100%;
  }

  h3, p {
    color: #FFF;
    font-weight: 200;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    line-height: 24px;
  }
  span {
    font-size: 16px;
  }
</style>
