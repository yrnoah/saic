<template>
	<div class="swiper-slide report-cover">
    <div class="report-content ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <div class="cover-year">
        <div class="report2-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="bottom-mask"></div>
      </div>
      <div class="cover-title"><div class="report2-content ani" swiper-animate-effect="flipInX" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div></div>
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
    background-color: #f0561b;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
  }
  .report2-title {
    background: url(../../../static/report2-title.png) no-repeat;
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

  .report2-content {
    background: url(../../../static/report2-content.png) no-repeat;
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
    /*animation: bounce-down 1s linear infinite;*/
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    z-index: 4;
  }
  .hand-right {
    margin: 0 auto;
    width: 24%;
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
