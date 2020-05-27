<template>
	<!-- 返回日记头部 -->
	<div id="header2">
		<van-nav-bar :title="title" :left-text="diandan" left-arrow class="title" @click-left="onClickLeft" @click-right="onClickRight">
			<template #right>
				<span style="color: #2087FC;">保存</span>
			</template>
		</van-nav-bar>
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
				default: '详细地址'
			},
			//左侧
			diandan: {
				type: String,
				default: '返回'
			}
		},
		methods: {
			//跳转到登录后的页面
			onClickLeft() {
				this.$router.go(-1); //返回上一页
				// 前进就是this.$router.go(1)
			},
			//跳转到登录后的页面
			onClickRight() {
				this.$router.push("/wode");
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
		background-color: #f8f8f8;
		border-bottom: 2px #d5d5d5 solid;
	}
</style>
