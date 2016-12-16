<template>
	<div class="default-loading">
		<div class="floater"></div>
    <div class="car-big">
      <div class="wheel">
        <div class="wheel-big left"></div>
        <div class="wheel-big right"></div>
      </div>
    </div>
		<p class="percent-value"><span id="loading-value">{{ count }}</span>%</p>
    <div class="hide">
      <img src="../../static/car-big.png" class="preloadImg" >
      <img src="../../static/wheel-big.png" class="preloadImg" >
      <img src="../../static/home-buildings.png" class="preloadImg" >
      <img src="../../static/home-text1.png" class="preloadImg" >
      <img src="../../static/home-text2.png" class="preloadImg" >
      <img src="../../static/home-text3.png" class="preloadImg" >
      <img src="../../static/home-text4.png" class="preloadImg" >
      <img src="../../static/hand.png" class="preloadImg" >
      <img src="../../static/arrow.png" class="preloadImg" >
      <img src="../../static/earth.png" class="preloadImg" >
      <img src="../../static/future-longbg.jpg" class="preloadImg" >
      <img src="../../static/report-cloud.png" class="preloadImg" >
      <img src="../../static/report-year.png" class="preloadImg" >
      <img src="../../static/report-title.png" class="preloadImg" >
      <img src="../../static/report-polygon.png" class="preloadImg" >
      <img src="../../static/report1-title.png" class="preloadImg" >
      <img src="../../static/report1-content.png" class="preloadImg" >
      <img src="../../static/report2-title.png" class="preloadImg" >
      <img src="../../static/report2-content.png" class="preloadImg" >
      <img src="../../static/report3-title.png" class="preloadImg" >
      <img src="../../static/report3-content.png" class="preloadImg" >
      <img src="../../static/report4-title.png" class="preloadImg" >
      <img src="../../static/report4-content.png" class="preloadImg" >
      <img src="../../static/wechat-require.png" class="preloadImg" >
      <img src="../../static/wechat-bgboard.png" class="preloadImg" >
      <img src="../../static/wechat-man1.png" class="preloadImg" >
      <img src="../../static/logo.png" class="preloadImg" >
      <img src="../../static/name.png" class="preloadImg" >
      <img src="../../static/slogan-title.png" class="preloadImg" >
      <img src="../../static/slogan-tip.png" class="preloadImg" >
      <img src="../../static/share-txt.png" class="preloadImg" >
      <img src="../../static/email-title.png" class="preloadImg" >
      <img src="../../static/wechat-gradient.png" class="preloadImg" >
      <img src="../../static/wechat-title1.png" class="preloadImg" >
      <img src="../../static/wechat-bgboard.png" class="preloadImg" >
      <img src="../../static/major-icon1.png" class="preloadImg" >
      <img src="../../static/wechat-major1.png" class="preloadImg" >
      <img src="../../static/major-icon2.png" class="preloadImg" >
      <img src="../../static/wechat-major2.png" class="preloadImg" >
      <img src="../../static/major-icon3.png" class="preloadImg" >
      <img src="../../static/wechat-major3.png" class="preloadImg" >
      <img src="../../static/major-icon4.png" class="preloadImg" >
      <img src="../../static/wechat-major4.png" class="preloadImg" >
      <img src="../../static/wechat-man2.png" class="preloadImg" >
      <img src="../../static/wechat-bgpolygan.png" class="preloadImg" >
      <img src="../../static/wechat-provide1.png" class="preloadImg" >
      <img src="../../static/wechat-right.png" class="preloadImg" >
      <img src="../../static/wechat-provide2.png" class="preloadImg" >
      <img src="../../static/wechat-bottom2.png" class="preloadImg" >
      <img src="../../static/wechat-bgpolygan2.png" class="preloadImg" >
      <img src="../../static/wechat-provide4.png" class="preloadImg" >
      <img src="../../static/wechat-provide3.png" class="preloadImg" >
      <img src="../../static/future-car.png" class="preloadImg" >
      <img src="../../static/future-carwing.png" class="preloadImg" >
      <img src="../../static/future-cartail.png" class="preloadImg" >
      <img src="../../static/future-cloud.png" class="preloadImg" >
      <img src="../../static/future-topbuilding.png" class="preloadImg" >
      <img src="../../static/bg-cloud-1.png" class="preloadImg" >
      <img src="../../static/banners.png" class="preloadImg" >
      <img src="../../static/banner1.png" class="preloadImg" >
      <img src="../../static/banner2.png" class="preloadImg" >
      <img src="../../static/banner3.png" class="preloadImg" >
      <img src="../../static/banner4.png" class="preloadImg" >
      <img src="../../static/banner5.png" class="preloadImg" >
      <img src="../../static/banner6.png" class="preloadImg" >
      <img src="../../static/future-major.png" class="preloadImg" >
      <img src="../../static/future-major1.png" class="preloadImg" >
      <img src="../../static/future-major2.png" class="preloadImg" >
      <img src="../../static/future-major3.png" class="preloadImg" >
      <img src="../../static/future-major4.png" class="preloadImg" >
      <img src="../../static/future-topbg.png">
      <img src="../../static/future-polygan2.png" class="preloadImg" >
      <img src="../../static/future-polygan3.png" class="preloadImg" >
      <img src="../../static/future-polygan4.png" class="preloadImg" >
      <img src="../../static/future-polygan5.png" class="preloadImg" >
      <img src="../../static/future-polygan7.png" class="preloadImg" >
      <img src="../../static/years-2022.png" class="preloadImg" >
      <img src="../../static/years-2021.png" class="preloadImg" >
      <img src="../../static/years-2020.png" class="preloadImg" >
      <img src="../../static/years-2019.png" class="preloadImg" >
      <img src="../../static/wechat-top.png" class="preloadImg" >
      <img src="../../static/avatar-user.png" class="preloadImg" >
      <img src="../../static/avatar-1.png" class="preloadImg" >
      <img src="../../static/pic-1.png" class="preloadImg" >
      <img src="../../static/avatar-2.png" class="preloadImg" >
      <img src="../../static/pic-2.png" class="preloadImg" >
      <img src="../../static/avatar-3.png" class="preloadImg" >
      <img src="../../static/pic-3.png" class="preloadImg" >
      <img src="../../static/avatar-4.png" class="preloadImg" >
      <img src="../../static/pic-4.png" class="preloadImg" >
      <img src="../../static/avatar-5.png" class="preloadImg" >
      <img src="../../static/pic-5.png" class="preloadImg" >
      <img src="../../static/avatar-6.png" class="preloadImg" >
      <img src="../../static/pic-6.png" class="preloadImg" >
      <img src="../../static/sprite-saic.png" class="preloadImg" >
      <img src="../../static/letter-bottom.png" class="preloadImg" >
      <img src="../../static/letter-top.png" class="preloadImg" >
      <img src="../../static/letter-inner.png" class="preloadImg" >
      <img src="../../static/home-bike.png" class="preloadImg" >
      <img src="../../static/home-car.png" class="preloadImg" >
      <img src="../../static/home-cloud.png" class="preloadImg" >
      <img src="../../static/home-windmill-leaves.png" class="preloadImg" >
      <img src="../../static/home-windmill-range.png" class="preloadImg" >
      <img src="../../static/provide-car.png" class="preloadImg" >
      <img src="../../static/share.png" class="preloadImg" >
      <img src="../../static/music.png" class="preloadImg" >
      <img src="../../static/music-close.png" class="preloadImg" >
    </div>
	</div>
