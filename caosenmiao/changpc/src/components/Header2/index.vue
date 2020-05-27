<template>
	<!-- 头部2 -->
	<div id="tb2">
		<div class="tb-div1">
			<van-nav-bar :title="title" left-text="广东 ﹀" right-text="客服" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header2",
		props: {
			title: {
				type: String,
				default: ''
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
