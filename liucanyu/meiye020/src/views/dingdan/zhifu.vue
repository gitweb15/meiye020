<template>
	<!-- 日记-待支付页面 -->
	<div id="zhifu">
		<!-- 头部 -->
		<Header3 title="日记详情"></Header3>
		<!-- 信息加载 -->
		<div class="zhifu">
			<div class="neirong">
				<p class="one">
					<span class="one-zuo">订单编号：{{bianhao}}</span>
					<span class="one-you">{{dai}}</span>
				</p>
				<div class="two">
					<p>服务项目：{{name}}</p>
					<p>服务时间：{{time}}</p>
					<p>服务地点：{{dizhi}}</p>
					<p>联系电话：{{phone}}（用户电话）</p>
				</div>
				<div class="two">
					<p>下单时间：{{xiadantime}}</p>
					<p>订单金额：{{money}}</p>
					<p>优惠金额：{{youhui}}</p>
					<p>实际支付：{{shiji}}</p>
				</div>
			</div>
			<van-button type="default" class="anniu" is-link url="">立即支付</van-button>
			<van-button type="default" class="anniu" is-link url="">取消订单</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'zhifu',
		components: {
			Header3
		},
		data() {
			return {
				bianhao: '201412081234', //订单编号
				dai: '待支付', //服务状态
				name: '项目名称', //服务项目
				time: '2014-12-15 17:30', //服务时间
				dizhi: '用户地址/门店地址', //服务地点
				phone: '13800138000', //联系电话
				xiadantime: '2014-12-15 17:25:24', //下单时间
				money: '128.00', //订单金额
				youhui: '10.00', //优惠金额
				shiji: '118.00', //实际支付
				tupian: '../img/美容师.76d81d89.jpg', //美体师图片
				xingming: '美体师姓名', //美体师姓名
				pingjia: '守时：5.0 专业5.0 沟通5.0' //评分
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
		padding-top: 5px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	.neirong {
		position: relative;
		width: 100%;
		height: 325px;
		background-color: #fff;
		margin-top: 5px;
		margin-bottom: 10px;
	}

	.one {
		height: 50px;
		border-bottom: 1px solid #e3e3e3;
		width: 95%;
		float: right;
	}

	.one-zuo {
		float: left;
		line-height: 55px;
		height: 100%;
	}

	.one-you {
		float: right;
		line-height: 55px;
		height: 100%;
		margin-right: 10px;
	}

	.two {
		height: 136px;
		border-bottom: 1px solid #e3e3e3;
		width: 95%;
		float: right;
	}

	.two p {
		width: 100%;
		margin: 13px 0px;
	}

	.anniu {
		width: 100%;
		margin-top: 10px;
		cursor: pointer;
	}
</style>
