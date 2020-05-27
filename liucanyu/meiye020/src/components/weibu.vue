<template>
	<!-- 尾部 -->
	<div id="footer">
		<!-- <ul id="list">
			<router-link tag="li" to="/" exact>
				<p>美吧</p>
			</router-link>
			<router-link tag="li" to="/dingdan0" exact>
				<p>日记</p>
			</router-link>
			<router-link tag="li" to="/faxian" exact>
				<p>发现</p>
			</router-link>
			<router-link tag="li" to="/wode" exact>
				<p>我的</p>
			</router-link>
		</ul> -->
		
		<!-- 组件加载路由 -->
		<van-tabbar route>
			<van-tabbar-item replace style="font-size:15px;" to="/">美吧</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/dingdan0">日记</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/faxian">发现</van-tabbar-item>
			<van-tabbar-item replace style="font-size:15px;" to="/wode">我的</van-tabbar-item>
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
	}

	#list {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}

	#list li {
		cursor: pointer;
		float: left;
		width: 23.7%;
		border: 2px #fff solid;
	}

	#list li:active {
		border: 2px #387edd solid;
	}

	#list li p {
		text-align: center;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		line-height: 50px;
		text-transform: none;
	}

	/* 当router-link被点击时候的样式 */
	.router-link-active {
		height: 50px;
		background: url(../../public/image/u17.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
