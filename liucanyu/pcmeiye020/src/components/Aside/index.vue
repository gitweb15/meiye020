<template>
	<!-- 侧边栏 -->
	<div id="aside">
		<!-- 循环遍历侧边栏的数据 -->
		<el-menu :default-active="this.$route.path" router mode="horizontal">
			<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
				<i v-bind:class="item.icon"></i>
				<span slot="title"> {{ item.navItem }}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Aside",
		data() {
			return {
				// 侧边栏数据
				navList: [{
						name: '/shouye/quxian1', //跳转路径
						navItem: '首页', //名字
						icon: 'el-icon-s-goods' //icon图标
					},
					{
						name: '/dingdan',
						navItem: '订单管理',
						icon: 'el-icon-s-order'
					},
					{
						name: '/paibang',
						navItem: '排班管理',
						icon: 'el-icon-date'
					},
					{
						name: '/fuwu',
						navItem: '服务设置',
						icon: 'el-icon-s-tools'
					},
					{
						name: '/zijin',
						navItem: '资金管理',
						icon: 'el-icon-s-cooperation'
					},
					{
						name: '/mendian',
						navItem: '门店信息',
						icon: 'el-icon-s-operation'
					}
				]
			}
		}
	}
</script>

<style scoped>
	#aside {
		width: 160px;
		position: relative;
		color: #666666;
		display: inline-block;
		float: left;
	}

	/* 当router-link被点击时候的样式 */
	.router-link-active {
		color: #fff;
		background-color: #fbc15e;
	}


	.el-menu {
		border-right: solid 0px #e6e6e6;
	}

	ul {
		border-bottom: solid 0px #e6e6e6;
	}

	li {
		width: 100%;
	}


	/* 修改element框架的样式 */
	.el-menu.el-menu--horizontal {
		border-bottom: solid 0px #e6e6e6;
	}

	.el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: 2px solid #fbc15e;
		color: #fff;
		background-color: #fbc15e;
	}

	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
		background-color: #fbc15e;
		color: #fff;
	}
</style>
