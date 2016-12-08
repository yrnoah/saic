<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year">
        <div class="report3-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="bottom-mask"></div>
      </div>
      <div class="cover-title"><div class="report3-content ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div></div>
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
  .cover-year {
    height: 104px;
    background-color: #ffd413;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
  }
  .report3-title {
    background: url(../../../static/report3-title.png) no-repeat;
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
    z-index: 2;
    background-color: #FFF;
  }

  .report3-content {
    background: url(../../../static/report3-content.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 24px;
    width: 180px;
    height: 130px;
  }
</style>
