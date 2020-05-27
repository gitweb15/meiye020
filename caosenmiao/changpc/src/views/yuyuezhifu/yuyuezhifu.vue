<template>
	<!-- 支付 -->
	<div id="zf">
		<Header3 title="支付订单"></Header3>
		<div id="content">
			<div class="content-div1">
				<p>
					<span><van-icon name="success" color="#1989fa"/></span>
					<span>订单已经受理</span>
				</p>
			</div>
			<div class="content-div2">
				<p>订单详情</p>
				<p>订单状态：待确认</p>
				<p>服务时间：2014-12-08  15:00</p>
				<p>服务地点：汇侨路10号212A</p>
				<p>服务项目：项目名称</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	//引入组件
	import Header3 from '../../components/Header3';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'ZhiFu',
		components: {
			Header3,
			BiaoQianYe
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
		padding-left: 10px;
		padding-top: 40px;
	}
	.content-div1 p span:nth-child(2) {
		margin-left: 20px;
	}
	.content-div2{
		background-color: #ffffff;
		padding-left: 10px;
		padding-bottom: 30px;
	}
	.content-div2 p{
		font-size: 14px;
		padding-top: 15px;
	}
</style>
