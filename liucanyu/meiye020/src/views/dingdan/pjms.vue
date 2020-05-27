<template>
	<!-- 评价描述 -->
	<div id="pjms">
		<!-- 头部 -->
		<Header3 title="日记详情"></Header3>
		<div class="pjms">
			<div class="center">
				<p>评价描述</p>
				<textarea class="pinglun">

				</textarea>
				<!-- 评分 -->
				<p class="pp"><span class="timu">专业</span> <span class="xing">
						<van-rate v-model="value" color="#1076ff" /></span></p>
				<p class="pp"><span class="timu">态度</span> <span class="xing">
						<van-rate v-model="value1" color="#1076ff" /></span></p>
				<p class="pp"><span class="timu">守时</span> <span class="xing">
						<van-rate v-model="value2" color="#1076ff" /></span></p>
			</div>
			<van-button type="default" class="anniu" is-link url="/wancheng">添加评价</van-button>

			<!-- 			<img src="../../../public/image/u200.png"><img src="../../../public/image/u200.png"><img
					 src="../../../public/image/u200.png"><img src="../../../public/image/u200.png"><img src="../../../public/image/u200.png"> -->

		</div>
	</div>
</template>
<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'pjms',
		components: {
			Header3
		},
		data() {
			return {
				value: 5, //五星好评
				value1: 5,
				value2: 5
			};
		},
	}
</script>

<style scoped>
	.pjms {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 1px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
	}

	.center {
		width: 100%;
		height: 268px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 15px 10px;
		margin-bottom: 10px;
	}

	.pinglun {
		width: 100%;
		height: 99px;
		margin: 13px 0px 18px 0px;
	}

	.timu {
		position: relative;
		top: -10px;
	}

	.xing {
		position: relative;
		top: -2px;
		left: 47px;
	}

	.xing img {
		width: 7%;
	}

	.anniu {
		width: 100%;
		margin-top: 10px;
		cursor: pointer;
	}

	.pp {
		padding-bottom: 10px;
	}
</style>
