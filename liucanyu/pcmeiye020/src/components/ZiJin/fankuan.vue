<template>
	<!-- 资金详情-返款 -->
	<div class="center">
		<p class="biaoti zhiti1"><span style="margin-right: 25px;"><img src="../../assets/u2824.png" class="img"></span>已返款</p>
		<div style="margin-bottom: 30px;">
			<p class="neirong zhiti"><span class="neirong-zuo">订单金额</span><span class="neirong-you zhiti1">{{dingdanjine}}</span></p>
			<p class="neirong zhiti"><span class="neirong-zuo">收入金额</span><span class="neirong-you">{{shourujine}}</span></p>
			<p class="neirong zhiti"><span class="neirong-zuo">佣金费用</span><span class="neirong-you">{{guyong}}</span></p>
		</div>

		<div style="margin-bottom: 30px;">
			<p class="neirong1 zhiti"><span class="neirong1-zuo">创建时间：</span><span class="neirong1-you">{{time1}}</span></p>
			<p class="neirong1 zhiti"><span class="neirong1-zuo">结算时间：</span><span class="neirong1-you">{{time2}}</span></p>
			<p class="neirong1 zhiti"><span class="neirong1-zuo">返款时间：</span><span class="neirong1-you">{{time3}}</span></p>
		</div>

		<div style="margin-bottom: 30px;">
			<p class="neirong2 zhiti"><span class="neirong2-zuo">订单编号：</span><span class="neirong2-you">{{bianhao}}</span></p>
			<p class="neirong2 zhiti"><span class="neirong2-zuo">交易流水：</span><span class="neirong2-you">{{jiaoyi}}</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fankuan',
		data() {
			return {
				dingdanjine: '115.2', //订单金额
				shourujine: '128.0', //收入金额
				guyong: '12.8', //佣金费用
				time1: '2014-12-05 17:12:35', //创建时间
				time2: '2014-12-05 17:12:35', //结算时间
				bianhao: '201412041234', //订单编号
				jiaoyi: '201412041234', //交易流水
				time3: '2014-12-05 17:12:35' //返款时间
			}
		}
	}
</script>

<style scoped>
	.center {
		width: 100%;
	}

	.biaoti {
		margin: 20px 0px 30px;
	}

	.zhiti1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 24px;
		text-align: left;
		color: #333;
	}

	.img {
		width: 22px;
		height: 22px;
		position: relative;
		top: 3px;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.neirong {
		margin-bottom: 20px;
	}

	.neirong-zuo {
		display: inline-block;
		width: 90px;
	}

	.neirong1 {
		margin-bottom: 20px;
	}

	.neirong1-zuo {
		display: inline-block;
		width: 65px;
	}

	.neirong2 {
		margin-bottom: 20px;
	}

	.neirong2-zuo {
		display: inline-block;
		width: 65px;
	}
</style>
