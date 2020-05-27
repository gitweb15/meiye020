<template>
	<!-- 带有返回更能的头部 -->
	<div id="header1">
		<van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" class="title" />
	</div>
</template>

<script>
	export default {
		name: "Header1",
		// props是子组件访问父组件数据的唯一接口
		props: {
			// 标题
			title: {
				type: String,
				default: '个人资料'
			}
		},
		methods: {
			//返回上一页
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	#header1 {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 46px;
		display: flex;
	}

	.title {
		width: 100%;
		background-color: #f8f8f8;
		border-bottom: 2px #d5d5d5 solid;
	}
</style>
