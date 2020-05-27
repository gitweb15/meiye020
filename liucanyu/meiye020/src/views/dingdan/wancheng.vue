<template>
	<!-- 日记-已完成面 -->
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
				<router-link tag="div" to="/mtszhuye" class="three">
					<span style="width: 50px;height: 50px;margin: 15px 0px 0px 0px;float: left;"><img :src="tupian" style="width: 100%;" /></span>
					<p id="jieshao">
						<span>{{xingming}}</span>
						<span>{{pingjia}}</span>
					</p>
					<img src="../../../public/image/u155.png" style="float: right;width:36px; margin: 25px 0px 0px 0px;" />
				</router-link>
				<div class="pingjia">
					<p>评价信息</p>
					<p><span class="timu">专业</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value" readonly /></span></p>
					<p><span class="timu">态度</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value1" readonly /></span></p>
					<p><span class="timu">守时</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value2" readonly /></span></p>
				</div>
			</div>
			<div class="pingjia1">
				{{pingjia1}}
			</div>
			<van-button type="default" class="anniu" is-link url="/sqshouhou">申请退款</van-button>
			<van-button type="default" class="anniu" is-link url="">联系美体师</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'wancheng',
		components: {
			Header3
		},
		data() {
			return {
				value: 5, //五星评分
				value1: 5,
				value2: 5,
				bianhao: '201412081234', //订单编号
				dai: '已完成', //服务状态
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
				pingjia: '守时：5.0 专业5.0 沟通5.0', //评分
				pingjia1: '评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，' //评价描述
			}
		}
	}
</script>

<style scoped>
	.zhifu {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 800px;
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
		height: 540px;
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

	.three {
		height: 85px;
		/* border-bottom: 1px solid #e3e3e3; */
		width: 95%;
		float: right;
	}

	#jieshao {
		width: 75%;
		display: inline-block;
		float: left;
	}

	#jieshao span {
		margin: 15px 0px 0px 20px;
		width: 85%;
		display: block;
	}

	.pingjia {
		width: 100%;
		height: 120px;
		background-color: #fff;
		border-top: 1px #e3e3e3 solid;
		float: left;
	}

	.pingjia p {
		height: 25%;
		box-sizing: border-box;
		padding: 8px 0px 0px 20px;
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
		width: 25px;
	}

	.pingjia1 {
		width: 100%;
		height: 60px;
		box-sizing: border-box;
		padding: 0px 12px;
	}
</style>
