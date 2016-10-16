<template>
	<div class="current-year">
		<p>2015</p>
		<div class="this-year">
			<span>2</span>
			<span>0</span>
			<span>1</span>
			<span>6</span>
		</div>
		<div class="red-line"></div>
		<div class="lt-red-line"></div>
    <p>2017</p>
    <p>2018</p>
	</div>
</template>

<style scoped>
	.current-year {
		position: relative;
		text-align: center;
	}

	.this-year {
		border: 5px solid #FF626B;
		margin: 0 auto;
		display: inline-block;
		background-color: #002C4D;
		padding: 8px;
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

  .current-year p{
    color: #7897C4;
    margin: 0;
    font-size: 42px;
    opacity: 0.7;
  }

  .current-year p:first-child {
    margin: 40px auto 10px auto;
    opacity: 0.8;
  }

  .current-year p:last-child {
    opacity: 0.4;
    font-size: 30px;
  }

</style>
