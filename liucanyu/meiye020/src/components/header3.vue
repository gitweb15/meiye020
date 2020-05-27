<template>
	<!-- 添加返回功能头部 -->
	<div id="header3">
		<van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" class="title" />
	</div>
</template>

<script>
	export default {
		name: "Header3",
		// props是子组件访问父组件数据的唯一接口
		props: {
			// 标题
			title: {
				type: String,
				default: '代金券'
			}
		},
		methods: {
			prev() {
				this.$router.go(-1); //返回上一页
				// 前进就是this.$router.go(1)
			},
			//返回上一页
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	#header3 {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 46px;
		display: flex;
		background: url(../../public/image/u3.png) no-repeat;
		background-size: 100% 100%;
	}

	.title {
		width: 100%;
		background: url(../../public/image/u3.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
