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
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  import Cover from '../components/Cover';
  import Elite from '../components/Elite';
  import Enterprise from '../components/Enterprise';
  import International from '../components/International';
  import Market from '../components/Market';
  import Slogan from '../components/Slogan';
  import Introduction from '../components/Introduction';

  export default {
    components: {
      Cover,
      Elite,
      Enterprise,
      International,
      Market,
      Slogan,
      Introduction,
    },
    ready() {
      const appSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
      });
      appSwiper.onResize();
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
    height: 100%;
  }
</style>
