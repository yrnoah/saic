<template>
	<div class="swiper-slide wx-circles">
		<div class="top-container">
			<div class="this-year">
				<span>2</span>
				<span>0</span>
				<span>2</span>
				<span>2</span>
			</div>
			<div class="red-line"></div>
			<div class="lt-red-line"></div>
			<img src="../images/avatar-user.png" alt="用户" class="avatar-user">
			<p class="username">五年后的我</p>
		</div>
		<div class="message">
			<img src="../images/avatar-1.png" alt="朋友1" class="friend-avatar">
			<div class="message-detail">
				<span class="friend-name">郑宴</span>
				<p class="message-content">手握999k纯金笔都不如最后落笔那一刻的爽快，是时候该轮到我们上场了！</p>
				<img src="../images/pic-1.png" alt="详情1" class="detail-img">
				<p class="pic-name">SAIC MOTOR Middle East FZE</p>
				<div class="action-container">
					<p class="message-time">3分钟前</p>
					<div class="icon-button-action"></div>
				</div>
        <div class="comment-container">
          <div class="follows">
            <div class="icon-heart"></div>
            <p>金纪，翁玉华，Lily，Rebecca，简晰，崔爽文，葛文德，张雅琴</p>
          </div>
          <div class="comments">
            <p>简晰：恭喜郑总！阿联酋最大的经销商都被你们拿下了！</p>
            <p>林晨：干得漂亮！</p>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>
<!-- tofix 超出一屏幕后依旧显示-->
<style scoped>
	.wx-circles {
		position: relative;
    overflow: scroll;
	}

	.top-container {
		background: url('../images/bg-wx-circles.png') no-repeat 100% 100%;
		background-size: cover;
		width: 100%;
		height: 200px;
		position: relative;
		overflow: visible;
		text-align: center;
		margin-bottom: 30px;
	}

	.this-year {
		border: 5px solid #FF626B;
		margin: 0 auto;
		display: inline-block;
		background-color: #002C4D;
		padding: 8px;
		margin-top: 60px;
	}

	.this-year span {
		color: #7897C4;
		margin: 0 1px;
		padding: 0 2px;
		background-color: #FFFDF9;
		font-size: 45px;
		line-height: 50px;
		display: inline-block;
	}

	.red-line {
		width: 90px;
		height: 5px;
		background-color: #FF252B;
		margin: 0 auto;
	}

	.lt-red-line {
		width: 90px;
		height: 10px;
		background-color: #FF626B;
		margin: 0 auto;
	}

	.avatar-user {
		border: 2px solid #FFF;
		position: absolute;
		bottom: -20px;
		right: 10px;
		width: 50px;
		height: 50px;
		display: inline-block;
		vertical-align: top;
	}

	.username {
		color: #FFF;
		font-size: 12px;
		margin: 0;
		position: absolute;
		right: 80px;
		bottom: 8px;
	}

	.message {
		padding: 10px 5px;
	}

	.friend-avatar {
		width: 30px;
		height: 30px;
		display: inline-block;
		vertical-align: top;
		float: left;
	}

	.friend-name {
		color: #576B95;
	}

	.message-detail {
		display: inline-block;
		width: 80%;
		margin: 0 0 0 5px;
	}

	.message-content {
		margin: 0;
	}

	.detail-img {
		max-width: 100%;
		margin: 5px 0;
	}

	.pic-name {
		color: #576B95;
		font-size: 12px;
		margin: 0;
	}

  .action-container {
    position: relative;
  }

	.message-time {
		color: #737373;
		font-size: 12px;
		display: inline-block;
	}

	.icon-button-action {
		position: absolute;
		display: inline-block;
		top: 0;
		right: -20px;
	}

  .comment-container {
    margin: 10px 0;
    padding: 4px 6px;
    background-color: #E1E2DF;
  }
  .icon-heart {
    display: inline-block;
    vertical-align: top;
  }
  .follows p {
    display: inline-block;
    width: 90%;
    color: #576B95;
    font-size: 12px;
  }
</style>
