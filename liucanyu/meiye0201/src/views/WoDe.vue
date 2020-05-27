<template>
	<div id="center">
		<!-- 头部 -->
		<Header title="我的"></Header>
		<!-- 主体 -->
		<div id="body">
			<router-link class="dengLu" tag="div" to="/nicheng">
				<div class="touxiang zhiti">
					<img src="../assets/touxiang.png" width="100%" style="border-radius: 50%;">
				</div>
				<div class="name zhiti">
					{{haoma}}
				</div>
			</router-link>
			<div class="one">
				<van-cell title="资金帐户" is-link url="/zijiguanli" class="xian" />
				<van-cell title="认证信息" is-link url="/renzheng" value="未认证" class="xian" />
				<van-cell title="服务设置" is-link url="/fuwushezhi" class="xian" />
				<van-cell title="服务地址" is-link url="/fuwudizhi" />
			</div>
			<div class="two">
				<van-cell title="意见反馈" is-link url="/yijian" class="xian" />
				<van-cell title="联系客服" is-link url="" />
			</div>
			<!-- <div class="zhuxiao">
				注销
			</div> -->
			<van-button type="primary" size="large" style="background-color: #fff;color: #333333; border: 1px solid #fff;" url="/dengLu">注销</van-button>
		</div>
		<!-- 尾部 -->
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Footer from '../components/Footer/index.vue';
	export default {
		name: 'wode',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				haoma: '13800138000', //账号
			}
		}
	}
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
		background-color: #e5e5e5;
		padding-bottom: 100px;
	}

	#body::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.zhiti1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
	}

	.dengLu {
		background-color: #fff;
		width: 100%;
		height: 129px;
		margin: 1px 0px 10px 0px;
		position: relative;
	}

	.touxiang {
		margin: 0px auto;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 1px #f0f0f0 solid;
		position: relative;
		top: 14px;
	}

	.name {
		margin: 0px auto;
		width: 83px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		position: relative;
		top: 29px;
		left: 2px;
	}

	.name a {
		color: #122dd6;
		cursor: pointer;
	}

	.one {
		position: relative;
		padding-bottom: 8px;
	}

	.two {
		position: relative;
		padding-bottom: 15px;
	}

	.one::after {
		display: block;
		clear: both;
		content: '';
	}

	.two::after {
		display: block;
		clear: both;
		content: '';
	}

	.xian {
		border-bottom: 1px solid #e3e3e3;
	}

	.zhuxiao {
		position: relative;
		width: 100%;
		height: 40px;
		background-color: #fff;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		text-align: center;
		line-height: 42px;
		cursor: pointer;
	}
</style>
