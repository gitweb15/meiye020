<template>
	<!-- 权限列表 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<div class="center-zuo">
						<!-- 二级路由渲染 -->
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</div>
					<!-- 点击切换二级路由 -->
					<div class="center-you">
						<router-link tag="el-button" size="medium" class="anniu" to="/xfzzijixq/zhifu">已支付</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/xfzzijixq/daituikuan">待退款</router-link>
						<router-link tag="el-button" size="medium" class="anniu" to="/xfzzijixq/tuikuan">已退款</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	export default {
		name: 'mrszijixq',
		components: {
			Header,
			Aside,
		},
		data() {
			return {

			}
		},
		methods: {

		}

	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 150px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 98%;
		position: relative;
		float: right;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
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
