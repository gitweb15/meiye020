<template>
	<!-- 门店支付 -->
	<div id="zhifu">
		<Header4 title="预约信息" diandan="日记"></Header4>
		<div class="zhifu">
			<div class="dingdan">
				<div class="one">
					<img src="../../../public/image/u779.png" class="tupian" />
					订单已经受理
				</div>
				<p class="xiangqing">订单详情</p>

				<p class="xiangqing">订单状态：{{queren}}</p>

				<p class="xiangqing">服务时间：{{time}}</p>

				<p class="xiangqing">服务地点：{{didian}}</p>

				<p class="xiangqing">服务项目：{{name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header4 from '../../components/header4.vue';
	export default {
		name: 'meifuZhifu',
		components: {
			Header4
		},
		data() {
			return {
				queren: '待确认', //订单状态
				time: '2014-12-08 15:00', //服务时间
				didian: '汇侨路10号212A', //服务地点
				name: '美容美体' //服务项目
			}
		}
	}
</script>

<style scoped>
	.zhifu {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		/* padding-top: 3px; */

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	.dingdan {
		position: relative;
		width: 100%;
		height: 290px;
		background-color: #fff;
	}

	.tupian {
		width: 22px;
		height: 22px;
		margin: 0px 22px 0px 16px;
		position: relative;
		top: 6px;
	}

	.one {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		margin: 0px 0px 28px 0px;
		padding-top: 40px;
	}

	.xiangqing {
		margin-bottom: 20px;
		margin-left: 18px;
	}
</style>
