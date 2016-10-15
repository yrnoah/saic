<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<cover></cover>
			<elite></elite>
			<enterprise></enterprise>
			<international></international>
			<market></market>
			<slogan></slogan>
			<introduction></introduction>
			<major></major>
			<choice></choice>
			<login></login>
			<years></years>
			<wx-circles></wx-circles>
			<recruit></recruit>
			<requirement></requirement>
			<provide></provide>
			<provide-detail></provide-detail>
			<email></email>
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  let appSwiper;
  // import { $ } from '../utils/utils.js';
  import Cover from '../components/Cover';
  import Elite from '../components/Elite';
  import Enterprise from '../components/Enterprise';
  import International from '../components/International';
  import Market from '../components/Market';
  import Slogan from '../components/Slogan';
  import Introduction from '../components/Introduction';
  import Major from '../components/Major';
  import Choice from '../components/Choice';
  import Login from '../components/Login';
  import Years from '../components/YearAnimation';
  import Recruit from '../components/Recruit';
  import Requirement from '../components/Requirement';
  import Provide from '../components/Provide';
  import ProvideDetail from '../components/ProvideDetail';
  import Email from '../components/Email';
  import WxCircles from '../components/WechatCircles';

  export default {
    components: {
      Cover,
      Elite,
      Enterprise,
      International,
      Market,
      Slogan,
      Introduction,
      Major,
      Choice,
      Login,
      Years,
      Recruit,
      Requirement,
      Provide,
      Email,
      ProvideDetail,
      WxCircles,
    },
    ready() {
      appSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        noSwiping: true,
        noSwipingClass: 'stop-swiping',
        onSlideNextEnd: (swiper) => {
          if (swiper.activeIndex === 9) {
            appSwiper.lockSwipeToNext();
          }
        },
        onSlidePrevEnd: (swiper) => {
          if (swiper.activeIndex === 8) {
            appSwiper.unlockSwipeToNext();
          }
        },
      });
    },
    events: {
      'slideNext'() {
        appSwiper.unlockSwipeToNext();
        appSwiper.slideNext();
      },
    },
  };
</script>

<style>
	@import '../assets/swiper-3.3.1.min.css';
	@import '../assets/sprite-saic.css';
	.swiper-container {
		height: 100%;
		width: 100%;
	}

	.swiper-slide {
		overflow: hidden;
	}
</style>
