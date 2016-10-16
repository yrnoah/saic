<template>
	<div class="wx-circles scroll">
		<div class="top-container">
			<div class="this-year">
				<span>2</span>
				<span>0</span>
				<span>2</span>
				<span>2</span>
			</div>
			<div class="red-line"></div>
			<div class="lt-red-line"></div>
			<img :src='user.avatar' alt="用户" class="avatar-user">
			<p class="username">{{ user.name }}</p>
		</div>
		<div class="message" v-for="message in messages">
			<img alt="朋友1" class="friend-avatar" :src='message.avatar'>
			<div class="message-detail">
				<span class="friend-name">{{ message.username }}</span>
				<p class="message-content">{{ message.content }}</p>
				<img src="../images/pic-1.png" alt="详情1" class="detail-img">
				<p class="pic-location">{{ message.location }}</p>
				<div class="action-container">
					<p class="message-time">{{ message.time }}</p>
					<div class="icon-button-action"></div>
				</div>
				<div class="comment-container">
					<div class="follows">
						<div class="icon-heart"></div>
						<p>
							<span v-for='follow in message.follows'>{{ follow }}，</span>
						</p>
					</div>
					<div class="comments" v-if='message.comments'>
						<p v-for='comment in message.comments'>
							<span>{{ comment.user }}</span>
              <span v-if='comment.replyTo' class="normal-text">回复</span>
              <span>{{ comment.replyTo }}</span>：{{ comment.detail }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import messageData from '../utils/mock-data.js';
  export default {
    data() {
      return {
        user: { name: '五年后的我', avarar: '../images/avatar-user.png' },
        messages: [],
      };
    },
    ready() {
      this.messages = messageData;
      window.addEventListener('scroll', () => {
        if (window.scrollY >= document.body.scrollHeight - document.body.clientHeight) {
          setTimeout(() => {
            this.$router.go({ name: 'recruit' });
          }, 4000);
        }
      });
    },
  };
</script>

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
		border-bottom: 1px solid #E1E2DF;
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

	.pic-location {
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
		background-color: #F3F3F5;
	}

  .comments {
    border-top: 1px solid #E1E2DF;
    padding: 2px 0;
  }

	.comments span {
		color: #576B95;
		font-weight: bold;
	}

	.icon-heart {
		display: inline-block;
		vertical-align: top;
	}

  .follows {
    padding-bottom: 2px;
  }

	.follows p {
		display: inline-block;
		width: 90%;
		color: #576B95;
		font-size: 12px;
	}
  .comments .normal-text {
    color: #000;
    font-size: 12px;
    font-weight: normal;
  }
</style>
