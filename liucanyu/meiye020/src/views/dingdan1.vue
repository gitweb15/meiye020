<template>
	<!-- 登录后日记页面 -->
	<div id="dingdan">
		<!-- 头部 -->
		<Header2 title="订单"></Header2>
		<div id="dingdan">
			<!-- 列表信息加载 -->
			<ul class="dingdan1">
				<li v-for="n in list" :key="n.index">
					<router-link tag="div" :to="n.lujing" class="dingdanClick">
						<div class="dingdanClick-zuo">
							<div>订单编号：{{n.bianhao}}</div>
							<div>服务项目：{{n.xiangmu}}</div>
							<div>服务时间：{{n.time}}</div>
							<div>服务地点：{{n.dizhi}}</div>
						</div>
						<div class="dingdanClick-you">
							<span class="dai">{{n.xuanze}}</span>
						</div>
					</router-link>
					<div class="dingdanShow">
						<span class="zise">{{n.zise}}</span>
						<img src="../../public/image/u84.png" class="xian" />
						<span class="zise">{{n.xinxi}}</span>
					</div>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header2 from '../components/header2.vue';
	import Footer from '../components/weibu.vue';
	export default {
		name: 'dingdan1',
		components: {
			Header2,
			Footer
		},
		data() {
			return {
				list: [{
						lujing: '/zhifu',//跳转路径
						bianhao: '201412151234',//订单编号
						xiangmu: '美体',//服务项目
						time: '2014-12-25 17:00',//服务时间
						dizhi: '白云区汇侨路10号212A',//服务地点
						xuanze: '待支付',//状态
						zise: '立即支付',//步骤
						xinxi: ''//信息
					},
					{
						lujing: '/queren',
						bianhao: '201412151234',
						xiangmu: '美体',
						time: '2014-12-25 17:00',
						dizhi: '白云区汇侨路10号212A',
						xuanze: '待确认',
						zise: '取消订单',
						xinxi: ''
					},
					{
						lujing: '/fuwu',
						bianhao: '201412151234',
						xiangmu: '美体',
						time: '2014-12-25 17:00',
						dizhi: '白云区汇侨路10号212A',
						xuanze: '待服务',
						zise: '取消订单',
						xinxi: '美体师信息'
					},
					{
						lujing: '/pingjia',
						bianhao: '201412151234',
						xiangmu: '美体',
						time: '2014-12-25 17:00',
						dizhi: '白云区汇侨路10号212A',
						xuanze: '待评价',
						zise: '去评价',
						xinxi: '美体师信息'
					},
					{
						lujing: '/wancheng',
						bianhao: '201412151234',
						xiangmu: '美体',
						time: '2014-12-25 17:00',
						dizhi: '白云区汇侨路10号212A',
						xuanze: '已完成',
						zise: '去评价',
						xinxi: '申请售后'
					},
					{
						lujing: '/quexiao',
						bianhao: '201412151234',
						xiangmu: '美体',
						time: '2014-12-25 17:00',
						dizhi: '白云区汇侨路10号212A',
						xuanze: '已取消',
						zise: '退款处理中',
						xinxi: ''
					}
				]
			}
		}
	}
</script>

<style scoped>
	#dingdan {
		border-width: 0px;
		position: relative;
		width: 100%;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
	}

	.dingdan1 {
		position: relative;
		width: 100%;
	}

	.dingdan1 li {
		margin: 8px auto 0px;
		width: 99%;
		height: 170px;
		background-color: #fff;
		border: 1px solid rgba(228, 228, 228, 1);
	}

	.dingdan1 li:last-child {
		margin-bottom: 50px;
	}

	.dingdanClick {
		position: relative;
		width: 100%;
		height: 140px;
		cursor: pointer;
	}

	.dingdanClick-zuo,
	.dingdanClick-you {
		height: 100%;
		float: left;
	}

	.dingdanClick-zuo {
		width: 80%;
	}

	.dingdanClick-zuo div {
		width: 216px;
		height: 15px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		margin: 15px 0px 0px 15px;
	}

	.dingdanClick-you {
		width: 20%;
	}

	.dai {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		float: right;
		margin: 10px 10px 0px 0px;
	}

	.dingdanShow {
		border-top: 1px solid #e4e4e4;
		position: relative;
		width: 100%;
		height: 29px;
	}

	.zise {
		display: inline-block;
		float: right;
		border-width: 0px;
		width: 99px;
		height: 15px;
		background: inherit;
		background-color: rgba(255, 255, 255, 0);
		border: none;
		text-align: center;
		line-height: 28px;
	}

	.zise:nth-of-type(1) {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #9933FF;

	}

	.zise:nth-of-type(2) {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.xian {
		display: inline-block;
		float: right;
		width: 2px;
		height: 20px;
		background-color: rgba(255, 255, 255, 0);
		text-align: center;
		line-height: 27px;
		position: relative;
		top: 5px;
		left: 4px;
	}

	#list li:nth-of-type(2) {
		height: 50px;
		background: url(../../public/image/u17.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
