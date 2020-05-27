<template>
	<!-- 头部3 -->
	<div id="tb3">
		<div class="tb-div1">
			<van-nav-bar :title="title" left-text="订单" left-arrow right-text="客服" @click-left="onClickLeft" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header3",
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			onClickLeft: function() {
				this.$router.push('/DingDan');
			}
		}
	}
</script>

<style scoped>
	.tb-div1 {
		border-bottom: 1px solid #d5d5d5;
	}

	.van-nav-bar {
		background-color: #f8f8f8;
	}
</style>
