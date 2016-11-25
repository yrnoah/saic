<template>
	<div class="swiper-slide provide1">
    <div class="topbg-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/wechat-bgpolygan2.png" class="privide-topbg">
      <div class="content-container">
        <div class="content">
          <img src="../../static/wechat-provide4.png" class="content-tit ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
            <span>网红餐厅“阿桂厨房”</span>
            <img src="../../static/wechat-right.png" class="privide-icon width10">
          </div>
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
            <span>健身中心</span>
            <img src="../../static/wechat-right.png" class="privide-icon width10">
          </div>
          <img src="../../static/wechat-provide3.png" class="content-tit provide3Tit ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
            <div>
              <span>潜力人才</span>
              <img src="../../static/wechat-right.png" class="privide-icon">
            </div>
            <div>
              <span>专业人才</span>
              <img src="../../static/wechat-right.png" class="privide-icon">
            </div>
          </div>
          <div class="detail-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
            <div>
              <span>管理人才</span>
              <img src="../../static/wechat-right.png" class="privide-icon">
            </div>
            <div>
              <span>国际人才</span>
              <img src="../../static/wechat-right.png" class="privide-icon">
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<style scoped>
	.provide1 {
		background-color: transparent;
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
  .provide3Tit {
    width: 100%;
    margin: 10% 0 3% 0;
  }
  .detail-container {
    padding: 1% 0;
  }
  .padding5px {
    padding: 5px 0;
  }
  .detail-container span {
    color: #0043d2;
    font-size: 15px;
    margin-right: 1%;
  }
  .detail-container div {
    display: inline-block;
    width: 49%;
  }
  .detail-container div:first-child {
    float: left;
  }
  .detail-container div:last-child {
    float: right;
    text-align: right;
  }
  .privide-icon {
    width: 20%;
    height: auto;
    display: inline-block;
    vertical-align: top;
  }
  .width10 {
    width: 10%;
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
</style>
