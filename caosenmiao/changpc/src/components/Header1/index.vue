<template>
	<!-- 头部1 -->
	<div id="tb1">
		<div class="tb-div1">
			<van-nav-bar :title="title"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header1",
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
