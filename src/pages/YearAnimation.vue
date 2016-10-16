<template>
	<div class="yearAnimation">
    <div class="toNextPageBtn">
      <div class="icon-angel-down animate-bounce-down"></div>
    </div>
	</div>
</template>

<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  let animationSwiper;

  export default {
    ready() {
      animationSwiper = new Swiper('.swiper-animation', {
        direction: 'vertical',
        loop: false,
      });
      window.addEventListener('scroll', () => {
        if (window.scrollY >= document.body.scrollHeight - document.body.clientHeight) {
          setTimeout(() => {
            this.$router.go({ name: 'circles' });
          }, 1000);
        }
      });
    },
    events: {
      'slideNext'() {
        animationSwiper.unlockSwipeToNext();
        animationSwiper.slideNext();
      },
    },
  };
</script>

<style scoped>
	@import '../assets/swiper-3.3.1.min.css';
  @import '../assets/sprite-saic.css';
	.yearAnimation {
		height: 100%;
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.swiper-animation {}
  .toNextPageBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px 0;
  }
  .icon-angel-down {
    display: inline-block;
    margin: 0 auto;
  }

  @keyframes bounce-down {
		25% {
			transform: translateY(-5px);
		}
		50%,
		100% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(10px);
		}
	}

	.animate-bounce-down {
		animation: bounce-down 1s linear infinite;
	}
</style>
