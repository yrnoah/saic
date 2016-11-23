<template>
	<div class="swiper-slide provide1">
    <div class="topbg-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/wechat-bgpolygan.png" class="privide-topbg">
      <div class="content-container">
        <div class="content">
          <img src="../../static/wechat-provide1.png" class="content-tit ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          <div class="detail-container padding5px ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
            <span>五险一金</span>
            <img src="../../static/wechat-right.png" class="privide-icon icon-margin">
            <span>年休假</span>
            <img src="../../static/wechat-right.png" class="privide-icon">
          </div>
          <img src="../../static/wechat-provide2.png" class="content-tit marginTit ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
            <span>补充公积金</span>
            <img src="../../static/wechat-right.png" class="privide-icon">
          </div>
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
            <span>补充医疗</span>
            <img src="../../static/wechat-right.png" class="privide-icon icon-margin">
            <span>VIP体检</span>
            <img src="../../static/wechat-right.png" class="privide-icon">
          </div>
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
            <span>国际保险</span>
            <img src="../../static/wechat-right.png" class="privide-icon icon-margin">
            <span>海外津贴</span>
            <img src="../../static/wechat-right.png" class="privide-icon">
          </div>
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
            <span>家属津贴</span>
            <img src="../../static/wechat-right.png" class="privide-icon">
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"><img src="../../static/wechat-bottom2.png" class="provide-bg"></div>
	</div>
</template>

<style scoped>
	.provide1 {
		background-color: #56dffd;
		height: 100%;
    position: relative;
    overflow: hidden;
	}
  .topbg-container {
    width: 87%;
    margin: 20px auto 0 auto;
    position: relative;
    z-index: 1;
  }
  .privide-topbg {
    width: 100%;
    height: auto;
  }
  .content-container {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .content {
    width: 60%;
    margin: 20% auto 0 auto;
    position: relative;
    left: 4%;
  }
  .content-tit {
    width: 82%;
    height: auto;
    display: block;
    vertical-align: top;
  }
  .marginTit {
    margin: 3% 0;
  }
  .detail-container {
    padding: 1% 0;
  }
  .padding5px {
    padding: 5px 0;
  }
  .detail-container span {
    color: #0043d2;
    font-size: 14px;
    margin-right: 1%;
  }
  .privide-icon {
    width: 10%;
    height: auto;
    display: inline-block;
    vertical-align: top;
  }
  .icon-margin {
    margin-right: 3%;
  }
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .provide-bg {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: top;
  }
</style>
