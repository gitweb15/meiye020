<template>
	<!-- 找回密码1 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<p class="biaoti">找回密码</p>
			<div style="margin-left: 270px;">
				<p class="zhiti" style="margin-bottom: 24px;">请填写您的绑定邮箱</p>
				<el-input v-model="input" style="width: 340px;margin-bottom: 40px;"></el-input>
				<p>
					<router-link tag="el-button" to="/zhaomima1" size="mini" class="anniu zhiti">下一步</router-link>
					<router-link tag="el-button" to="/" size="mini" class="anniu zhiti">返回</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../components/Header1/index.vue';
	export default {
		name: 'zhaomima',
		components: {
			Header1
		},
		data() {
			return {
				input: ''//绑定邮箱
			}
		}
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
		width: 1068px;
		height: 715px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
		border: 1px solid #e4e4e4;
	}

	.biaoti {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 20px;
		text-align: left;
	}

	.biaoti {
		margin: 20px 0px 100px 47px;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.anniu {
		padding: 5px 30px;
	}
</style>
