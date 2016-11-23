<template>
	<div class="swiper-slide requirement">
    <div class="shareMask ani" @click="hideMask" v-show="showMask" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/share-txt.png" class="shareTxt">
    </div>
    <img src="../../static/logo.png" class="logo">
    <img src="../../static/email-title.png" class="email-title">
    <img src="../../static/icon-letter.png" class="icon-letter">
    <div>
      <p class="emailTxt">recruitment@saicservice.com</p>
    </div>
    <p class="tipTxt">长按可复制</p>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        showMask: true,
      };
    },
    methods: {
      hideMask() {
        this.showMask = false;
      },
    },
  };
</script>

<style scoped>
	.requirement {
		background-color: #56dffd;
		height: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
	}
  .gradient {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
  }
  .shareMask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .shareTxt {
    width: 73%;
    height: auto;
    position: absolute;
    top: 10px;
    right: 5px;
  }
  .logo {
    margin: 7% auto 10px auto;
    width: 33%;
    height: auto;
  }
  .email-title {
    width: 65%;
    margin: 0 auto;
  }
  .icon-letter {
    width: 31%;
    margin: 20px auto;
  }
  .emailTxt {
    padding: 15px 10px;
    background-color: #fffe00;
    color: #51504e;
    display: inline-block;
    border-radius: 10px;
    font-size: 16px;
  }
  .tipTxt {
    color: #0084c5;
    margin-top: 5px;
  }
</style>
