<template>
	<!-- 订单管理页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="neirong1">
					<!-- 搜索框 -->
					<table class="table zhiti" cellpadding="0">
						<tr>
							<td>订单编号</td>
							<td>手机号码</td>
							<td>项目名称</td>
						</tr>
						<tr>
							<td>
								<input type="text" class="text" v-model="bianhao" />
							</td>
							<td>
								<input type="text" class="text" v-model="phone" />
							</td>
							<td>
								<input type="text" class="text" v-model="name" />
							</td>
							<td>
								<span class="xiugai" @click="tijiao">提交修改</span>
							</td>
						</tr>
					</table>
					<!-- 点击查询时间 -->
					<div class="xiadan">
						<span class="time">下单时间</span>
						<p class="time1 zhiti" @click="tianshu(7)">最近7天</p>
						<p class="time1 zhiti" @click="tianshu(15)">最近15天</p>
						<p class="time1 zhiti" @click="tianshu(30)">最近30天</p>
						<el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期"
						 end-placeholder="结束日期" @change="chooseTimeRange" value-format="yyyy-MM-dd">
						</el-date-picker>
					</div>
					<!-- 查询订单类型 -->
					<ul class="dindan zhiti">
						<li :class="activeClass== index ? 'active':''" v-for="(n,index) in list" :key="index" @click="getItem(index)">
							{{n.tishi}}
						</li>
					</ul>
					<!-- table表加载 -->
					<Table1></Table1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	import Table1 from '../components/Table/table1.vue'
	export default {
		name: 'dingdan',
		components: {
			Header,
			Aside,
			Table1
		},
		data() {
			return {
				bianhao: '', //订单编号
				phone: '', //手机号码
				name: '', //项目名称
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], //element框架时间
				value2: '', //element框架时间接收值
				list: [{
						tishi: '全部订单', //订单类型
					},
					{
						tishi: '待支付订单',
					},
					{
						tishi: '待确认订单',
					},
					{
						tishi: '待服务订单',
					},
					{
						tishi: '待评价订单',
					},
					{
						tishi: '已完成订单',
					},
					{
						tishi: '已取消订单',
					},
					{
						tishi: '售后订单',
					}
				],
				activeClass: 0
			}
		},
		methods: {
			//点击切换变色
			getItem(index) {
				this.activeClass = index;
				console.log(index);
			},
			//提交修改
			tijiao() {
				//订单编号
				var bianhao1 = this.bianhao;
				//手机号码
				var phone1 = this.phone;
				//项目名称
				var name1 = this.name;
				console.log("订单编号:" + bianhao1, "手机号码:" + phone1, "项目名称:" + name1)

				this.bianhao = null;
				this.phone = null;
				this.name = null;
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

	.neirong1 {
		display: inline-block;
		float: right;
		width: 879px;
		/* height: 710px; */
		position: relative;
	}

	.neirong1:after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		color: #333333;
	}

	.table {
		font-size: 15px;
		margin: 30px 0px 14px;
	}

	.text {
		width: 171px;
		height: 21px;
		/* padding: 3px 2px 3px 2px; */
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		text-decoration: none;
		text-align: left;
		border: 1px solid rgba(121, 121, 121, 1);
	}

	.table tr td {
		width: 171px;
		margin-bottom: 8px;
		margin-right: 40px;
		display: inline-block;
	}

	.xiugai {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		color: #000;

		float: left;

		display: inline-block;
		text-align: center;
		width: 110px;
		height: 25px;
		background-color: rgba(255, 255, 255, 0);
		box-sizing: border-box;
		border: 1px solid rgba(121, 121, 121, 1);

		position: relative;

		line-height: 23px;
		cursor: pointer;
	}

	.xiadan {
		margin-bottom: 20px;
		font-size: 15px;
	}

	.time {
		display: inline-block;
		margin: 11px 12px 11px 0px;
	}

	.time1 {
		display: inline-block;
		padding: 11px 30px;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		cursor: pointer;
		border-radius: 7px;
	}

	.time1:nth-of-type(1) {
		border-left: 1px solid #e4e4e4;
	}

	.dindan {
		width: 100%;
		margin-bottom: 10px;
		height: 38px;
		border: 1px solid #e4e4e4;
		font-size: 15px;
	}

	.dindan li {
		float: left;
		border-right: 1px solid #E4E4E4;
		margin: 10px 0px;
		padding: 0px 18px;
		cursor: pointer;
	}

	.active {
		color: #9933FF;
	}

	.dindan li:last-child {
		border-right: 0px solid #E4E4E4;
	}

	.dindan1 {
		width: 100%;
		margin-bottom: 10px;
		height: 38px;
		border: 1px solid #e4e4e4;
	}

	.dindan1 li {
		float: left;
		margin: 11px 0px;
		width: 10%;
	}
</style>
