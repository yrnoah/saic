<template>
	<div class="swiper-slide home">
    <!--<div class="home-top-item"></div>-->
     <div class="txt-item">
        <img src="../../static/home-text1.png" class="txt txt1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.9s">
        <img src="../../static/home-text2.png" class="txt txt2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
        <img src="../../static/home-text3.png" class="txt txt3 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.9s">
        <img src="../../static/home-text4.png" class="txt txt4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
      </div>
      <!--<div class="slogan-container">-->
      <!--</div>-->
    <div class="home-slogan ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.1s">
      <p class="title">上汽国际<span class="title-year">2017</span>年国际化人才</p>
      <div class="content">
        <p class="ani" swiper-animate-effect="swing" swiper-animate-duration="1s" swiper-animate-delay="1.6s"><span class="main">校园招聘</span></p><span>全面开启!</sppan>
      </div>
    </div>
    <div class="polygan-container">
      <div class="bottom-polygan1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
      <div class="bottom-polygan2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s"></div>
    </div>
    <img src="../../static/home-buildings.png" class="building-img buildings">
    <img src="../../static/home-cloud.png" class="building-img home-cloud">
    <img src="../../static/home-car.png" class="building-img ani home-car" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">
    <div class="angel-animation ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2s">
      <div class="hand-up">
        <img src="../../static/arrow.png" class="arrow">
        <img src="../../static/hand.png" class="hand">
      </div>
    </div>
	</div>
</template>

<style scoped>
	.home {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
    text-align: center;
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
  .txt-item {
    margin-top: 20px;
    position: relative;
    z-index: 4;
  }
  .slogan-container {
    display: inline-block;
    position: relative;
    top: -10px;
  }
  .polygan-container {
    display: inline-block;
    position: relative;
  }
  .bottom-polygan1 {
    height: 90px;
    width: 280px;
    background-color: #0a3bcf;
    transform: skewY(-5deg);
    position: relative;
    top: -58px;
    left: -24px;
    overflow: visible;
    z-index: 2;
    margin: 0 auto;
  }
  .bottom-polygan2 {
    position: relative;
    right: -35px;
    top: -124px;
    height: 90px;
    width: 160px;
    background-color: #042f7b;
    transform: skewY(-24deg);
    z-index: 1;
    margin: 0 auto;
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
    transform: skewY(-15deg);
    padding-top: 6px;
    position: relative;
    z-index: 4;
    margin: 0 auto;
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
    top: 13px;
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
  .content p {
    display: inline-block;
  }
  .content .main {
    background: linear-gradient(227deg, #FFF, #B2B2B2, #FFF, #B2B2B2);
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
  .txt {
    display: inline-block;
    vertical-align: top;
    opacity: 0.8;
    vertical-align: bottom;
  }
  .txt1 {
    width: 13%;
    position: relative;
    top: 2px;
  }
  .txt2 {
    width: 16%;
    margin-right: 10px;
    position: relative;
    top: -5px;
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
  .bike {
    z-index: 3;
  }
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    /*z-index: 1;*/
    overflow: hidden;
  }
  .bottom-bgs {
    width: 100%;
    height: auto;
  }
  .home-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
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
    z-index: 3;
  }
  .home-car {
    z-index: 4;
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
  .angel-animation {
    position: absolute;
    bottom: 0;
    width: 100%;
    /*animation: bounce-down 1s linear infinite;*/
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    z-index: 4;
  }
  .hand-up {
    margin: 5px auto;
    display: inline-block;
    height: 60px;
    position: relative;
  }
  .hand-up img {
    display: inline-block;
  }
  @keyframes rise-arrow {
    0% { transform: scaleY(0); opacity: 0; }
    100% { transform: scaleY(1); opacity: 1;}
  }
  @-webkit-keyframes rise-arrow {
    0% { -webkit-transform: scaleY(0); opacity: 0;}
    100% { -webkit-transform: scaleY(1); opacity: 1;}
  }
  .arrow {
    width: 18px;
    height: 56px;
    vertical-align: bottom;
    animation: rise-arrow 1.2s linear infinite;
    -webkit-animation: rise-arrow 1.2s linear infinite;
    /*position: absolute;
    bottom: 0;*/
    transform-origin: center bottom;
    -webkit-transform-origin: center bottom;
  }
  @keyframes rise {
    0% { transform: translateY(40px); }
    100% { transform: translateY(-10); }
  }
  @-webkit-keyframes rise {
    0% {-webkit-transform: translateY(40px);}
    100% {-webkit-transform: translateY(-10);}
  }
  .hand {
    width: 48px;
    height: 34px;
    animation: rise 1.2s linear infinite;
    -webkit-animation: rise 1.2s linear infinite;
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
