<template>
	<!-- 资金管理 -->
	<div id="conter">
		<!-- 头部 -->
		<Header1 title="资金管理"></Header1>
		<div class="conter">
			<p class="tishi zhiti">每周二结算上周收益，结算至您绑定的银行卡中</p>
			<div class="yinghangka zhiti">
				<div class="yhk-shang">
					<span class="shang-zuo">
						待返款收益<strong>￥{{fankuan}}</strong>
					</span>
					<router-link tag="span" to="/yinhangka" class="shang-you">
						绑定银行卡
					</router-link>
				</div>
				<div class="yhk-xia">
					<span class="yhk-zuo">待结算收益￥{{jiesuan}}</span>
					<span class="yhk-you">已返款收益￥{{yifankuan}}</span>
				</div>
			</div>
			<p class="tishi zhiti">本月</p>
			<ul class="list zhiti">
				<router-link tag="li" v-for="n in list" :key="n.index" :to="n.to">
					<div class="one"><span class="list-zuo">订单编号：{{n.bianhao}}</span><span class="list-you">{{n.dai}}</span></div>
					<div class="two">订单金额：{{n.money}}</div>
					<div class="three"><span class="list-zuo">服务雇金：{{n.guyong}}</span><span class="list-you">{{n.time}}</span></div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'zijiguanli',
		components: {
			Header1
		},
		data() {
			return {
				fankuan: '99.0', //待返款收益
				jiesuan: '128.0', //待结算收益
				yifankuan: '128.0', //已返款收益
				//订单记录
				list: [{
						to: '/daijiesuan', //跳转路径
						bianhao: '204141230123', //订单编号
						dai: '待结算', //待服务
						money: '128.0', //订单金额
						guyong: '12.80', //服务雇金
						time: '12-08', //时间
					},
					{
						to: '/daifankuan', //跳转路径
						bianhao: '204141230123', //订单编号
						dai: '待返款', //待服务
						money: '128.0', //订单金额
						guyong: '12.80', //服务雇金
						time: '12-08', //时间
					},
					{
						to: '/yifankuan', //跳转路径
						bianhao: '204141230123', //订单编号
						dai: '已返款', //待服务
						money: '128.0', //订单金额
						guyong: '12.80', //服务雇金
						time: '12-08', //时间
					}, {
						to: '/daituikuan', //跳转路径
						bianhao: '204141230123', //订单编号
						dai: '待退款', //待服务
						money: '128.0', //订单金额
						guyong: '12.80', //服务雇金
						time: '12-08', //时间
					},
					{
						to: '/yituikuan', //跳转路径
						bianhao: '204141230123', //订单编号
						dai: '已退款', //待服务
						money: '128.0', //订单金额
						guyong: '12.80', //服务雇金
						time: '12-08', //时间
					}
				]
			}
		},
		methods: {}
	}
</script>

<style scoped>
	#conter {
		width: 100%;
		position: relative;
		background-color: #e5e5e5;
		padding-bottom: 50px;
	}

	#conter::after {
		display: block;
		clear: both;
		content: '';
	}

	.conter {
		width: 100%;
		position: relative;
	}

	.conter::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.tishi {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 10px 8px;
	}

	.yinghangka {
		width: 100%;
		background-color: #fff;
		position: relative;
	}

	.yinghangka::after {
		display: block;
		clear: both;
		content: '';
	}

	.yhk-shang {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e4e4e4;
	}

	.yhk-shang::after {
		display: block;
		clear: both;
		content: '';
	}

	.shang-zuo {
		width: 65%;
		position: relative;
		float: left;
		box-sizing: border-box;
		padding: 10px 8px;
	}

	.shang-you {
		width: 34.5%;
		position: relative;
		border-left: 1px solid #E5E5E5;
		float: left;
		text-align: center;
		padding: 10px 0;
		cursor: pointer;
	}

	.yhk-xia {
		width: 100%;
		position: relative;
	}

	.yhk-xia::after {
		display: block;
		clear: both;
		content: '';
	}

	.yhk-zuo,
	.yhk-you {
		width: 50%;
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		padding: 10px 8px;
	}

	.list {
		width: 100%;
		position: relative;
		background-color: #fff;
	}

	.list::after {
		display: block;
		clear: both;
		content: '';
	}

	.list li {
		width: 100%;
		position: relative;
		background-color: #fff;
		border-bottom: 1px solid #E5E5E5;
		box-sizing: border-box;
		padding: 10px 13px 15px 8px;
		cursor: pointer;
	}

	.list li::after {
		display: block;
		clear: both;
		content: '';
	}

	.one,
	.two,
	.three {
		width: 100%;
		position: relative;
		margin-bottom: 13px;
		height: 15px;
	}

	.list-zuo {
		display: inline-block;
		float: left;
	}

	.list-you {
		float: right;
		color: #656565;
		display: inline-block;
	}
</style>
