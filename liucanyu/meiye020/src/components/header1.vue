<template>
	<!-- 首页头部 -->
	<div id="header1">
		<van-nav-bar :title="title" left-arrow class="title">
			<template #left>
				<span style="color: #2087FC;">{{didian}}</span>
				<img src="../../public/image/u7.png" id="u7">
			</template>
			<template #right>
				<span style="color: #2087FC;">客服</span>
			</template>
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
		name: "Header1",
		// props是子组件访问父组件数据的唯一接口
		props: {
			//地点
			didian: {
				type: String,
				default: '广州'
			},
			//标题
			title: {
				type: String,
				default: 'XXXX'
			}
		}
	}
</script>

<style scoped>
	#header1 {
		position: relative;
		width: 100%;
		height: 45px;
		background-color: #f8f8f8;
		border-bottom: 2px #d5d5d5 solid;
	}

	.title {
		width: 100%;
		background-color: #f8f8f8;
		border-bottom: 2px #d5d5d5 solid;
	}

	#u7 {
		width: 16px;
		margin-left: 5px;
	}
</style>
