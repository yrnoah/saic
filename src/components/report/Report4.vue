report1-contentreport1-content<template>
	<div class="swiper-slide report-cover">
    <img src="../../images/elements/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../images/earth.png" class="earth">
    </div>
    <div class="car-position">
      <car-animation></car-animation>
    </div>
    <div class="report-content">
      <div class="cover-year"><div class="report4-title"></div></div>
      <div class="cover-title"><div class="report4-content"></div></div>
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
    margin: 64px auto 0 auto;
    background-color: #c067ff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    overflow: visible;
    z-index: 2,
  }
  .cover-year {
    height: 104px;
  }
  .report4-title {
    background: url(../../images/elements/report4-title.png) no-repeat;
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
    background-color: #FFF;
  }

  .report4-content {
    background: url(../../images/elements/report4-content.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 24px;
    width: 180px;
    height: 130px;
  }

  .polygon {
    background: url(../../images/elements/report-polygon.png) no-repeat;
    background-size: contain;
    width: 169px;
    height: 68px;
    position: absolute;
    bottom: -68px;
    right: 0;
  }

  .angel-animation {
    position: absolute;
    right: -50px;
    top: 115px;
    animation: bounce-right 1s linear infinite;
  }

  .right-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-width: 2px 2px 0 0;
    transform: rotate(45deg);
  }
  .bg-cloud {
    position: absolute;
    width: 100%;
    height: auto;
    top: 139px;
    left: 0;
  }

  .bottom {
    position: absolute;
    bottom: -900px;
  }
  .earth {
    display: block;
    vertical-align: top;
    width: 1270.5px;
    height: 1270.5px;
    position: relative;
    left: -432px;
    margin: 0;
    animation: rotate-left 40.0s infinite linear;
  }
  .car-position {
    position: absolute;
    bottom: 155px;
    width: 100%;
  }
</style>
