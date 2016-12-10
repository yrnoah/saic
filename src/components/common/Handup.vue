<template>
   <div class="angel-animation ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s">
      <div class="gradientMask ani" swiper-animate-effect="fadeOut" swiper-animate-duration="0.5s" swiper-animate-delay="3.5s"></div>
      <div class="hand-up">
        <img src="../../../static/arrow.png" class="arrow">
        <img src="../../../static/hand.png" class="hand">
      </div>
    </div>
</template>

<style scoped>
  .angel-animation {
    position: absolute;
    bottom: 0;
    width: 100%;
    /*animation: bounce-down 1s linear infinite;*/
    z-index: 4;
    text-align: center;
  }
  .gradientMask {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .hand-up {
    margin: 5px auto;
    display: inline-block;
    height: 60px;
    position: relative;
  }
  .hand-up img {
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
  .up-angel {
    width: 48px;
    height: 48px;
    border: 2px solid #4EDEFD;
    border-width: 2px 2px 0 0;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin: 0 auto;
  }
</style>
