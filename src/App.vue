<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<style>
	html {
		height: 100%;
		min-height: 480px;
		max-width: 750px;
		margin: 0;
    background-color: #4EDEFD;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', 'Arial', sans-serif;
		font-size: 12px;
		margin: 0;
	}

	p,
	div {
		margin: 0;
	}
</style>
