<template>
	<!-- 标签页 -->
	<div id="bqy">
		<div class="tb-div1">
			<van-tabbar route>
				<van-tabbar-item replace to="/" icon="wap-home-o">
					美吧
				</van-tabbar-item>
				<van-tabbar-item replace to="/DingDan" icon="shopping-cart-o">
					订单
				</van-tabbar-item>
				<van-tabbar-item replace to="/FaXian" icon="search">
					发现
				</van-tabbar-item>
				<van-tabbar-item replace to="/WoDe" icon="contact">
					我的
				</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BiaoQianYe"
	}
</script>

<style scoped>
	/* .router-link-active {
		color: red;
	} */
</style>
