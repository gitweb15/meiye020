<template>
	<div id="center">
		<!-- 头部 -->
		<Header title="我的"></Header>
		<!-- 主体 -->
		<div id="body">
			<div class="dengLu">
				<div class="touxiang zhiti">
					您尚未登录
				</div>
				<div class="name zhiti">
					<router-link to="/dengLu">登录/注册</router-link>
				</div>
			</div>
			<div class="one">
				<van-cell title="资金帐户" is-link url="" class="xian" />
				<van-cell title="认证信息" is-link url="" class="xian" />
				<van-cell title="服务设置" is-link url="" class="xian" />
				<van-cell title="服务地址" is-link url="" />
			</div>
			<div class="two">
				<van-cell title="意见反馈" is-link url="" class="xian" />
				<van-cell title="联系客服" is-link url="" />
			</div>
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
		name: 'weidenglu',
		components: {
			Header,
			Footer
		},
		data() {
			return {}
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
		text-align: center;
		position: relative;
		width: 100%;
		margin: 0px 0px 25px;
		padding-top: 30px;
	}

	.name {
		text-align: center;
		position: relative;
		width: 100%;
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
		padding-bottom: 25px;
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
</style>
