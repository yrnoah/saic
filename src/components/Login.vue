<template>
	<div class="swiper-slide login">
		<div class="weui-uploader">
			<p>添加照片</p>
      <img :src="file" class="uploadedImg">
			<input id="uploaderInput" class="uploader" type="file" accept="image/*" multiple v-on:change="chooseFileChange($event)" capture/>
		</div>
		<input type="text" placeholder="输入昵称" class="nameInput" v-model="nameInput">
		<button class="submit" @click="submit()">确认</button>
		<button class="skipBtn" v-link="{name: 'years'}">跳过次步骤&nbsp;&gt;</button>
	</div>
</template>

<script>
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
      console.log(this.$file);
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
        console.log(this.nameInput, this.file);
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
		width: 100px;
		height: 100px;
		border-radius: 50px;
		border: 1px solid #FFF;
		margin: 150px auto 80px auto;
		position: relative;
		line-height: 100px;
		vertical-align: middle;
	}

	.weui-uploader p {
		color: #FFF;
		font-size: 14px;
		font-weight: 100;
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
		border-radius: 20px;
		width: 250px;
		height: 40px;
		font-size: 14px;
		outline: none;
		display: block;
		margin: 0 auto;
	}

	.submit {
		width: 250px;
		height: 40px;
		border-radius: 20px;
		background-color: #7ED321;
		border: none;
		color: #FFF;
		font-size: 14px;
		font-weight: 100;
		outline: none;
		display: block;
		margin: 40px auto;
	}

	.skipBtn {
		border: none;
		color: #FFF;
		background-color: transparent;
		padding: 15px 20px;
		position: absolute;
		bottom: 15px;
		right: 5px;
		outline: none;
	}

  .uploadedImg {
    position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
    border-radius: 50px;
		z-index: 1;
  }
</style>
