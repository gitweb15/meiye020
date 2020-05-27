<template>
	<!-- 头部 -->
	<div id="tb">
		<div class="tb-div1">
			<van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			//返回上一级路由
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.tb-div1 {
		border-bottom: 1px solid #d5d5d5;
		background-color: #f8f8f8;
	}

	.van-nav-bar {
		background-color: #f8f8f8;
	}
</style>
