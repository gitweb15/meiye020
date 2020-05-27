<template>
	<!-- 首页 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<div class="one">
						<router-link tag="div" to="" class="one-div">
							<p class="pp">
								<img src="../assets/u2049.png" class="img" />
								<span class="shuzi">{{daiqueren}}</span>
							</p>
							<p class="pp1">
								待确认订单
							</p>
						</router-link>
						<img src="../assets/u2045.png" class="xian" />
						<router-link tag="div" to="" class="one-div">
							<p class="pp">
								<img src="../assets/u2049.png" class="img" />
								<span class="shuzi">{{shenqing}}</span>
							</p>
							<p class="pp1">
								申请退款
							</p>
						</router-link>
					</div>
					<div class="two">
						<div class="hengtiao">
							昨日关键指标
						</div>
						<div class="xinxi ziti" style="font-size: 18px;">
							<el-row>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple">成交订单：{{chengjiaodd}}</div>
								</el-col>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple-light">取消订单：{{quexiaodd}}</div>
								</el-col>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple">成交金额：{{chengjiaoje}}</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple">注册会员：{{huiyuan}}</div>
								</el-col>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple-light">注册美体师：{{meitishi}}</div>
								</el-col>
								<el-col :span="8">
									<div class="xinxi1 grid-content bg-purple">注册门店：{{mendian}}</div>
								</el-col>
							</el-row>
						</div>
					</div>
					<div class="three">
						<div class="hengtiao">
							关键指标趋势图
							<select class="select" v-model="selected" @change="changeHref(parseInt(selected))">
								<option value="1">成交订单</option>
								<option value="2">取消订单</option>
								<option value="3">成交金额</option>
								<option value="4">成交金额</option>
								<option value="5">注册美体师</option>
								<option value="6">注册门店</option>
							</select>
						</div>
						<!-- 二级路由渲染 -->
						<div style="width: 100%;height: 265px;">
							<keep-alive>
								<router-view></router-view>
							</keep-alive>
						</div>
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
				shenqing: '10', //申请退款
				chengjiaodd: '200', //成交订单
				quexiaodd: '3000', //取消订单
				chengjiaoje: '3000', //成交金额
				huiyuan: '1000', //注册会员
				meitishi: '30', //注册美体师
				mendian: '10', //注册门店
				selected: 1, //接受select数据
			}
		},
		methods: {
			//点击option切换二级路由
			changeHref: function(sortnum) {
				switch (sortnum) {
					case 1:
						this.$router.push({
							path: "/quxian1"
						});
						break;
					case 2:
						this.$router.push({
							path: "/quxian2"
						});
						break;

					case 3:
						this.$router.push({
							path: "/quxian3"
						});
						break;
					case 4:
						this.$router.push({
							path: "/quxian4"
						});
						break;
					case 5:
						this.$router.push({
							path: "/quxian5"
						});
						break;

					case 6:
						this.$router.push({
							path: "/quxian6"
						});
						break;
				}
			}
		}
	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 150px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 95%;
		position: relative;
		margin: 0px auto;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
	}

	.one {
		width: 100%;
		height: 100px;
		background-color: #7cbae5;
		border: 1px solid #7cbae5;
		margin-top: 16px;
		position: relative;
	}

	.one-div {
		width: 49.8%;
		height: 100%;
		padding-top: 5px;
		cursor: pointer;
		display: inline-block;
	}

	.img {
		width: 30px;
		height: 30px;
		vertical-align: middle;
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
		font-weight: 700;
	}

	.shuzi {
		font-weight: 700;
		font-size: 25px;
		color: #FFFFFF;
		margin-left: 10px;
		position: relative;
		top: 8px;
	}

	.two {
		width: 100%;
		position: relative;
		margin-top: 10px;
		border: 1px solid #e4e4e4;
	}

	.two::after {
		content: '';
		display: inline-block;
		clear: both;
	}

	.hengtiao {
		width: 100%;
		height: 32px;
		background-color: #f2f2f2;
		border-bottom: 1px solid #e4e4e4;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 13px;
		color: #333333;
		box-sizing: border-box;
		padding: 7px 14px 0px 14px;
	}

	.xinxi1 {
		box-sizing: border-box;
		padding: 20px 20px 5px 20px;
	}

	.three {
		width: 100%;
		position: relative;
		margin-top: 18px;
		border: 1px solid #e4e4e4;
	}

	.three::after {
		content: '';
		display: inline-block;
		clear: both;
	}

	.select {
		width: 200px;
		float: right;
	}

	.span {
		width: 20px;
		height: 15px;
		cursor: pointer;
	}
</style>
