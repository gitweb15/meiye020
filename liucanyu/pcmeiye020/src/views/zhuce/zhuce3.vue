<template>
	<!-- 注册页面4 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<div class="header">
				<div class="header1">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">1.帐号信息</span></p>
					</div>
				</div>
				<div class="header2">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">2.注册成功</span></p>
					</div>
				</div>
				<div class="header3">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">3.基本信息</span></p>
					</div>
				</div>
				<div class="header4">
					<img src="../../assets/u3008.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">4.审核</span></p>
					</div>
				</div>
			</div>
			<!-- 提交成功,返回信息 -->
			<div class="zhongjian">
				<img src="../../assets/u3074.png" style="float: left;">
				<span class="gou">√</span>
				<div class="wenzi">
					<p style="font-size: 15px;margin-bottom: 10px">门店信息提交成功</p>
					<p class="zhiti">我们会在2个工作日内完成审核，如有疑问请咨询400-045-6799</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'zhuce3',
		components: {
			Header1
		},
		data() {
			return {

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
		padding-bottom: 300px;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1024px;
		height: 566px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		overflow: hidden;
	}

	.header {
		width: 100%;
		height: 50px;
		position: relative;
		/* border-bottom: 1px solid #E4E4E4; */
	}

	.header1 {
		display: inline-block;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 10;
	}

	.header2 {
		display: inline-block;
		position: absolute;
		left: 252px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 8;
	}

	.header3 {
		display: inline-block;
		position: absolute;
		right: 244px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 6;
	}

	.header4 {
		display: inline-block;
		position: absolute;
		right: -16px;
		top: 0px;
		width: 276px;
		height: 50px;
		z-index: 4;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.img {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 50px;
	}

	.text {
		position: absolute;
		align-self: center;
		padding: 2px 2px 2px 2px;
		box-sizing: border-box;
		width: 100%;
	}

	.zhongjian {
		position: relative;
		box-sizing: border-box;
		padding: 104px 0px 0px 256px;
	}

	.gou {
		float: left;
		position: relative;
		top: 3px;
		left: -32px;
		color: #fff;
		font-size: 28px;
		font-weight: 700;
	}

	.wenzi {
		margin-left: 18px;
		float: left;
		display: inline-block;
	}
</style>
