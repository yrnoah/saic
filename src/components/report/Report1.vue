<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year">
        <div class="report1-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="bottom-mask"></div>
      </div>
      <div class="cover-title"><div class="report1-content ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div></div>
      <!--<div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
        <div class="angel-animation"><div class="right-angel"></div></div>
      </div>-->
      <div class="polygon-position">
        <div class="polygon" v-if="isActive" :class="{ transtionHeight: isActive }"></div>
      </div>
    </div>
    <div class="angel-animation ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
      <div class="hand-right">
        <img src="../../../static/arrow.png" class="arrow">
        <img src="../../../static/hand.png" class="hand">
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    events: {
      'startReportAnimation'() {
        this.isActive = true;
      },
      'initAnimation'() {
        this.isActive = false;
      },
    },
  };
</script>

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
  .bottom-mask {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 4px;
    background-color: rgba(0,0,0,.1);
  }
  .cover-year {
    height: 104px;
    background-color: #dbe01f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
  }
  .report1-title {
    background: url(../../../static/report1-title.png) no-repeat;
    background-size: contain;
    width: 174px;
    height: 78px;
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    top: 18px;
    right: -6px;
  }
  .cover-title {
    height: 174px;
    position: relative;
    background-color: #FFF;
    z-index: 2;
  }

  .report1-content {
    background: url(../../../static/report1-content.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 24px;
    width: 180px;
    height: 130px;
  }

  .polygon-position {
    position: absolute;
    width: 100%;
    z-index: 1;
    left: 0;
  }
  .polygon {
    background: url(../../../static/report-polygon.png) no-repeat;
    background-size: contain;
    width: 169px;
    height: 68px;
    vertical-align: top;
    float: right;
    position: relative;
    top: -1px;
  }
  .transtionHeight {
    animation: increase-height 1s ease;
    -webkit-animation: increase-height 1s ease;
    transform-origin: right top;
  }
  .angel-animation {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    /*animation: bounce-down 1s linear infinite;*/
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    z-index: 4;
  }
  .hand-right {
    margin: 0 auto;
    display: inline-block;
    height: 60px;
    position: relative;
    transform: rotate3d(1, 1, 0, 180deg);
    -webkit-transform: rotate3d(1, 1, 0, 180deg);
  }
  .hand-right img {
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
</style>
