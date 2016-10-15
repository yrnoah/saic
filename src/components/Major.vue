<template>
	<div class="swiper-slide major">
		<div class="major-container">
			<h3>我们提供以下<br> 四大类职业发展方向：</h3>
			<div class="major-detail">
				<div class="icon-label-market"></div>
        <div>
          <p>市场营销类：</p>
          <p>市场营销、品牌宣传、销售管理</p>
        </div>
			</div>
			<div class="major-detail">
        <div class="icon-label-product"></div>
        <div>
          <p>产品研究类：</p>
          <p>产品规划、售后市场调研</p>
        </div>
      </div>
			<div class="major-detail">
        <div class="icon-label-dollar"></div>
        <div>
          <p>金融财务类：</p>
          <p>财务管理、金融分析、商务投资</p>
        </div>
      </div>
			<div class="major-detail">
        <div class="icon-label-law"></div>
        <div>
          <p>政法类：法务</p>
        </div>
      </div>
		</div>
	</div>
</template>

<style scoped>
	.major {
		position: relative;
		background: url('../images/bg-navy.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.major-container {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		text-align: left;
	}

	h3 {
		margin: 40px 0 30px 0;
		padding: 0;
		color: #FFF;
		font-size: 20px;
		text-align: left;
		display: inline-block;
		font-weight: 200;
	}

	.major-detail {
		height: 72px;
		border-radius: 5px;
		background-color: #4AC3E2;
		margin-bottom: 25px;
    text-align: left;
	}

	.major-detail:nth-child(3) {
    background-color: #4A90E2;
  }

  .major-detail:nth-child(4) {
    background-color: #D8BC57;
  }

  .major-detail:nth-child(5) {
    background-color: #A764DF;
  }

  .major-detail div {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    margin: 20px 0 0 12px;;
  }

  .major-detail div p {
    color: #FFF;
    font-size: 12px;
    font-weight: 200;
    margin: 0;
  }
</style>
