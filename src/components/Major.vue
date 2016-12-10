<template>
	<div class="swiper-slide major">
    <img src="../../static/wechat-gradient.png" class="gradient">
    <div class="main-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/wechat-title1.png" class="major-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="board-container">
        <img src="../../static/wechat-bgboard.png" class="major-board">
        <div class="content">
          <div class="content-container first-margin">
            <div class="icon-container">
              <img src="../../static/major-icon1.png" class="major-icon1 ani" swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
            </div>
            <div class="txt-container">
              <img src="../../static/wechat-major1.png" class="text1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
              <p class="detail ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">市场营销、品牌推广、销售管理、小语种</p>
            </div>
          </div>
          <div class="content-container">
            <div class="icon-container">
              <img src="../../static/major-icon2.png" class="major-icon1 ani" swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
            </div>
            <div class="txt-container">
              <img src="../../static/wechat-major2.png" class="text1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
              <p class="detail ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">产品规划、售后市场调研</p>
            </div>
          </div>
          <div class="content-container">
            <div class="icon-container">
              <img src="../../static/major-icon3.png" class="major-icon1 ani" swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
            </div>
            <div class="txt-container">
              <img src="../../static/wechat-major3.png" class="text1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
              <p class="detail ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">财务管理、金融分析、商务投资</p>
            </div>
          </div>
          <div class="content-container">
            <div class="icon-container">
              <img src="../../static/major-icon4.png" class="major-icon1 ani" swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
            </div>
            <div class="txt-container">
              <img src="../../static/wechat-major4.png" class="text1 major4-txt ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
              <p class="detail ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">法务</p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../static/wechat-man2.png" class="wechat-man2">
    </div>
	</div>
</template>

<style scoped>
	.major {
		background-color: #56dffd;
		height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
	}
  .gradient {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
  }
  .main-container {
    width: 86%;
    margin: 25px auto 0 auto;
    background-color: #e51373;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    padding: 33px 0 5px 0;
  }
  .main-container::after {
    content:'';
    display: block;
    z-index: 1;
    background-color: #4edefd;
    width: 6px;
    height: 100%;
    position: absolute;
    right: -6px;
    top: 8px;
    border-top-right-radius: 10px;
  }
  .major-title {
    width: 89%;
    height: auto;
    display: block;
    vertical-align: top;
    margin: 0 auto;
  }
  .board-container {
    width: 96%;
    margin: 0 auto;
    position: relative;
  }
  .major-board {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
    vertical-align: top;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .content-container {
    width: 90%;
    overflow: hidden;
    margin: 0 auto 12px auto;
  }
  .first-margin {
    margin-top: 22%;
  }
  .icon-container, .txt-container {
    display: inline-block;
  }
  .icon-container {
    width: 11%;
    float: left;
  }
  .txt-container {
    width: 85%;
    float: right;
  }
  .major-icon1 {
    width: 100%;
    height: auto;
    position: relative;
    top: 5px;
  }
  .text1 {
    width: 48%;
    height: auto;
  }
  .major4-txt {
    width: 30%;
  }
  .detail {
    color: #595757;
    font-size: 14px;
  }
  .wechat-man2 {
    width: 50%;
    height: auto;
    position: absolute;
    bottom: -45px;
    right: 5px;
  }
</style>
