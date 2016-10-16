<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
      <start></start>
      <decision></decision>
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
  let recruitSwiper;
  // import { $ } from '../utils/utils.js';
  import Start from '../components/Start';
  import Decision from '../components/Decision';
  import Recruit from '../components/Recruit';
  import Requirement from '../components/Requirement';
  import Provide from '../components/Provide';
  import ProvideDetail from '../components/ProvideDetail';
  import Email from '../components/Email';

  export default {
    components: {
      Start,
      Decision,
      Recruit,
      Requirement,
      Provide,
      Email,
      ProvideDetail,
    },
    ready() {
      recruitSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
      });
    },
    events: {
      'slideNext'() {
        recruitSwiper.unlockSwipeToNext();
        recruitSwiper.slideNext();
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
		overflow: scroll;
	}
</style>
