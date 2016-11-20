<template>
	<div class="icon-car-big">
    <div class="wheel">
      <div class="icon-wheel-big left"></div>
      <div class="icon-wheel-big right"></div>
      <div class="dot small-dot"></div>
      <div class="dot bid-dot"></div>
    </div>
  </div>
</template>

<style scoped>
  .icon-car-big {
    margin: 0 auto;
    position: relative;
    animation: little-bounce 1s linear infinite;
  }

  .icon-wheel-big {
    display: inline-block;
    position: absolute;
    bottom: 0;
    animation: rotate 1.0s infinite linear;
  }

  .wheel .left {
    left: 28px;
  }

  .wheel .right {
    right: 30px;
  }

  .dot {
    position: absolute;
    background-color: #FFF;
  }

  .small-dot {
    width: 18px;
    height: 18px;
    border-radius: 9px;
    left: -25px;
    top: 60px;
    animation: spinner-color 0.8s linear infinite;
  }

  .bid-dot {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: 50px;
    left: -75px;
    animation: spinner-color 0.8s linear infinite;
		animation-delay: 0.1s;
  }
</style>
