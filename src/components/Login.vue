<template>
	<div class="swiper-slide login">
		<div class="weui-uploader">
			<p>添加照片</p>
      <img v-if="file" :src="file" class="uploadedImg">
			<input id="uploaderInput" class="uploader" type="file" accept="image/*" multiple v-on:change="chooseFileChange($event)" capture/>
		</div>
		<input type="text" placeholder="输入昵称" class="nameInput" v-model="nameInput">
		<button class="submit" @click="submit()">确认</button>
		<button class="skipBtn" v-link="{name: 'recruit'}">跳过次步骤&nbsp;&gt;</button>
	</div>
</template>

<script>
  import { User } from '../utils/utils.js';
  export default {
    data() {
      return {
        $file: null,
        file: null,
        nameInput: null,
      };
    },
    created() {
      this.$file = document.querySelector('input[type="file"]');
    },
    methods: {
      chooseFileChange(e) {
        const url = window.URL || window.webkitURL || window.mozURL;
        const imgfile = e.target.files[0];
        this.file = imgfile && url.createObjectURL(imgfile);
      },
      clearFile() {
        this.$file.value = '';
        this.file = null;
      },
      submit() {
        if (this.nameInput === null) return;
        User.setUser(this.nameInput, this.file);
        this.$router.go({ name: 'recruit' });
      },
    },
  };
</script>

<style scoped>
	.login {
		position: relative;
		background: url('../images/bg-upload.png') no-repeat 100% 100%;
		background-size: cover;
		text-align: center;
	}

	.weui-uploader {
		width: 150px;
		height: 150px;
		border-radius: 75px;
		border: 1px solid #FFF;
		margin: 20% auto 80px auto;
		position: relative;
		line-height: 150px;
		vertical-align: middle;
	}

	.weui-uploader p {
		color: #FFF;
		font-size: 20px;
		font-weight: normal;
		margin: 0;
	}

	.uploader {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		opacity: 0;
		outline: none;
	}

	.nameInput {
		text-align: center;
		color: #FFF;
		background-color: transparent;
		border: 1px solid #FFF;
		border-radius: 26px;
		width: 280px;
		height: 52px;
		font-size: 20px;
		outline: none;
		display: block;
		margin: 0 auto;
    padding: 0;
	}

  Input::placeholder {
    color: #FFF;
    opacity: 0.6;
  }

	.submit {
		width: 280px;
		height: 52px;
		border-radius: 26px;
		background-color: #7ED321;
		border: none;
		color: #FFF;
		font-size: 20px;
		font-weight: normal;
		outline: none;
		display: block;
		margin: 50px auto;
	}

	.skipBtn {
		border: none;
		color: #FFF;
		background-color: transparent;
		padding: 15px 20px;
		position: absolute;
		bottom: 15px;
		right: 0px;
		outline: none;
    font-size: 13px;
	}

  .uploadedImg {
    position: absolute;
		top: 0;
		left: 0;
		width: 150px;
		height: 150px;
    border-radius: 75px;
		z-index: 1;
  }
</style>
