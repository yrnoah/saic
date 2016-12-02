<template>
	<div class="swiper-slide home">
    <!--<img src="../../static/home-slogan.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">-->
    <!--<img src="../../static/home-text1.png" class="home-top-item ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <img src="../../static/home-text2.png" class="home-top-item ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
    <img src="../../static/home-text3.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
    <img src="../../static/home-text4.png" class="home-top-item ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">-->
    <div class="home-top-item">
      <div class="txt-item">
        <img src="../../static/home-text1.png" class="txt txt1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
        <img src="../../static/home-text2.png" class="txt txt2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
        <img src="../../static/home-text3.png" class="txt txt3 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
        <img src="../../static/home-text4.png" class="txt txt4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
      </div>
      <div class="slogan-container">
        <div class="home-slogan ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">
          <p class="title">上汽国际<span class="title-year">2017</span>年国际化人才</p>
          <p class="content"><span>校园招聘</span>全面开启!</p>
        </div>
        <div class="polygan-container">
          <div class="bottom-polygan1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s"></div>
          <div class="bottom-polygan2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s"></div>
        </div>
      </div>
    </div>
    <img src="../../static/home-bottom.png" class="building-img" :class="{ buildingsfade: startAnimation }">
    <img src="../../static/home-buildings.png" class="building-img buildings" :class="{ buildingsrise: startAnimation }">
    <img src="../../static/home-cloud.png" class="building-img home-cloud">
    <!--<img src="../../static/home-logo.png" class="building-img home-logo">-->
    <img src="../../static/home-car.png" class="building-img">
    <img src="../../static/home-bike.png" class="building-img bike">
    <div class="windmill-container building-img">
      <img src="../../static/home-windmill-range.png" class="windmill-range">
      <img src="../../static/home-windmill-leaves.png" class="windmill-leave">
    </div>
    <div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2s">
      <div class="angel-animation"><div class="up-angel"></div></div>
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        startAnimation: false,
      };
    },
    ready() {
      this.startAnimation = true;
    },
  };
</script>

<style scoped>
	.home {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
	}
  .home-top-item {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    text-align: center;
    vertical-align: bottom;
    /*overflow: hidden;*/
  }
  .slogan-container {
    display: inline-block;
    position: relative;
  }
  .bottom-polygan1 {
    height: 90px;
    width: 280px;
    background-color: #0a3bcf;
    transform: skewY(-5deg);
    position: relative;
    top: -66px;
    overflow: visible;
    z-index: 2;
  }
  .bottom-polygan2 {
    position: absolute;
    right: 50px;
    top: 84px;
    height: 90px;
    width: 160px;
    background-color: #042f7b;
    transform: skewY(-24deg);
    z-index: 1;
  }
  .home-slogan {
    font-size: 26px;
    color: #FFF;
    font-weight: bold;
    background-color: #2d61e5;
    width: 330px;
    height: 120px;
    text-align: center;
    vertical-align: middle;
    transform: skewY(-12deg);
    padding-top: 6px;
    position: relative;
    z-index: 3;
  }
  .title-year {
    font-size: 30px;
  }
  .title {
    margin-top: 6px;
    transform: scale(0.9, 1.3);
  }
  .home-slogan .content {
    font-size: 27px;
    text-align: center;
    position: relative;
    top: 10px;
    transform: scale(1.2, 1.8);
  }
  @-webkit-keyframes gradient {
      0%{background-position:0% 100%}
      50%{background-position:100% 0%}
      100%{background-position:0% 100%}
  }
  @keyframes gradient {
      0%{background-position:0% 100%}
      50%{background-position:100% 0%}
      100%{background-position:0% 100%}
  }
  .content span {
    background: linear-gradient(227deg, #EEE, #333);
    background-size: 300% 400%;
    -webkit-animation: gradient 1s ease infinite;
    animation: gradient 1s ease infinite;
    text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0;
    margin: 0;
  }
  .txt-item {
    margin-top: 20px;
    position: relative;
  }
  .txt {
    display: inline-block;
    vertical-align: top;
    opacity: 0.8;
    vertical-align: bottom;
  }
  .txt1 {
    width: 13%;
  }
  .txt2 {
    width: 16%;
    margin-right: 10px;
    position: relative;
    top: -10px;
  }
  .txt3 {
    width: 12%;
    position: relative;
    top: -10px;
  }
  .txt4 {
    width: 17%;
    position: relative;
    top: -40px;
  }

  .home-title {
    width: 75%;
    height: auto;
    margin: 43px auto 0 auto;
    position: relative;
    left: 20px;
    z-index: 3;
  }
  .bike {
    z-index: 3;
  }
  /*.home-slogan {
    width: 46%;
    height: auto;
    position: relative;
    top: -14%;
    left: 15px;
    z-index: 3;
  }*/
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    /*z-index: 1;*/
    overflow: hidden;
  }
  .buildings {
    z-index: 1;
    bottom: 13%;
  }
  .building-img {
    display: block;
    vertical-align: top;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .buildings {
    z-index: 1;
  }
  .windmill-range {
    width: 100%;
    height: auto;
  }
  .windmill-leave {
    width: 22%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .animation-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 13%;
    overflow: hidden;
  }
  @keyframes rise {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes rise {
    0% {
      opacity: 0;
      -webkit-transform: translateY(100px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
  }
  .buildingsrise {
    animation: opacity-fade 0.5s linear;
    -webkit-animation: opacity-fade 0.5s linear;
    /*animation-delay: 1.0s;*/
  }
  .buildingsfade {
    animation: opacity-fade 0.5s linear;
    -webkit-animation: opacity-fade 0.5s linear;
  }
  .home-cloud {
    z-index: 1;
    left: 150px;
    bottom: 80px;
    animation: cloud-float 2.0s linear infinite;
    -webkit-animation: cloud-float 2.0s linear infinite;
  }
  @keyframes logo-fade {
    0%, 100% { opacity: 0.5 }
    50% { opacity: 1 }
  }
  @-webkit-keyframes logo-fade {
    0%, 100% { opacity: 0.5 }
    50% { opacity: 1 }
  }
  .home-logo {
    animation: logo-fade 3.0s linear infinite;
    -webkit-animation: logo-fade 3.0s linear infinite;
    z-index: 3;
  }
  .angel-animation {
    position: absolute;
    bottom: 20px;
    width: 100%;
    animation: bounce-down 1s linear infinite;
    z-index: 4;
  }

  .up-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #4EDEFD;
    border-width: 2px 2px 0 0;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin: 0 auto;
  }
</style>
