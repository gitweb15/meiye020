<template>
	<!-- 首页 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="one daxiao">
					<router-link tag="div" to="/dingdan" class="one-div">
						<p class="pp">
							<img src="../assets/u2049.png" class="img" />
							<span class="shuzi">{{daiqueren}}</span>
						</p>
						<p class="pp1">
							待确认订单
						</p>
					</router-link>
					<img src="../assets/u2045.png" class="xian" />
					<router-link tag="div" to="/dingdan" class="one-div">
						<p class="pp">
							<img src="../assets/u2049.png" class="img" />
							<span class="shuzi">{{daifuwe}}</span>
						</p>
						<p class="pp1">
							待服务订单
						</p>
					</router-link>
					<img src="../assets/u2045.png" class="xian" />
					<router-link tag="div" to="/dingdan" class="one-div">
						<p class="pp">
							<img src="../assets/u2049.png" class="img" />
							<span class="shuzi">{{shenqing}}</span>
						</p>
						<p class="pp1">
							申请退款
						</p>
					</router-link>
				</div>
				<div class="two daxiao">
					<p class="hengtiao">
						昨日关键指标
					</p>
					<div>
						<p class="pp2">成交订单数：{{chenggong}}</p>
						<img src="../assets/u2045.png" class="xian1" />
						<p class="pp2">服务人数：{{fuwu}}</p>
						<img src="../assets/u2045.png" class="xian1" />
						<p class="pp2">取消订单：{{quexiao}}</p>
						<img src="../assets/u2045.png" class="xian1" />
						<p class="pp2">成交金额：{{chengjiao}}</p>
					</div>
				</div>
				<div class="three daxiao">
					<p class="hengtiao">
						关键指标趋势图
					</p>
					<!-- 二级路由渲染 -->
					<div style="width: 100%;height: 265px;">
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</div>
					<!-- 点击切换二级路由 -->
					<div class="qiehuan">
						<router-link tag="p" class="dianji" to="/shouye/quxian1"><span class="xian2"></span>成交订单</router-link>
						<router-link tag="p" class="dianji" to="/shouye/quxian2"><span class="xian2"></span>服务人数</router-link>
						<router-link tag="p" class="dianji" to="/shouye/quxian3"><span class="xian2"></span>取消订单</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'shouye',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				daiqueren: '20', //待确认订单
				daifuwe: '10', //待服务订单
				shenqing: '10', //申请退款
				chenggong: '20', //成交订单数
				fuwu: '20', //服务人数
				quexiao: '20', //取消订单
				chengjiao: '2000.0', //成交金额
			}
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1058px;
		height: 715px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.neirong {
		display: inline-block;
		float: left;
		padding-top: 5px;
		width: 895px;
		height: 710px;
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.daxiao {
		width: 860px;
		position: relative;
		margin: 0px auto;
	}

	.one {
		height: 100px;
		background-color: #7cbae5;
		border: 1px solid #7cbae5;
		margin-top: 16px;
	}

	.two {
		height: 123px;
		border: 1px solid #e4e4e4;
		margin-top: 10px;
	}

	.three {
		height: 370px;
		border: 1px solid #e4e4e4;
		margin-top: 18px;
	}

	.one-div {
		display: inline-block;
		width: 33.1%;
		height: 100%;
		padding-top: 5px;
		cursor: pointer;
	}

	.img {
		width: 30px;
		height: 30px;
		vertical-align: middle;
	}

	.xian {
		width: 2px;
		height: 72px;
	}

	.xian1 {
		width: 1px;
		height: 23px;
		position: relative;
		top: 6px;
	}

	.shuzi {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 25px;
		color: #FFFFFF;
		margin-left: 10px;
		position: relative;
		top: 8px;
	}

	.pp,
	.pp1 {
		width: 100%;
		height: 60%;
		text-align: center;
	}

	.pp {
		box-sizing: border-box;
		padding: 15px 0px 0px 0px
	}

	.pp1 {
		height: 40%;
		font-size: 25px;
		color: #FFFFFF;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
	}

	.hengtiao {
		width: 100%;
		height: 32px;
		background-color: #f2f2f2;
		border-bottom: 1px solid #e4e4e4;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		box-sizing: border-box;
		padding: 7px 0px 0px 14px;
	}

	.pp2 {
		display: inline-block;
		width: 23%;
		margin: 31px 0px 0px 16px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		letter-spacing: normal;
		color: #333333;
	}

	.qiehuan {
		width: 100%;
		text-align: center;
	}

	.dianji {
		font-size: 14px;
		color: #333;
		width: 115px;
		text-align: center;
		display: inline-block;
		margin: 0px 30px;
		cursor: pointer;
	}

	.xian2 {
		width: 20px;
		display: inline-block;
	    margin-right: 30px;
		position: relative;
		top: -3px;
	}

	.dianji:nth-of-type(1) .xian2 {
		border: 2px solid #3eba48;
	}

	.dianji:nth-of-type(2) .xian2 {
		border: 2px solid #0055AF;
	}

	.dianji:nth-of-type(3) .xian2 {
		border: 2px solid #F03D37;
	}
</style>
