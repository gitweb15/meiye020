<template>
	<!-- 订单 -->
	<div id="dd">
		<Header1 title="订单"></Header1>
		<div id="content">
			<div class="content-div1">
				<router-link to="/dingdandaizhifu">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412151234" desc="服务项目：美体" status="待支付">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span1">立即支付</span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
			<div class="content-div2">
				<router-link to="/dingdandaiqueren">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412081234" desc="服务时间：2014-12-10 17:00" status="待确认">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span1">取消订单</span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
			<div class="content-div3">
				<router-link to="/dingdandaifuwu">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412081234" desc="服务时间：2014-12-10 17:00" status="待服务">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span4"><span class="van-panel-p3-span2">美体师信息</span><span
									 class="van-panel-p3-span3">取消订单</span></span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
			<div class="content-div4">
				<router-link to="/dingdanpingjia">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412081234" desc="服务时间：2014-12-10 17:00" status="待评价">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span4"><span class="van-panel-p3-span2">申请退款</span><span class="van-panel-p3-span3">评价</span></span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
			<div class="content-div5">
				<router-link to="/dingdanyiweancheng">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412081234" desc="服务时间：2014-12-10 17:00" status="已完成">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span4"><span class="van-panel-p3-span2">申请售后</span><span class="van-panel-p3-span3">去评价</span></span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
			<div class="content-div6">
				<router-link to="/dingdanyiquxiao">
					<a href="###" class="content-div-a">
						<van-panel title="订单编号：201412081234" desc="服务时间：2014-12-10 17:00" status="已取消">
							<p class="van-panel-p1">服务时间：2014-12-25 17:00</p>
							<p class="van-panel-p2">服务地点：白云区汇桥路10号212A</p>
							<p class="van-panel-p3"><span class="van-panel-p3-span1">退款处理中</span></p>
						</van-panel>
					</a>
				</router-link>
			</div>
		</div>
		<BiaoQianYe></BiaoQianYe>
	</div>
</template>

<script>
	//引入组件
	import Header1 from '../../components/Header1';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'DingDan',
		components: {
			Header1,
			BiaoQianYe
		}
	}
</script>

<style scoped>
	.van-cell__title {
		flex: 2;
	}

	.van-cell:not(:last-child)::after {
		border: 0px;
	}

	.van-cell {
		padding-bottom: 10px;
	}

	.van-cell__label {
		margin-top: 10px;
	}

	.van-cell__label {
		font-size: 14px;
		color: #000000;
	}

	.van-panel-p1 {
		font-size: 14px;
		margin-left: 16px;
		padding-bottom: 12px;
		padding-top: 2px;
		color: #000000;
	}

	.van-panel-p2 {
		font-size: 14px;
		margin-left: 16px;
		border-bottom: 1px solid #e4e4e4;
		padding-bottom: 10px;
		color: #000000;
	}

	.van-panel-p3 {
		padding-bottom: 40px;
	}

	.van-panel-p3-span1 {
		font-size: 14px;
		float: right;
		color: #9900ff;
		display: inline-block;
		margin-top: 10px;
		margin-right: 14px;
	}

	.van-panel-p3-span2 {
		font-size: 14px;
		display: inline-block;
		margin-top: 10px;
		padding-right: 20px;
	}

	.van-panel-p3-span3 {
		font-size: 14px;
		color: #9900ff;
		display: inline-block;
		margin-top: 10px;
		margin-right: 14px;
		border-left: 1px solid #e4e4e4;
		padding-left: 20px;
	}

	.van-panel-p3-span4 {
		font-size: 14px;
		float: right;
	}

	.content-div1 {
		margin-top: 6px;
	}

	.content-div2 {
		margin-top: 8px;
	}

	.content-div3 {
		margin-top: 8px;
	}

	.content-div4 {
		margin-top: 8px;
	}

	.content-div5 {
		margin-top: 8px;
	}

	.content-div6 {
		margin-top: 8px;
	}

	.content-div-a {
		display: block;
	}
</style>
