<template>
	<div class="swiper-slide report-cover">
    <img src="../../../static/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../../static/earth.png" class="earth">
    </div>
    <div class="car-position">
      <car-animation></car-animation>
    </div>
    <div class="report-content ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="cover-year"><div class="report-year ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div></div>
      <div class="cover-title"><div class="report-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div></div>
      <div class="polygon"></div>
      <div class="angel-animation">
        <div class="right-angel"></div>
      </div>
    </div>
	</div>
</template>
<script>
  import CarAnimation from '../CarAnimation';
  export default {
    components: {
      CarAnimation,
    },
  };
</script>
<style scoped>
	.report-cover {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .report-content {
    width: 226px;
    margin: 50px auto 0 auto;
    background-color: #FFF;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    overflow: visible;
    z-index: 2,
  }
  .cover-year {
    height: 104px;
  }
  .report-year {
    background: url(../../../static/report-year.png) no-repeat;
    background-size: contain;
    width: 127px;
    height: 64px;
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    top: 24px;
  }
  .cover-title {
    height: 174px;
    background-color: #285CE9;
    position: relative;
    z-index: 2;
  }

  .report-title {
    background: url(../../../static/report-title.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 24px;
    width: 188px;
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
    vertical-align: top;
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
    animation: rotate-left 40.0s infinite linear;
  }
  .car-position {
    position: absolute;
    bottom: 70px;
    width: 100%;
  }
</style>
