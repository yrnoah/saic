<template>
	<div class="yearAnimation">
		<div class="swiper-animation">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="year in years">
					<div class="active-border">
						<p>2</p>
						<p>0</p>
						<p>{{ year.y1 }}</p>
						<p>{{ year.y2 }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="toNextPageBtn">
			<div class="icon-angel-down animate-bounce-down"></div>
		</div>
	</div>
</template>
<script>
  import Swiper from '../utils/swiper-3.3.1.min.js';
  let animationSwiper;
  let goCirclesTimeout;
  let animationFinishedTimeout;
  export default {
    data() {
      return {
        years: [{ y1: 1, y2: 5 }, { y1: 1, y2: 6 }, { y1: 1, y2: 7 },
        { y1: 1, y2: 8 }, { y1: 1, y2: 9 }, { y1: 2, y2: 0 }, { y1: 2, y2: 1 },
        { y1: 2, y2: 2 }, { y1: 2, y2: 3 }, { y1: 2, y2: 4 }],
        isAnimationSwiper: true,
      };
    },
    ready() {
      this.isAnimationSwiper = true;
      animationSwiper = new Swiper('.swiper-animation', {
        direction: 'vertical',
        initialSlide: 1,
        autoplay: 500,
        autoplayStopOnLast: true,
        autoplayDisableOnInteraction: false,
        setWrapperSize: true,
        loop: false,
        onSlideChangeEnd: (swiper) => {
          if (swiper.activeIndex === 7) {
            animationSwiper.stopAutoplay();
            goCirclesTimeout = setTimeout(() => {
              this.$router.go({ name: 'circles' });
              clearTimeout(goCirclesTimeout);
              clearTimeout(animationFinishedTimeout);
            }, 1500);
          }
        },
      });
      window.addEventListener('scroll', () => {
        if (!this.isAnimationSwiper) return;
        if (window.scrollY >= document.body.scrollHeight - document.body.clientHeight - 10) {
          animationFinishedTimeout = setTimeout(() => {
            this.$router.go({ name: 'circles' });
            this.isAnimationSwiper = false;
            clearTimeout(goCirclesTimeout);
            clearTimeout(animationFinishedTimeout);
            window.removeEventListener('scroll', () => { console.log('removed'); });
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

	.swiper-animation {
		height: 100px;
		width: 100%;
		position: relative;
		top: 45%;
		text-align: center;
	}

	.swiper-wrapper {
		overflow: hidden;
	}

	.swiper-slide {
		height: 15%;
		position: relative;
		overflow: visible;
	}

	.swiper-slide p {
		color: rgba(255, 255, 255, .3);
		font-size: 40px;
		display: inline-block;
		margin: 0 auto;
		line-height: 45px;
		letter-spacing: 0.5px;
	}

	.swiper-slide-active p {
		color: #7897C4;
		background-color: #FFF;
		letter-spacing: 2px;
		font-size: 50px;
		min-width: 30px;
		letter-spacing: 4px;
	}

	.swiper-slide-prev p,
	.swiper-slide-next p {
		color: rgba(255, 255, 255, .6);
		font-size: 45px;
		letter-spacing: 2px;
	}

	.swiper-slide-active div {
		display: inline-block;
		margin: 0 auto;
		background-color: #002C4D;
		border: 5px solid #FF626B;
		padding: 8px 10px;
		position: relative;
		top: -10px;
	}

	.swiper-slide-active div:after {
		content: '';
		display: inline-block;
		width: 90px;
		height: 5px;
		background-color: #FF252B;
		position: absolute;
		bottom: -10px;
		left: 35px;
	}

	.swiper-slide-active div:before {
		content: '';
		display: inline-block;
		width: 90px;
		height: 10px;
		background-color: #FF626B;
		position: absolute;
		bottom: -15px;
		left: 35px;
	}

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
