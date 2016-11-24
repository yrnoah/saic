<template>
	<div class="swiper-slide requirement">
    <div class="shareMask ani" @click="hideMask" v-show="showMask" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
      <img src="../../static/share-txt.png" class="shareTxt">
    </div>
    <img src="../../static/logo.png" class="logo">
    <img src="../../static/email-title.png" class="email-title">
    <div class="icon-letter">
      <div class="inner-position" :class="{ upLetter: letterRotate, finishedLetterStyle: animationFinished }">
        <img src="../../static/letter-inner.png" class="letter-inner">
      </div>
      <img src="../../static/letter-top.png" class="letter-top" :class="{ rotateAnimation: letterRotate }">
      <div class="bottom-container">
        <img src="../../static/letter-bottom.png" class="letter-bottom">
      </div>
    </div>
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
        letterRotate: false,
        animationFinished: false,
      };
    },
    methods: {
      hideMask() {
        this.showMask = false;
        this.startLetterRotate();
        const animationFinished = setTimeout(() => {
          this.animationFinished = true;
          clearTimeout(animationFinished);
        }, 999);
      },
      startLetterRotate() {
        this.letterRotate = true;
      },
    },
    events: {
      'initAnimation'() {
        this.letterRotate = false;
        this.showMask = true;
        this.animationFinished = false;
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
    z-index: 3;
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
    position: relative;
  }
  .inner-position {
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
  }
  @keyframes up-letter {
    /*0% { bottom: 0; transform: translateX(0); }
    100% { bottom: 15px; transform: translateX(15px); }*/
    0% { transform: translateY(0); }
    100% { transform: translateY(-15px); }
  }

  @-webkit-keyframes up-letter {
    /*0% { bottom: 0; }
    100% { bottom: 15px; }*/
    0% { -webkit-transform: translateY(0); }
    100% { -webkit-transform: translateY(-15px); }
  }
  .upLetter {
    /*bottom: 15px;*/
    z-index: 2;
    animation: up-letter 1s linear;
    -webkit-animation: up-letter 1s linear;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }
  .finishedLetterStyle {
    transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
  }
  .letter-inner {
    width: 90%;
    margin: 0 auto;
  }
  .bottom-container {
    width: 100%;
    background-color: #0068b9;
  }
  .letter-bottom {
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .letter-top {
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    transform: rotateX(-180deg);
    transform-origin: center bottom;
    -webkit-transform: rotateX(-180deg);
    -webkit-transform-origin: center bottom;
  }
  @keyframes rotate-letter {
    0% {
      transform: rotateX(-180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @-webkit-keyframes rotate-letter {
    0% {
      -webkit-transform: rotateX(-180deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
    }
  }
  .rotateAnimation {
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    animation: rotate-letter 1s linear;
    -webkit-animation: rotate-letter 1s linear;
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