</template>

<script>
  import { $ } from '../utils/utils.js';
  import wx from 'weixin-js-sdk';
  export default {
    data() {
      return {
        count: 0,
        loadCount: 0,
      };
    },
    created() {
      /* eslint-disable */
      this.$http.get('/api/jsconfig').then(resp => {
        const { jsconfig } = resp.json();
        console.log(jsconfig);
        wx.config(jsconfig);
        const title = '上汽国际2017年校园招聘全面开启！';
        const desc = '驭未来 创世界';
        const link = 'http://srkfytl.gofriend.me/internal';
        const image = 'http://img5.imgtn.bdimg.com/it/u=4155302816,1201715785&fm=21&gp=0.jpg';
        wx.ready(function() {
          wx.onMenuShareTimeline({
            title: `${title}`, // 分享标题
            link: `${link}`, // 分享链接
            imgUrl: `${image}`, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
          });
          wx.onMenuShareAppMessage({
            title: `${title}`, // 分享标题
            desc: `${desc}`, // 分享描述
            link: `${link}`, // 分享链接
            imgUrl: `${image}`, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
          });
        });
      });
    },
    ready() {
      this.loadImg();
    },
    methods: {
      loadImg() {
        for (const item of $('.preloadImg')) {
          item.onload = () => {
            this.loadCount = this.loadCount + 1;
            this.count = Math.floor((this.loadCount / $('.preloadImg').length) * 100);
            if (this.loadCount === $('.preloadImg').length) this.goHome();
          };
        }
      },
      goHome() {
        this.$router.go({ name: 'swiper' });
        this.count = 99;
      },
    },
  };
