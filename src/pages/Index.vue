<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide page1">
        <img src="../images/00.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/01.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/02.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/03.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/04.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/05.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/06.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/07.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/08.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/09.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/10.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/11.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/12.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/13.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/14.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/15.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/16.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/17.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/18.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/19.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/20.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/21.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/22.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/23.jpg">
      </div>
      <div class="swiper-slide page1">
        <img src="../images/24.jpg">
      </div>
		</div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  let appSwiper;

  export default {
    ready() {
      console.log(appSwiper);
      appSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
      });
    },
  };
</script>

<style>
	@import '../assets/swiper-3.3.1.min.css';
	.swiper-container {
		height: 100%;
		width: 100%;
	}

	.swiper-slide {
		overflow: hidden;
	}

  img {
    width: 100%;
  }

	.page1 {
		background: #FFF;
		height: 100%;
	}
</style>
