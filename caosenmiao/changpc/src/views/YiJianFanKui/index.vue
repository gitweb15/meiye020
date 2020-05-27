<template>
	<!-- 意见反馈 -->
	<div id="yjfk">
		<Header title="意见反馈"></Header>
		<div id="content">
			<div class="content-div1">
				请描述您宝贵的意见
			</div>
			<div class="content-div2">
				<van-cell-group>
					<van-field class="van-field" />
				</van-cell-group>
			</div>
			<div class="content-div3">
				<van-button type="default" block>提交</van-button>
			</div>
			<div class="content-div4">
				<img src="https://img.yzcdn.cn/vant/logo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'YiJianFanKui',
		components: {
			Header
		}
	}
</script>

<style scoped>
	.content-div1 {
		margin-left: 10px;
		font-size: 14px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.van-field {
		height: 150px;
	}

	.content-div3 {
		margin-top: 20px;
	}

	.content-div4 {
		margin-top: 30px;
	}

	img {
		width: 100%;
	}
</style>
