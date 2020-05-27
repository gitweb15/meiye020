<template>
	<!-- 资金管理页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="center">
					<div class="timu">
						<div class="header-zuo">
							<div class="header-zuo-one" style="float: left;">
								<p class="shouyi1 zhiti">预期收益</p>
								<p class="num1">{{yuqi}}</p>
							</div>
							<div class="header-zuo-two" style="float: left;">
								<p class="tishi zhiti">每周二结算上周资金</p>
								<p class="zhiti">绑定银行卡后可结算，<router-link to="/yinhangka">去绑定银行卡</router-link>
								</p>
							</div>
						</div>
						<img src="../assets/u2045.png" class="xian" />
						<div class="header-zhong">
							<p class="shouyi zhiti">预期收益</p>
							<p class="num">{{yuqishouyi}}</p>
						</div>
						<img src="../assets/u2045.png" class="xian" />
						<div class="header-you">
							<p class="shouyi zhiti">已结算收益</p>
							<p class="num">{{yijiesuan}}</p>
						</div>
					</div>
					<div class="xiadan">
						<p class="time1 zhiti" @click="tianshu(1)">今日</p>
						<p class="time1 zhiti" @click="tianshu(7)">最近7天</p>
						<p class="time1 zhiti" @click="tianshu(15)">最近15天</p>
						<p class="time1 zhiti" @click="tianshu(30)">最近30天</p>
						<el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期"
						 end-placeholder="结束日期" @change="chooseTimeRange" value-format="yyyy-MM-dd">
						</el-date-picker>
					</div>
					<div class="xuanze">
						<span style="display: inline-block;padding-right: 43px;line-height: 19px;font-size: 14px;">交易类型</span>
						<el-checkbox-group v-model="checkList" style="display:inline-block">
							<el-checkbox label="全部"></el-checkbox>
							<el-checkbox label="交易"></el-checkbox>
							<el-checkbox label="退款"></el-checkbox>
							<el-checkbox label="结算"></el-checkbox>
							<el-checkbox label="服务费"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div class="xiadan">
						<!-- <p class="time1 zhiti active">全部</p>
						<p class="time1 zhiti">收入</p>
						<p class="time1 zhiti">支出</p> -->
						<p class="time1 zhiti" :class="activeClass== index ? 'active':''" v-for="(n,index) in list" :key="index" @click="getItem(index)">
							{{n.text}}</p>
					</div>
					<div class="timu">
						<div class="zuo">
							<p class="shouyi1 zhiti">预期收益</p>
							<p class="num1" style="font-size: 22px;">{{yuqi1}}</p>
						</div>
						<img src="../assets/u2045.png" class="xian" />
						<div class="you">
							<p class="shouyi zhiti">支出</p>
							<p class="num" style="font-size: 22px;">{{shouru}}</p>
						</div>
					</div>
					<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
						<el-table-column prop="date" label="入账时间">
						</el-table-column>
						<el-table-column prop="bianhao" label="订单编号">
						</el-table-column>
						<el-table-column prop="jiaoyi" label="交易流水号">
						</el-table-column>
						<el-table-column prop="leixing" label="交易类型">
							<p>交易</p>
							<p>服务费</p>
						</el-table-column>
						<el-table-column prop="zhichu" label="收支金额">
							<template slot-scope="scope">
								<p>+{{scope.row.num1}}</p>
								<p>-{{scope.row.num2}}</p>
							</template>
						</el-table-column>
						<el-table-column prop="zhuantai" label="状态">
						</el-table-column>
						<el-table-column prop="caozuo" label="操作">
							<template slot-scope="scope">
								<router-link :to="scope.row.lianjie">详情</router-link>
							</template>
						</el-table-column>
					</el-table>
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
		name: 'zijin',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				checkList: [], //复选框遍历
				tableData: [{
					date: '2014-12-10 14:22:12', //入账时间
					bianhao: '201412241234', //订单编号
					jiaoyi: '12014122412300', //交易流水号
					zhuantai: '待结算', //状态
					num1: '128.0', //收入金额1
					num2: '12.8', //收出金额2
					lianjie: '/zijinxiangqing' //跳转路径
				}, {
					date: '2014-12-10 14:22:12',
					bianhao: '201412241234',
					jiaoyi: '12014122412300',
					zhuantai: '待返款',
					num1: '128.0',
					num2: '12.8',
					lianjie: '/zijinxiangqing'
				}],
				yuqi: '999.0', //预期收益
				yuqishouyi: '999.0', //预期收益
				yijiesuan: '1999.0', //已结算收益
				yuqi1: '1999.0', //预期收益
				shouru: '1999.0', //支出
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], //element框架数据
				value2: '', //element框架接受值
				list: [{
						text: '全部' //点击按钮
					},
					{
						text: '收入'
					},
					{
						text: '支出'
					}
				],
				activeClass: 0 //变色接受数据
			}
		},
		methods: {
			//点击变色
			getItem(index) {
				this.activeClass = index;
				console.log(index + "类型")
			},
			//接受天数
			tianshu(index) {
				var tianshu = index;
				console.log(tianshu + "天");
			},
			//时间
			chooseTimeRange(t) {
				console.log(t); //结果为一个数组，如：["2018-08-04", "2018-08-06"]
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
		/* height: 715px; */
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.content:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong {
		display: inline-block;
		float: left;
		margin-top: 5px;
		width: 895px;
		/* height: 710px; */
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.neirong:after {
		display: block;
		clear: both;
		content: '';
	}

	.center {
		width: 879px;
		display: inline-block;
		float: right;
		position: relative;
	}

	.center:after {
		display: block;
		clear: both;
		content: '';
	}

	.timu {
		width: 100%;
		height: 110px;
		border-bottom: 1px solid #E4E4E4;
	}

	.header-zuo,
	.header-zhong,
	.header-you {
		display: inline-block;
		height: 100%;
		float: left;
	}

	.header-zuo {
		width: 377px;
	}

	.header-zhong {
		width: 216px;
	}

	.header-you {
		width: 277px;
	}

	.xian {
		width: 1px;
		height: 77px;
		margin-top: 16px;
		float: left;
	}

	.shouyi {
		font-size: 15px;
		margin: 26px 0px 15px 32px;
	}

	.num {
		color: #666666;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
		text-align: left;
		margin: 0px 0px 0px 32px;
	}

	.header-zuo-one {
		width: 113px;
		height: 100%;
		display: inline-block;
	}

	.shouyi1 {
		font-size: 15px;
		margin: 26px 0px 15px 0px;
	}

	.num1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
		text-align: left;
		color: #333333;
	}

	.tishi {
		font-size: 12px;
		color: #999999;
		margin: 25px 0px 40px 0px;
	}

	a {
		color: rgb(0, 0, 255);
	}

	a:hover {
		text-decoration: underline;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		color: #333333;
	}

	.xiadan {
		margin-top: 12px;
		margin-bottom: 20px;
	}

	.time1 {
		display: inline-block;
		padding: 11px 30px;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		cursor: pointer;
		border-radius: 6px;
	}

	.time1:nth-of-type(1) {
		border-left: 1px solid #e4e4e4;
	}

	.xuanze {
		margin-bottom: 22px;
	}

	.el-checkbox__input.is-checked+.el-checkbox__label {
		color: #606266;
	}

	.el-checkbox__input.is-checked .el-checkbox__inner,
	.el-checkbox__input.is-indeterminate .el-checkbox__inner {
		background-color: #606266;
		border-color: #606266;
	}

	.active {
		background-color: #fbc15e;
	}

	.zuo,
	.you {
		display: inline-block;
		float: left;
		width: 49.5%;
		height: 100%;
	}

	a {
		color: #0000FF;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
