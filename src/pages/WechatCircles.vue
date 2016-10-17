<template>
	<div class="wx-circles">
		<div class="top-container">
			<div class="this-year">
				<span>2</span>
				<span>0</span>
				<span>2</span>
				<span>2</span>
			</div>
			<div class="red-line"></div>
			<div class="lt-red-line"></div>
			<img v-if="user.avatar" :src='user.avatar' class="avatar-user">
			<img v-else src='../images/avatar-user.png' class="avatar-user">
			<p class="username">{{ user.name }}</p>
		</div>
		<div class="message" v-for="message in messages" track-by="$index">
			<img v-if="message.index === 1" class="friend-avatar" src='../images/avatar-1.png'>
			<img v-if="message.index === 2" class="friend-avatar" src='../images/avatar-2.png'>
			<img v-if="message.index === 3" class="friend-avatar" src='../images/avatar-3.png'>
			<img v-if="message.index === 4" class="friend-avatar" src='../images/avatar-4.png'>
			<img v-if="message.index === 5" class="friend-avatar" src='../images/avatar-5.png'>
			<img v-if="message.index === 6" class="friend-avatar" src='../images/avatar-6.png'>
			<div class="message-detail">
				<span class="friend-name">{{ message.username }}</span>
				<p class="message-content">{{ message.content }}</p>
				<img v-if="message.index === 1" src="../images/pic-1.png" alt="详情1" class="detail-img">
				<img v-if="message.index === 2" src="../images/pic-2.png" alt="详情2" class="detail-img">
				<img v-if="message.index === 3" src="../images/pic-3.png" alt="详情3" class="detail-img">
				<img v-if="message.index === 4" src="../images/pic-4.png" alt="详情4" class="detail-img">
				<img v-if="message.index === 5" src="../images/pic-5.png" alt="详情5" class="detail-img">
				<img v-if="message.index === 6" src="../images/pic-6.png" alt="详情6" class="detail-img">
				<p class="pic-location">{{ message.location }}</p>
				<div class="action-container">
					<p class="message-time">{{ message.time }}</p>
					<div class="icon-button-action" @click="showBtns($index)">
						<div class="action-btns" v-bind:style="visible($index)">
							<button @click="follow($index)"><div class="icon-heart-white btn-icon"></div>赞</button>
							<button>
                <input type="text" class="commentInput" v-model="commentInput" @keyup.enter="submit">
                <div class="icon-comment btn-icon"></div>评论
              </button>
						</div>
					</div>
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
        user: { name: '五年后的我', avatar: null },
        messages: [],
        activeBtnId: null,
        commentInput: null,
        shouldHideBtn: false,
        isWxCircles: true,
      };
    },
    ready() {
      this.messages = messageData;
      this.isWxCircles = true;
      window.addEventListener('click', () => {
        if (!this.shouldHideBtn) return;
        const clearActionBtn = setTimeout(() => {
          this.activeBtnId = null;
          this.shouldHideBtn = false;
          clearTimeout(clearActionBtn);
          window.removeEventListener('click', () => { console.log('removed'); });
        }, 500);
      });
      window.addEventListener('scroll', () => {
        if (!this.isWxCircles) return;
        this.activeBtnId = null;
        if (window.scrollY >= document.body.scrollHeight - document.body.clientHeight - 10) {
          const goRecruit = setTimeout(() => {
            this.$router.go({ name: 'recruit' });
            this.isWxCircles = false;
            clearTimeout(goRecruit);
            window.removeEventListener('scroll', () => { console.log('removed'); });
          }, 3000);
        }
      });
    },
    methods: {
      showBtns(index) {
        this.activeBtnId = index;
      },
      visible(id) {
        let btnClass;
        if (id !== this.activeBtnId) {
          btnClass = { display: 'none' };
        } else {
          btnClass = { display: '' };
        }
        return btnClass;
      },
      follow(index) {
        // 查找是否包含自己
        this.shouldHideBtn = true;
        this.messages[index].follows = [...this.messages[index].follows, '我'];
      },
      submit() {
        this.messages[this.activeBtnId].comments = [...this.messages[this.activeBtnId].comments, {
          user: '我', replyTo: null, detail: this.commentInput,
        }];
        this.activeBtnId = null;
        this.commentInput = null;
      },
    },
  };
</script>

<style scoped>
	.wx-circles {
		position: relative;
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
		background-color: transparent;
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
		overflow: visible;
	}

	.action-btns {
		position: absolute;
		left: -165px;
		top: -10px;
		border-radius: 5px;
		background-color: #353a3d;
		z-index: 2;
		display: visible;
	}

	.activeBtn {
		display: visible;
	}

	.action-btns button {
		display: inline-block;
		float: left;
		width: 80px;
		height: 40px;
		color: #FFF;
		outline: none;
		border: none;
		background-color: transparent;
		vertical-align: middle;
		font-size: 14px;
		font-weight: 200;
		position: relative;
	}

	.commentInput {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		z-index: 1;
		border: none;
		outline: none;
		color: transparent;
	}

	.btn-icon {
		display: inline-block;
		vertical-align: top;
		margin-right: 4px;
	}

	.comment-container {
		margin: 10px 0;
		padding: 4px 6px;
		background-color: #F3F3F5;
		position: relative;
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
		position: relative;
		top: 4px;
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

	.comment-container:before {
		content: '';
		display: block;
		position: absolute;
		left: 4;
		top: -8px;
		width: 0;
		height: 0;
		border-right: 6px solid transparent;
		border-left: 6px solid transparent;
		border-bottom: 8px solid #F3F3F5;
	}
</style>
