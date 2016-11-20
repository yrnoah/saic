<template>
	<div class="swiper-slide logo-page">
    <img src="../../images/elements/report-cloud.png" class="bg-cloud">
    <div class="angel-animation">
      <div class="up-angel"></div>
    </div>
    <div class="logo"></div>
    <div class="name"></div>
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
	.logo-page {
		background-color: #4EDEFD;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .logo {
    background: url(../../images/elements/logo.png) no-repeat;
    background-size: contain;
    width: 277px;
    height: 385px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    /*margin: 86px auto 26px auto;*/
  }
  .name {
    background: url(../../images/elements/name.png) no-repeat;
    background-size: contain;
    width: 297px;
    height: 96px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .angel-animation {
    position: absolute;
    bottom: 25px;
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
    top: 272px;
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
