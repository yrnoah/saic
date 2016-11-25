<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year"><div class="report2-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div></div>
      <div class="cover-title ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.8s"><div class="report2-content"></div></div>
      <div class="polygon ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s"></div>
      <div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
        <div class="angel-animation"><div class="right-angel"></div></div>
      </div>
    </div>
	</div>
</template>

<style scoped>
	.report-cover {
		background-color: transparent;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .report-content {
    width: 226px;
    margin: 50px auto 0 auto;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    overflow: visible;
    z-index: 2;
    background-color: #FFF;
  }
  .cover-year {
    height: 104px;
    background-color: #f0561b;
  }
  .report2-title {
    background: url(../../../static/report2-title.png) no-repeat;
    background-size: contain;
    width: 174px;
    height: 78px;
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    top: 24px;
  }
  .cover-title {
    height: 174px;
    position: relative;
    z-index: 2;
  }

  .report2-content {
    background: url(../../../static/report2-content.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 24px;
    width: 180px;
    height: 130px;
  }

  .polygon {
    background: url(../../../static/report-polygon.png) no-repeat;
    background-size: contain;
    width: 169px;
    height: 68px;
    position: absolute;
    bottom: -67px;
    z-index: 1;
    right: 0;
  }

  .angel-animation {
    position: absolute;
    right: -40px;
    top: 115px;
    animation: bounce-right 1s linear infinite;
  }

  .right-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-width: 2px 2px 0 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .bg-cloud {
    position: absolute;
    width: 100%;
    height: auto;
    top: 139px;
    left: 0;
    animation: infinite-fade 2.0s linear infinite;
  }

  .bottom {
    position: absolute;
    bottom: -990px;
  }
  .earth {
    display: block;
    vertical-align: top;
    width: 1270.5px;
    height: 1270.5px;
    position: relative;
    left: -440px;
    margin: 0;
    transform: rotate(-96deg);
  }
  @keyframes rotate-page2 {
    0% {
       transform: rotate(-96deg);
    }
    25% {
      transform: rotate(-186deg);
    }
    50% {
      transform: rotate(-276deg);
    }
    75% {
      transform: rotate(-366deg);
    }
    100% {
      transform: rotate(-456deg);
    }
  }
  @-webkit-keyframes rotate-page2 {
    0% {
       -webkit-transform: rotate(-96deg);
    }
    25% {
      -webkit-transform: rotate(-186deg);
    }
    50% {
      -webkit-transform: rotate(-276deg);
    }
    75% {
      -webkit-transform: rotate(-366deg);
    }
    100% {
      -webkit-transform: rotate(-456deg);
    }
  }
  .rotateEarth {
    animation: rotate-page2 40.0s infinite linear;
  }
  .car-position {
    position: absolute;
    bottom: 70px;
    width: 100%;
  }
</style>
