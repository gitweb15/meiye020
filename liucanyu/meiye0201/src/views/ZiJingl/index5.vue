<template>
	<!-- 日记-待服务页面 -->
	<div id="center">
		<!-- 头部 -->
		<Header1 title="资金详情"></Header1>
		<!-- 信息加载 -->
		<div class="center">
			<div class="neirong">
				<div class="div zhiti">
					<img :src="touxiang" class="img">
					<span class="name">{{zhanghu}}（客户账号）</span>
				</div>
				<div class="div zhiti">
					<span class="biaoti">交易金额</span>
					<span class="money">{{money}}</span>
				</div>
				<div class="div zhiti">
					<p class="pp">
						<span class="biaoti">收入金额</span>
						<span class="xianshi">{{shouru}}</span>
					</p>
					<p class="pp zhiti">
						<span class="biaoti">支出费用</span>
						<span class="xianshi">{{zhichu}}</span>
					</p>
				</div>
				<div class="div zhiti">
					<p class="pp">
						<span class="biaoti">项目信息</span>
						<span class="xianshi">{{xiangmu}}</span>
					</p>
					<p class="pp zhiti">
						<span class="biaoti">创建时间</span>
						<span class="xianshi">{{chuangjian}}</span>
					</p>
					<p class="pp zhiti">
						<span class="biaoti">返款时间</span>
						<span class="xianshi">{{fankuan}}</span>
					</p>
					<p class="pp zhiti">
						<span class="biaoti">订单标号</span>
						<span class="xianshi">{{bianhao}}</span>
					</p>
					<p class="pp zhiti">
						<span class="biaoti">交易流水</span>
						<span class="xianshi">{{liushui}}</span>
					</p>
					<p class="yi">
						{{yi}}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'yituikuan',
		components: {
			Header1
		},
		data() {
			return {
				touxiang: '/img/touxiang.966fe5a4.png', //头像
				zhanghu: '13800138000', //客服账户
				money: '115.2', //交易金额
				shouru: '128.00', //收入金额
				zhichu: '12.80', //支出费用
				xiangmu: '美胸保健', //项目信息
				chuangjian: '2014-12-05  14:22:12', //创建时间
				jiesuan: '2014-12-05  14:22:12', //结算时间
				fankuan: '2014-12-05  14:22:12', //返款时间
				bianhao: '2014120514221203', //订单标号
				liushui: '2014120514221203', //流水交易
				yi: '已退款', //服务操作
			}
		}
	}
</script>

<style scoped>
	#center {
		border-width: 0px;
		position: relative;
		width: 100%;
		background-color: rgba(229, 229, 229, 1);
		padding-bottom: 110px;
	}

	#center::after {
		content: '';
		display: block;
		clear: both;
	}

	.center {
		border-width: 0px;
		position: relative;
		width: 100%;
		background-color: #fff;
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
		font-size: 15px;
		letter-spacing: normal;
		color: #666666;
	}

	.neirong {
		width: 97%;
		float: right;
		position: relative;
	}

	.neirong::after {
		content: '';
		display: block;
		clear: both;
	}

	.div {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #E5E5E5;
	}

	.div::after {
		content: '';
		display: block;
		clear: both;
	}

	.img {
		width: 40px;
		height: 40px;
		display: inline-block;
		padding: 10px 0px 10px;
	}

	.name {
		display: inline-block;
		position: relative;
		top: -23px;
		left: 20px;
	}

	.pp {
		width: 100%;
		position: relative;
	}

	.pp::after {
		content: '';
		display: block;
		clear: both;
	}

	.biaoti {
		float: left;
		display: inline-block;
		position: relative;
		margin-bottom: 10px;
		width: 20%;
	}

	.biaoti:first-child {
		margin-top: 10px;
	}

	.biaoti:last-child {
		margin-bottom: 18px;
	}

	.money {
		float: right;
		font-size: 32px;
		font-weight: 700;
		color: #333;
		margin: 20px 44px 20px 0px;
	}

	.xianshi {
		display: inline-block;
		margin-top: 10px;
	}

	.yi {
		font-size: 18px;
		font-weight: 700;
		text-align: center;
		width: 100%;
		position: relative;
		margin: 17px 0px;
		color: #333333;
	}
</style>
