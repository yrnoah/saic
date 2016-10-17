<template>
	<div class="swiper-slide provide-detail">
		<div class="provide-container">
			<div class="detail main ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
				<h4>核心法定福利</h4>
				<div>
					<span class="left-margin">五险一金</span>
					<div class="icon-label-selected"></div>
					<span>年休假</span>
					<div class="icon-label-selected"></div>
				</div>
			</div>
			<div class="detail hommization ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">
				<h4>专属人性福利</h4>
				<div class="bottom-margin">
					<span class="tab">不惧高房价</span>
					<span>补充公积金</span>
					<div class="icon-label-selected"></div>
				</div>
        <div class="bottom-margin">
					<span class="tab">健康No.1</span>
					<span>补充医疗</span>
					<div class="icon-label-selected"></div>
          <span>VIP体检</span>
          <div class="icon-label-selected"></div>
				</div>
        <div class="bottom-margin">
					<span class="tab">全球保障</span>
					<span>国际保险</span>
					<div class="icon-label-selected"></div>
          <span>海外津贴</span>
					<div class="icon-label-selected"></div>
				</div>
        <div>
					<span class="tab empty"></span>
					<span>家属津贴</span>
					<div class="icon-label-selected"></div>
				</div>
			</div>
			<div class="detail special ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="2.3s">
				<h4>企业特色福利</h4>
				<div>
					<span class="left-margin">网红餐厅“阿桂厨房”</span>
					<div class="icon-label-selected"></div>
					<span>健身中心</span>
					<div class="icon-label-selected"></div>
				</div>
			</div>
			<div class="detail assessment ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="3.3s">
				<h4>全方位人才评估，<br>多维职业发展体系</h4>
				<div>
					<span class="left-margin">潜力人才</span>
					<div class="icon-label-selected"></div>
					<span class="left-long-margin">专业人才</span>
					<div class="icon-label-selected"></div>
				</div>
        <div>
					<span class="left-margin">管理人才</span>
					<div class="icon-label-selected"></div>
					<span class="left-long-margin">国际人才</span>
					<div class="icon-label-selected"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.provide-detail {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.provide-container {
		width: 90%;
		margin: 0 auto;
	}

	.detail {
		background-color: #EAECEF;
		width: 100%;
		padding: 10px 0;
		border-radius: 5px;
		margin-bottom: 15px;
		text-align: left;
	}

	.main {
		margin-top: 30px;
	}

	h4 {
		margin: 0 0 5px 5px;
		font-size: 14px;
		color: #163B80;
		line-height: 16px;
	}

	span {
		color: #163B80;
		font-size: 12px;
	}

	.icon-label-selected {
		display: inline-block;
		margin: 0;
		vertical-align: middle;
	}

	.left-margin {
		margin-left: 5px;
	}

  .left-long-margin {
    margin-left: 15px;
  }

  .bottom-margin {
    margin-bottom: 5px;
  }

	.tab {
		background-color: #426396;
		color: #FFF;
    width: 65px;
    margin: 0 0 0 5px;
    padding: 1px 0;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
	}
  .tab.empty {
    background-color: transparent;
  }
</style>
