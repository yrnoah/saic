<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<style>
	html {
		height: 100%;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
    font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', 'Arial', sans-serif;
    font-size: 12px;
	}

  #app {
    flex: 1;
    height: 100%;
    width: 100%;
		align-items: center;
		justify-content: center;
  }
</style>
