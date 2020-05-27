<template>
	<!-- 项目详情3 -->
	<div id="xmxq3">
		<Header title="项目详情"></Header>
		<div id="content">
			<div class="content-div1">
				<van-image width="100%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
			</div>
			<div class="content-div2">
				<van-panel title="项目名称" status="￥99.0">
					<p class="van-panel-p">
						项目服务内容简介，最多显示2行，多余省略项目<br />
						服务内容简介，最多显示2行，多余省略
					</p>
				</van-panel>
			</div>
			<div class="content-div3">
				<van-button type="default" block @click="Click">立即预约</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'XiangMuXiangQing3',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/YuYueXiaDan3');
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
		padding-bottom: 20px;
	}

	.van-cell:not(:last-child)::after {
		border: 0px;
	}

	.content-div3 {
		margin-top: 20px;
	}
</style>
