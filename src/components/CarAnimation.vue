<template>
	<div class="car-big">
    <div class="wheel">
      <div class="wheel-big left"></div>
      <div class="wheel-big right"></div>
      <!--<div class="dot small-dot"></div>
      <div class="dot bid-dot"></div>-->
    </div>
  </div>
</template>

<style scoped>
  .car-big {
    margin: 0 auto;
    position: relative;
    animation: little-bounce 1s linear infinite;
    background: url(../../static/car-big.png) no-repeat;
    background-size: contain;
    width: 181.5px;
    height: 72px;
  }

  .wheel-big {
    display: inline-block;
    position: absolute;
    bottom: 0;
    animation: rotate 1.0s infinite linear;
    background: url(../../static/wheel-big.png) no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
  }

  .wheel .left {
    left: 18px;
  }

  .wheel .right {
    right: 20px;
  }

  .dot {
    position: absolute;
    background-color: #FFF;
  }

  .small-dot {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    left: -20px;
    top: 40px;
    animation: spinner-fade 0.8s linear infinite;
  }

  .bid-dot {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    top: 32px;
    left: -55px;
    animation: spinner-fade 0.8s linear infinite;
		animation-delay: 0.1s;
  }
</style>
