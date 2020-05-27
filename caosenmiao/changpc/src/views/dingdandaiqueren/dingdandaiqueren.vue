<template>
	<!-- 待确认 -->
	<div id="dqr">
		<Header title="订单详情"></Header>
		<div id="content">
			<div class="content-div1">
				<van-panel title="订单编号：2014121234" status="待确认">
					<p class="van-panel-p1">服务项目：项目名称</p>
					<p class="van-panel-p2">服务时间：2014-12-15 17:30</p>
					<p class="van-panel-p3">服务地点：用户地址/门店地址</p>
					<p class="van-panel-p4">联系电话：13800138000（用户电话）</p>
					<p class="van-panel-p5">下单时间：2014-12-15 17:25:24</p>
					<p class="van-panel-p6">订单金额：128.00</p>
					<p class="van-panel-p7">优惠金额：10.00</p>
					<p class="van-panel-p8">实际支付：118.00</p>
				</van-panel>
			</div>
			<div class="content-div2">
				<van-button type="default" block>取消订单</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DaiQueRen',
		components: {
			Header
		}
	}
</script>

<style scoped>
	.van-cell__title {
		flex: 2;
	}

	.content-div1 {
		margin-top: 6px;
	}

	.van-panel-p1 {
		font-size: 14px;
		margin-left: 16px;
		border-top: 1px solid #e4e4e4;
		padding-top: 15px;
	}

	.van-cell:not(:last-child)::after {
		border: 0px;
	}

	.van-panel-p2 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
	}

	.van-panel-p3 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
	}

	.van-panel-p4 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
	}

	.van-panel-p5 {
		border-top: 1px solid #e4e4e4;
		font-size: 14px;
		margin-left: 16px;
		margin-top: 15px;
		padding-top: 15px;
	}

	.van-panel-p6 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
	}

	.van-panel-p7 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
	}

	.van-panel-p8 {
		font-size: 14px;
		margin-left: 16px;
		margin-top: 10px;
		padding-bottom: 20px;
	}

	.content-div2 {
		margin-top: 30px;
	}

	.content-div3 {
		margin-top: 10px;
	}
</style>
