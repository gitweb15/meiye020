<template>
	<!-- 待评价 -->
	<div id="dpj">
		<Header title="订单详情"></Header>
		<div id="content">
			<div class="content-div1">
				<van-panel title="订单编号：2014121234" status="待评价">
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
				<p>
					<van-image width="3.5rem" height="3.5rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
				</p>
				<p>
					<span>美体师姓名</span><br />
					<span>守时:5.0</span>
					<span>专业:5.0</span>
					<span>沟通:5.0</span>
				</p>
				<p>
					<van-icon name="arrow" color="#999999" />
				</p>
			</div>
			<div class="content-div3">
				<van-button type="default" block @click="Click">评价</van-button>
			</div>
			<div class="content-div4">
				<van-button type="default" block>申请退款</van-button>
			</div>
			<div class="content-div5">
				<van-button type="default" block>联系美体师</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DaiPingJia',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/PingJiaDingDan');
			}
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
		border-bottom: 1px solid #e4e4e4;
	}

	.content-div2 {
		background-color: #ffffff;
		padding-left: 15px;
		padding-top: 15px;
		padding-bottom: 20px;
	}

	.content-div3 {
		margin-top: 20px;
	}

	.content-div4 {
		margin-top: 10px;
	}

	.content-div5 {
		margin-top: 10px;
	}

	.content-div2 p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div2 p:nth-child(2) {
		margin-left: 10px;
	}

	.content-div2 p:nth-child(3) {
		float: right;
		padding-top: 20px;
		margin-right: 20px;
	}

	.content-div2 p span {
		font-size: 14px;
		display: inline-block;
	}

	.content-div2 p span:nth-child(1) {
		margin-bottom: 15px;
	}

	.content-div2 p span:nth-child(3) {
		font-size: 12px;
	}

	.content-div2 p span:nth-child(4) {
		font-size: 12px;
		margin-left: 8px;
	}

	.content-div2 p span:nth-child(5) {
		font-size: 12px;
		margin-left: 8px;
	}
</style>
