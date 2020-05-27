<template>
	<!-- 未登录订单页面 -->
	<div id="dingdan">
		<!-- 头部 -->
		<Header2 title="订单"></Header2>
		<div class="dingdan0">
			<div class="tishi">
				请登陆后查看您的美丽日记
			</div>
			<router-link tag="div" to="/dengLu" class="dengZu">
				登录/注册
			</router-link>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header2 from '../components/header2.vue';
	import Footer from '../components/weibu.vue';
	export default {
		name: 'dingdan0',
		components: {
			Header2,
			Footer
		}
	}
</script>

<style scoped>
	#dingdan {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
	}

	.dingdan0 {
		position: relative;
		width: 100%;
		height: 379px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 1px solid rgba(228, 228, 228, 1);
	}

	.tishi,
	.dengZu {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		width: 100%;
		text-align: center;
	}

	.tishi {
		margin-top: 95px;
	}

	.dengZu {
		cursor: pointer;
		margin-top: 25px;
	}
</style>
