<template>
	<div class="swiper-slide email">
		<div class="icon-logo-small"></div>
		<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">如果你就是我们要找的人，<br>那么，我们在这里等你：</p>
		<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">If you are the one we are looking for,<br>we are here for you:</p>
		<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">recruitment@saicservice.com</p>
	</div>
</template>

<style scoped>
	.email {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.icon-logo-small {
		margin: 50px auto 30px auto;
	}

  p {
    margin: 0;
    color: #FFF;
    font-size: 12px;
    font-weight: 200;
    text-align: center;
  }

  p:nth-child(2) {
    letter-spacing: 4px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  p:nth-child(4) {
    padding: 15px;
    background-color: #FFF;
    color: #094B98;
    display: inline-block;
    margin: 30px auto;
    border-radius: 5px;
    font-weight: normal;
  }
</style>
