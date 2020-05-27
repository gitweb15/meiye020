<template>
	<!-- 资金管理详情页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="center">
					<div class="center-zuo">
						<!-- 二级路由渲染 -->
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</div>
					<!-- 点击切换二级路由 -->
					<div class="center-you">
						<router-link tag="el-button" size="medium" class="anniu" to="/zijinxiangqing/jiesuan">待结算</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/zijinxiangqing/daifankuan">待返款</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/zijinxiangqing/fankuan">已返款</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/zijinxiangqing/daituikuan">待退款</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/zijinxiangqing/tuikuan">已退款</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'zijinxiangqing',
		components: {
			Header,
			Aside
		},
		// methods: {
		// 	click: function() {
		// 		this.$router.push('/zijinxiangqing/jiesuan')
		// 	},
		// 	click1: function() {
		// 		this.$router.push('/zijinxiangqing/daifankuan')
		// 	},
		// 	click2: function() {
		// 		this.$router.push('/zijinxiangqing/fankuan')
		// 	},
		// 	click3: function() {
		// 		this.$router.push('/zijinxiangqing/daituikuan')
		// 	},
		// 	click4: function() {
		// 		this.$router.push('/zijinxiangqing/tuikuan')
		// 	}
		// }
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1058px;
		/* height: 715px; */
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.content:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong {
		display: inline-block;
		float: left;
		margin-top: 5px;
		width: 895px;
		/* height: 710px; */
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.neirong:after {
		display: block;
		clear: both;
		content: '';
	}

	.center {
		width: 879px;
		display: inline-block;
		float: right;
		position: relative;
	}

	.center:after {
		display: block;
		clear: both;
		content: '';
	}

	.center-zuo {
		display: inline-block;
		width: 45%;
		height: 705px;
		float: left;
	}

	.center-you {
		display: inline-block;
		width: 50%;
		height: 705px;
		float: left;
	}

	.anniu {
		display: block;
		margin-left: 0px;
		margin-bottom: 25px;
		padding: 7px 30px;
	}

	.anniu:first-child {
		margin-top: 40px;
	}
</style>
