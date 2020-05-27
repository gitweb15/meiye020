<template>
	<!--售后描述 -->
	<div id="sqshouhou">
		<!-- 头部 -->
		<Header3 title="日记详情"></Header3>
		<div class="sqshouhou">
			<p class="miaoshu">售后描述</p>
			<textarea placeholder="请填写您的申请描述" class="yijian"></textarea>
			<van-button type="default" class="anniu" is-link url="/shjilu">我要退款</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'sqshouhou',
		components: {
			Header3
		}
	}
</script>

<style scoped>
	.sqshouhou {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 5px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
	}

	.anniu {
		width: 100%;
		margin-top: 20px;
		cursor: pointer;
	}

	.miaoshu {
		margin: 6px 0px 8px 20px;
	}

	.yijian {
	    width: 95%;
	    height: 165px;
	    margin: 0px auto;
	    display: block;
	}
</style>
