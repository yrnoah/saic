<template>
	<div class="swiper-slide slogan">
    <img src="../../images/elements/report-cloud.png" class="bg-cloud">
    <div class="bottom">
      <img src="../../images/earth.png" class="earth">
    </div>
    <div class="car-position">
      <car-animation></car-animation>
    </div>
    <div class="angel-animation">
      <div class="up-angel"></div>
    </div>
    <div class="slogan-title"></div>
    <div class="slogan-tip"></div>
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
	.slogan {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .slogan-title {
    background: url(../../images/elements/slogan-title.png) no-repeat;
    background-size: contain;
    width: 324px;
    height: 152px;
    margin: 86px auto 26px auto;
    position: relative;
    z-index: 1;
  }
  .slogan-tip {
    background: url(../../images/elements/slogan-tip.png) no-repeat;
    background-size: contain;
    width: 188px;
    height: 65px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .angel-animation {
    position: absolute;
    bottom: 60px;
    width: 100%;
    animation: bounce-down 1s linear infinite;
  }

  .up-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-width: 2px 2px 0 0;
    transform: rotate(-45deg);
    margin: 0 auto;
  }
  .bg-cloud {
    position: absolute;
    width: 100%;
    height: auto;
    top: 156px;
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
