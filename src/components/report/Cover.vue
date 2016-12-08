<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year"><div class="report-year ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div></div>
      <div class="cover-title"><div class="report-title ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div></div>
      <!--<div class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">
        <div class="angel-animation"><div class="right-angel"></div></div>
      </div>-->
      <div class="polygon-position">
        <div class="polygon" v-if="isActive" :class="{ transtionHeight: isActive }"></div>
      </div>
    </div>
    <div class="angel-animation ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
      <div class="gradientMask ani" swiper-animate-effect="fadeOut" swiper-animate-duration="0.5s" swiper-animate-delay="3s"></div>
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
  @import './common.css';
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
</style>
