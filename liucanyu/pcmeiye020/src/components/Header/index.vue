<template>
	<!-- 已注册头部 -->
	<div id="header">
		<div class="zuo">
			<router-link tag="span" to="/shouye" style="cursor:pointer;">
				<span class="logo zhiti">logo</span>
				<span class="o2o zhiti">美容O2O</span>
			</router-link>
			<img src="../../assets/u2045.png" class="xian" />
			<span class="timu zhiti">门店管理平台</span>
		</div>
		<div class="you">
			<img src="../../assets/u2024.png" style="display: inline-block;margin-top: 10px;" />
			<div class="you-div">
				<span class="renzeng zhiti">已认证</span>
				<span class="zhiti" style="font-size: 14px;">{{name}}</span>
			</div>
			<img src="../../assets/u2045.png" class="xian1" />
			<!-- 注销，退回注册登录的页面 -->
			<router-link to="/" class="zhuxiao zhiti">注销</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				name: '门店名称'
			}
		}
	}
</script>

<style scoped>
	#header {
		/* width: 1098px; */
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
		margin-left: 55px;
	}

	.you {
		display: inline-block;
		float: right;
		height: 100%;
		position: relative;
		width: 240px;
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

	.you-div {
		display: inline-block;
		margin-left: 10px;
	}

	.renzeng {
		font-size: 12px;
		color: #FFFFFF;
		display: block;
		width: 50px;
		height: 20px;
		background-color: rgba(251, 193, 94, 1);
		text-align: center;
		line-height: 22px;
		margin-bottom: 12px;
	}

	.xian1 {
		width: 1px;
		height: 44px;
		margin: 0px 13px 0px 24px;
	}

	.zhuxiao {
		cursor: pointer;
	}
</style>