</script>

<style>
    .default-loading {
			height: 100%;
      width: 100%;
      text-align: center;
			overflow: hidden;
      background-color: #4EDEFD;
    }
		.floater {
			height: 50%;
			/*float: left;*/
			margin-bottom: -60px;
		}
		.percent-value {
			color: #FFF;
      font-size: 25px;
      padding: 0;
      margin: 15px auto;
		}
    #loading-value{
      font-size: 32px;
    }
    @keyframes little-bounce {
      25% {
        transform: translateY(-2px);
      }
      50%,
      100% {
        transform: translateY(0);
      }
      75% {
        transform: translateY(2px);
      }
    }
    @-webkit-keyframes little-bounce {
      25% {
        -webkit-transform: translateY(-2px);
      }
      50%,
      100% {
        -webkit-transform: translateY(0);
      }
      75% {
        -webkit-transform: translateY(2px);
      }
    }
  .car-big {
    margin: 0 auto;
    position: relative;
    animation: little-bounce 1s linear infinite;
    -webkit-animation: little-bounce 1s linear infinite;
    background: url(../../static/car-big.png) no-repeat;
    background-size: contain;
    width: 181.5px;
    height: 72px;
  }
  @keyframes rotate {
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    25% {
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
      -webkit-transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
  .wheel-big {
    display: inline-block;
    position: absolute;
    bottom: 0;
    animation: rotate 1.0s infinite linear;
    -webkit-animation: rotate 1.0s infinite linear;
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
  @keyframes spinner-fade {
    0% {
      background-color: rgba(255, 255, 255, 0);
    }
    13% {
      background-color: rgba(255, 255, 255, .13);
    }
    25% {
      background-color: rgba(255, 255, 255, .25);
    }
    50% {
      background-color: rgba(255, 255, 255, .5);
    }
    63% {
      background-color: rgba(255, 255, 255, .63);
    }
    75% {
      background-color: rgba(255, 255, 255, .75);
    }
    88% {
      background-color: rgba(255, 255, 255, .88);
    }
    100% {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  @-webkit-keyframes spinner-fade {
    0% {
      background-color: rgba(255, 255, 255, 0);
    }
    13% {
      background-color: rgba(255, 255, 255, .13);
    }
    25% {
      background-color: rgba(255, 255, 255, .25);
    }
    50% {
      background-color: rgba(255, 255, 255, .5);
    }
    63% {
      background-color: rgba(255, 255, 255, .63);
    }
    75% {
      background-color: rgba(255, 255, 255, .75);
    }
    88% {
      background-color: rgba(255, 255, 255, .88);
    }
    100% {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  .small-dot {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    left: -20px;
    top: 40px;
    animation: spinner-fade 0.8s linear infinite;
    -webkit-animation: spinner-fade 0.8s linear infinite;
  }
  .bid-dot {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    top: 32px;
    left: -55px;
    animation: spinner-fade 0.8s linear infinite;
    -webkit-animation: spinner-fade 0.8s linear infinite;
    animation-delay: 0.1s;
    -webkit-animation-delay: 0.1s;
  }
  .hide {
    width: 0;
    height: 0;
    overflow: hidden;
  }
</style>
