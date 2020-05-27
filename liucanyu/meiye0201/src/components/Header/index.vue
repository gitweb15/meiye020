<template>
	<!-- 只有标题的头部 -->
	<div id="Header">
		<van-nav-bar class="title" :title="title" />
	</div>
</template>

<script>
	export default {
		name: "Header",
		// props是子组件访问父组件数据的唯一接口
		props: {
			// 标题
			title: {
				type: String,
				default: '美容师'
			}
		}
	}
</script>

<style scoped>
	#header {
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
