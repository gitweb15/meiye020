<template>
	<!-- 日记-待服务页面 -->
	<div id="center">
		<!-- 头部 -->
		<Header1 title="订单详情"></Header1>
		<!-- 信息加载 -->
		<div class="center">
			<div class="neirong">
				<p class="one zhiti">
					<span class="one-zuo">订单编号：{{bianhao}}</span>
					<span class="one-you">{{dai}}</span>
				</p>
				<div class="two zhiti">
					<p>服务项目：{{name}}</p>
					<p>服务时间：{{time}}</p>
					<p>服务地点：{{dizhi}}</p>
					<p>联系电话：{{phone}}（用户电话）</p>
				</div>
				<div class="two zhiti">
					<p>下单时间：{{xiadantime}}</p>
					<p>订单金额：{{money}}</p>
				</div>
				<div class="pingjia">
					<p>评价信息</p>
					<p><span class="timu">专业</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value" readonly /></span></p>
					<p><span class="timu">态度</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value1" readonly /></span></p>
					<p><span class="timu">守时</span> <span class="xing">
							<van-rate color="#1076ff" v-model="value2" readonly /></span></p>
					<p id="miaoshu">{{miaoshu}}</p>
				</div>
			</div>
			<van-button type="default" class="anniu" is-link url="">已退款</van-button>
			<van-button type="default" class="anniu" is-link url="">联系客户</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'wancheng',
		components: {
			Header1
		},
		data() {
			return {
				value: 5, //五星评分
				value1: 5,
				value2: 5,
				bianhao: '201412081234', //订单编号
				dai: '申请退款', //服务状态
				name: '项目名称', //服务项目
				time: '2014-12-15 17:30', //服务时间
				dizhi: '用户地址/门店地址', //服务地点
				phone: '13800138000', //联系电话
				xiadantime: '2014-12-15 17:25:24', //下单时间
				money: '128.00', //订单金额
				//申请描述
				miaoshu: '评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，评价描述，'
			}
		}
	}
</script>

<style scoped>
	.center {
		border-width: 0px;
		position: relative;
		width: 100%;
		background-color: rgba(229, 229, 229, 1);
		padding-top: 5px;
		padding-bottom: 50px;
	}

	.center::after {
		content: '';
		display: block;
		clear: both;
	}

	.zhiti {
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
		background-color: #fff;
		margin-top: 5px;
		margin-bottom: 10px;
	}

	.neirong::after {
		content: '';
		display: block;
		clear: both;
	}

	.one {
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

	.pingjia {
		width: 100%;
		background-color: #fff;
		float: left;
	}

	.pingjia p {
		height: 25%;
		box-sizing: border-box;
		padding: 8px 0px 0px 20px;
		margin-bottom: 7px;
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

	#miaoshu {
		padding: 4px 18px 15px 18px;
		width: 100%;
	}
</style>
