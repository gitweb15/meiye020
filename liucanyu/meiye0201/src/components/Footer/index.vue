<template>
	<div id="footer">
		<!-- 组件加载路由 -->
		<van-tabbar route>
			<van-tabbar-item replace style="font-size:15px;" to="/">首页</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/dingdan">订单</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/paiban/time1">排班</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/weidenglu">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		// props是子组件访问父组件数据的唯一接口
		props: {},
		data() {
			return {};
		}
	}
</script>

<style scoped>
	#footer {
		width: 100%;
		height: 50px;
		background: white;
		border-top: 1px solid #e4e4e4;
		position: fixed;
		left: 0;
		bottom: 0;
		cursor: pointer;
	}
</style>
