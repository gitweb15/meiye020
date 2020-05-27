<template>
	<!-- 未注册登录 -->
	<div id="header">
		<div class="zuo">
			<router-link tag="span" to="/" style="cursor:pointer;">
				<span class="logo zhiti">logo</span>
				<span class="o2o zhiti">美容O2O</span>
			</router-link>
			<img src="../../assets/u2045.png" class="xian" />
			<span class="timu zhiti">门店管理平台</span>
		</div>
		
		<!-- 点击跳转到注册页面 -->
		<div class="you zhiti" style="font-size: 14px;">
			第一次使用？<router-link to="/zhuce">立即注册</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header1"
	}
</script>

<style scoped>
	#header {
		width: 100%;
		height: 70px;
		background-color: #fff;
		margin: 0px auto;
		position: relative;
		margin-bottom: 14px;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 13px;
		color: #333333;
	}

	.zuo {
		display: inline-block;
		float: left;
		height: 100%;
		position: relative;
		margin-left: 48px;
	}

	.you {
		display: inline-block;
		float: right;
		position: relative;
		top: 33px;
		right: 130px;
	}

	.logo {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-size: 32px;
		margin: 21px 0px 0px 21px;
	}

	.o2o {
		font-size: 18px;
		color: #666666;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		margin-left: 10px;

	}

	.timu {
		font-size: 18px;
		color: #666666;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		margin-left: 28px;
	}

	.xian {
		width: 2px;
		height: 44px;
		position: relative;
		top: 12px;
		left: 14px;
	}

	a {
		color: rgb(0, 0, 255);
	}

	a:hover {
		text-decoration: underline;
	}
</style>
