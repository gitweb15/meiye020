<template>
	<!-- 项目详情1 -->
	<div id="xmxq1">
		<Header title="项目详情"></Header>
		<div id="content">
			<div class="content-div1">
				<van-image width="100%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
			</div>
			<div class="content-div2">
				<van-panel title="项目名称" status="￥99.0">
					<p class="van-panel-p">服务时长：60分钟</p>
					<p class="van-panel-p1">
						项目服务内容简介，最多显示2行，多余省略项目<br />
						服务内容简介，最多显示2行，多余省略
					</p>
				</van-panel>
			</div>
			<div class="content-div3">
				<p>
					<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
				</p>
				<p>
					<span>门店名称</span><br />
					<span>守时5.0</span>
					<span>专业5.0</span>
					<span>沟通5.0</span>
				</p>
			</div>
			<div class="content-div4">
				<van-button type="default" block @click="Click">立即预约</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'XiangMuXiangQing1',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/yuyuexiadanfist3');
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
	}

	.content-div1 {
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.van-panel-p {
		font-size: 13px;
		margin-left: 16px;
	}

	.van-panel-p1 {
		font-size: 13px;
		margin-left: 16px;
		margin-top: 10px;
		border-bottom: 1px solid #e4e4e4;
		padding-bottom: 20px;
	}

	.van-cell:not(:last-child)::after {
		border: 0px;
	}

	.content-div3 {
		background-color: #ffffff;
		padding-left: 15px;
		padding-top: 10px;
		padding-bottom: 15px;
	}

	.content-div3 p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div3 p:nth-child(2) {
		margin-left: 10px;
		width: 72%;
	}

	.content-div3 p span {
		display: inline-block;
		font-size: 12px;
	}

	.content-div3 p span:nth-child(1) {
		font-size: 14px;
	}

	.content-div3 p span:nth-child(3) {
		margin-top: 20px;
	}

	.content-div3 p span:nth-child(4) {
		margin-left: 10px;
	}

	.content-div3 p span:nth-child(5) {
		margin-left: 10px;
	}

	.content-div4 {
		margin-top: 20px;
	}
</style>
