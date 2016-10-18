<template>
	<div class="swiper-slide elite">
		<div class="container">
			<div class="elite-top-container">
        <img src="../images/buildings.png" alt="shanghai" class="bg-shanghai ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
        <div class="position-container-top">
          <div class="icon-shanghai ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
        </div>
        <div class="position-container-bottom">
          <div class="icon-man-page1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
            <div class="icon-card ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"></div>
          </div>
        </div>
      </div>
			<div class="navy-line"></div>
			<div class="text-container">
				<div>
					<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">国际人才是当下和未来上海转型发展的关键。</p>
					<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.8s">·《中国人才》文章《人才聚 产业兴——上海构筑国际人才高地、服务转型发展纪实》</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import '../assets/report-common-style.css';
	.elite {
		background-color: #D3E6EB;
		position: relative;
	}

	.navy-line {
		height: 40px;
		background-color: #206CC3;
	}

  .elite-top-container {
    position: relative;
  }

  .position-container-top {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .position-container-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .icon-shanghai {
    margin: 0 auto;
    opacity: 0.8;
  }

  .icon-man-page1 {
    margin: 0 auto;
    position: relative;
  }

  .icon-card {
    position: absolute;
    right: -75px;
    top: 100px;
  }
</style>
