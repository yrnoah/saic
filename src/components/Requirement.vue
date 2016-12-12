<template>
	<div class="swiper-slide requirement">
    <div class="main-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/wechat-require.png" class="major-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="board-container">
        <img src="../../static/wechat-bgboard.png" class="major-board">
        <div class="content">
          <div class="content-container first-margin ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
            <div class="icon-container">
              <h3>A.</h3>
            </div>
            <div class="txt-container">
              <p class="detail">有<span>理想</span>有<span>激情</span>，认同我们的</p>
              <p class="detail">企业文化，愿意奔赴<span>海外工作</span></p>
            </div>
          </div>
          <div class="content-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
            <div class="icon-container">
              <h3>B.</h3>
            </div>
            <div class="txt-container">
              <p class="detail">拥有较强的<span>持续学习</span>能力,</p>
              <p class="detail"><span>创新意识</span>和自我成长的<span>内驱力</span></p>
            </div>
          </div>
          <div class="content-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s">
            <div class="icon-container">
              <h3>C.</h3>
            </div>
            <div class="txt-container">
              <p class="detail">独立思考、善于分析、对待工作积极</p>
              <p class="detail">主动并能<span>有效推进、高效执行</span></p>
            </div>
          </div>
          <div class="content-container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
            <div class="icon-container">
              <h3>D.</h3>
            </div>
            <div class="txt-container vertical-middle">
              <p class="detail">良好的<span>英语听说读写能力</span></p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../static/wechat-man1.png" class="wechat-man2">
    </div>
    <handup></handup>
	</div>
</template>
<script>
  import Handup from './common/Handup';
  export default {
    components: {
      Handup,
    },
  };
</script>
<style scoped>
	.requirement {
		background-color: #56dffd;
		height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
	}
  .main-container {
    width: 86%;
    margin: 25px auto 0 auto;
    background-color: #7055b9;
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
    margin: 0 auto 5px auto;
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
    top: -12px;
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
    text-align: center;
  }
  .icon-container> h3 {
    color: #595757;
    display: block;
    vertical-align: top;
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 18px;
    top: 5px;
  }
  .txt-container {
    width: 85%;
    float: right;
    vertical-align: middle;
    overflow: visible;
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
  .detail span {
    font-size: 18px;
  }
  .vertical-middle {
    position: relative;
    top: 4px;
  }
  .wechat-man2 {
    width: 50%;
    height: auto;
    position: absolute;
    bottom: -95px;
    left: 25px;
  }
</style>
