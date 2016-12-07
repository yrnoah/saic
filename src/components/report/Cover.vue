<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year"><div class="report-year ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div></div>
      <div class="cover-title ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"><div class="report-title"></div></div>
      <!--<div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
        <div class="angel-animation"><div class="right-angel"></div></div>
      </div>-->
      <div class="polygon-position">
        <div class="polygon" v-if="isActive" :class="{ transtionHeight: isActive }"></div>
      </div>
    </div>
    <div class="angel-animation ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
      <img src="../../../static/hand-right.gif" class="hand-right">
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
    background-color: #285CE9;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    overflow: visible;
    z-index: 2;
  }
  .cover-year {
    height: 104px;
    background: #FFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    /*background-color: #285CE9;*/
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
    /*animation: bounce-down 1s linear infinite;*/
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    z-index: 4;
  }
  .hand-right {
    margin: 0 auto;
    width: 24%;
  }

  /*.angel-animation {
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
  }*/
</style>
