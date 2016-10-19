<template>
	<div class="swiper-slide email">
		<div class="icon-logo-small ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
		<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">如果你就是我们要找的人，<br>那么，我们在这里等你：</p>
		<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">If you are the one we are looking for,<br>we are here for you:</p>
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
		margin: 20% auto 36px auto;
	}

  p {
    margin: 0;
    color: #FFF;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
  }

  p:nth-child(2) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p:nth-child(4) {
    padding: 20px 30px;
    background-color: #FFF;
    color: #094B98;
    display: inline-block;
    margin: 50px auto;
    border-radius: 10px;
    font-weight: normal;
    font-size: 18px;
  }
</style>
