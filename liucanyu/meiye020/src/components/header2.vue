<template>
	<!-- 标题头部 -->
	<div id="header2">
		<!-- <p class="title">{{title}}</p> -->

		<van-nav-bar class="title" :title="title" />
	</div>
</template>

<script>
	export default {
		name: "Header2",
		// props是子组件访问父组件数据的唯一接口
		props: {
			// 标题
			title: {
				type: String,
				default: '订单'
			}
		}
	}
</script>

<style scoped>
	#header2 {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 46px;
		display: flex;
	}

	.title {
		width: 100%;
		border-width: 0px;
		font-family: 'Helvetica Neue Normal', 'Helvetica Neue';
		font-weight: 400;
		font-style: normal;
		font-size: 21px;
		color: #000000;
		text-align: center;
		/* margin-top: 13px; */

		background: url(../../public/image/u3.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
